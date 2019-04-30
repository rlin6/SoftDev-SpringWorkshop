# Ricky Lin & Jared Asch
# SoftDev2 pd6
# K #20: Reductio ad Absurdum
# 2019-04-29

from functools import reduce

def frequencyOword(filename, word):
    with open(filename) as f:
        return len( [1 for w in f.read().split(" ") if w.strip(",.!?;:\n\t") == word] )

def frequencyOwords(words):
    return sum( [frequencyOwords(word) for word in words] )

def mostCommonWord(filename):
    with open(filename) as f:
        # freq_dict = {word.strip(",.!?;:\n\t"): frequencyOword(word.strip(",.!?;:\n\t")) for word in f.read().split(" ")}
        return reduce(lambda w1, w2: w1 if frequencyOword(filename, w1.strip(",.!?;:\n\t")) > frequencyOword(filename, w2.strip(",.!?;:\n\t")) else w2, f.read().split())
# print(frequencyOwor("")

print(mostCommonWord("cm.txt"))
print(frequencyOword("cm.txt", "worker"))
print(frequencyOwords("cm.txt", "there is"))
