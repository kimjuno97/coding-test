import math

def solution(n):
    answer = math.sqrt(n)
    if int(answer) == answer:
        return 1
    else:
        return 2
