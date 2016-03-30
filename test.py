import csv
fileReader = csv.reader(open('2016 Primary Elections - Turnout Rates.csv'))
data = []
for row in fileReader:
    if row[1] == 'Washington':
        break
    data.append(row[1:-2])
data = data [2:]

dataV2 = []
doubles = []
for row in data:
    if row[2] == 'D&R':
        dataV2.append(row)
    else:
        if row[0] in [ item[0] for item in data[(data.index(row)+1):] ] :
            doubles.append(row)
        elif row[0] in [ item[0] for item in doubles ] :
            temp = []
            final = row
            for i in doubles:
                if i[0] == row[0]:
                    temp = i
                    break
            if temp[2] == 'D':
                final[6] = temp[6]
            else:
                final[7] = temp[7]
            dataV2.append(final)
            

for row in dataV2:
    del row[2]
    print row

dataV2.insert(0, ['State', 'Election Type', 'VEP Ballots Counted', 'VEP', 'VAP', 'Democrat', 'Republican', 'Minor', 'Total Ballots'])
with open("data.csv", "wb") as f:
    writer = csv.writer(f, quoting=csv.QUOTE_NONE, escapechar=" ")
    writer.writerows(dataV2)