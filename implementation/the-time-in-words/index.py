#!/bin/python3

import os

#
# Complete the 'timeInWords' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. INTEGER h
#  2. INTEGER m
#

NUMBERS_DICT = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
}

def timeInWords(h, m):
    sentence = ""
    
    if m > 0 and m <= 30:
        sentence = 'quarter' if m == 15 else 'half' if m == 30 else f"{NUMBERS_DICT[m]} minute{'s' if m > 1 else ''}"
        
        return f"{sentence} past {NUMBERS_DICT[h]}"
        
    # third case
    if m > 30:
        remaining_minutes = 60 - m
        sentence = 'quarter' if remaining_minutes == 15 else f"{NUMBERS_DICT[remaining_minutes]} minute{'s' if remaining_minutes > 1 else ''}"
        return f"{sentence} to {NUMBERS_DICT[h + 1 if h < 12 else 1]}"
    
    # first case
    return f"{NUMBERS_DICT[h]} o' clock"

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    h = int(input().strip())

    m = int(input().strip())

    result = timeInWords(h, m)

    fptr.write(result + '\n')

    fptr.close()
