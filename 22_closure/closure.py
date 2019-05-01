# Ricky Lin
# SoftDev2 pd6
# K #22: Closure
# 2019-05-01

def repeat(str):
    def r(num):
        return str * num
    return r

r1 = repeat("hello")
r2 = repeat("goodbye")

print(r1(2))
print(r2(2))
print(repeat('cool')(3))

def make_counter():
    x = 0
    def ctr(n = 0):
        nonlocal x
        x += 1
        return x
    def access():
        nonlocal x
        return x
    return ctr, access

ctr1, getCtr1 = make_counter()
print(ctr1())
print(ctr1())
print(ctr1())

ctr2, getCtr2 = make_counter()
print(ctr2())
print(ctr2())
print(ctr1())
print(ctr2())

print(getCtr1())
print(getCtr2())
