#!/bin/python3

import os

#
# Complete the 'dynamicArray' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER n
#  2. 2D_INTEGER_ARRAY queries
#

def dynamicArray(n: int, queries: list):
    last_answer = 0
    answers_arr = []
    arr = [[] for _ in range(n)]
    
    for q,x,y in queries:
        index = (x^last_answer) % n
        
        if q == 1:
            arr[index].append(y)
        if q == 2:
            last_answer = arr[index][y % len(arr[index])]
            answers_arr.append(last_answer)
    
    return answers_arr

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    q = int(first_multiple_input[1])

    queries = []

    for _ in range(q):
        queries.append(list(map(int, input().rstrip().split())))

    result = dynamicArray(n, queries)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
