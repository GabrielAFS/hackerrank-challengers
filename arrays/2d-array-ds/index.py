#!/bin/python3

import os

#
# Complete the 'hourglassSum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def getHourglassSum(i: int, j: int, arr: list):
    return (
        arr[i][j] +
        arr[i][j+1] +
        arr[i][j+2] +
        arr[i+1][j+1] +
        arr[i+2][j] +
        arr[i+2][j+1] +
        arr[i+2][j+2]
    )

def hourglassSum(arr: list):
    n = len(arr) - 2 # maximum index to get hourglass on array 6x6 (n-2 -> 6-2 = 4)
    hourglass_sums = []
    
    for i in range(n):
        for j in range(n):
            hourglass_sums.append(getHourglassSum(i, j, arr))
    
    return sorted(hourglass_sums, reverse=True)[0]

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))

    result = hourglassSum(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
