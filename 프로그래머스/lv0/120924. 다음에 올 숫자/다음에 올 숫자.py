def solution(common):
    a=[]

    if (common[1] - common[0]) == (common[2] - common[1]) :

        b = common[1] - common[0]
        answer = common[len(common) -1 ] + b

    elif (common[1] / common[0]) == (common[2] / common[1]) :

        b = common[1] / common[0]

        answer = common[len(common) -1 ] * b
    return answer