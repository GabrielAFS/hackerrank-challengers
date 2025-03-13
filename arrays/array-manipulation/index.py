#!/bin/python3

import os

#
# Complete the 'arrayManipulation' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. 2D_INTEGER_ARRAY queries
#

def arrayManipulation(n, queries):
    result_arr = [0] * n
    max_value = 0
    curr_sum = 0
    
    for a,b,k in queries:
        result_arr[a-1] += k
        
        if b < n:
            result_arr[b] -= k
            
    for result in result_arr:
        curr_sum += result
        max_value = curr_sum if curr_sum > max_value else max_value
            
    return max_value

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    m = int(first_multiple_input[1])

    queries = []

    for _ in range(m):
        queries.append(list(map(int, input().rstrip().split())))

    result = arrayManipulation(n, queries)

    fptr.write(str(result) + '\n')

    fptr.close()
