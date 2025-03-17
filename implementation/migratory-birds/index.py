#!/bin/python3

import os

#
# Complete the 'migratoryBirds' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#

def migratoryBirds(arr):
    arr_size = len(arr)
    frequency_birds_arr = [0, 0, 0, 0, 0]
    biggest_frequency = [0, 0]
    
    for i in range(arr_size):
        bird_index = arr[i] - 1
        frequency_birds_arr[bird_index] += 1
    
    for index, freq in enumerate(frequency_birds_arr):
        if freq > biggest_frequency[0]:
            biggest_frequency = [freq, index + 1]
            
    return biggest_frequency[1]

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = migratoryBirds(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
