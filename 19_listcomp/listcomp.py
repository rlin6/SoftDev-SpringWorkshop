# Student Union (SU) - Ricky Lin and Michelle Tang
# SoftDev2 pd06
# K#19: Ready, Set, Math!
# 2019-04-17

#union
def union(a, b):
    return [element for element in a if element not in b] + b

print("union")
print(union([1,2,3], [2,3,4]))

#intersection
def intersection(a, b):
    return [element for element in a for element2 in b if element == element2]

print("intersection")
print(intersection([1,2,3], [2,3,4])


#set difference, find what is not in it
def difference(a, b):
    return [element for element in a if element not in b]

print("difference")
print(difference([1,2,3], [2,3,4]))

def symDiff(a, b):
    return union(difference(a, b), difference(b, a))

print("symDiff")
print(symDiff([1,2,3], [2,3,4]))

def cartProd(a, b):
    return [(element, element2) for element in a for element2 in b]

print("cartProd")
print(cartProd([1,2], ['red','white']))

def even(a, b):
    return [element for element in union(a,b) if element % 2 == 0]

print("even")
print(even([1,2,3], [2,3,4]))