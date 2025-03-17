#!/bin/python3

import os

# Complete the catAndMouse function below.
def catAndMouse(x, y, z):
    diffXZ = abs(x-z)
    diffYZ = abs(y-z)
    
    if diffXZ < diffYZ:
        return 'Cat A'
        
    if diffXZ > diffYZ:
        return 'Cat B'
    
    return 'Mouse C'

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input())

    for q_itr in range(q):
        xyz = input().split()

        x = int(xyz[0])

        y = int(xyz[1])

        z = int(xyz[2])

        result = catAndMouse(x, y, z)

        fptr.write(result + '\n')

    fptr.close()
