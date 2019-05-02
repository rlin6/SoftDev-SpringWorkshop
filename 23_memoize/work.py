# Ricky Lin
# SoftDev2 pd6
# K#23 Memoize
# 2019-05-02

import random

def make_HtmL_heading(f):
    def inner():
        return '<h1>' + f() + '</h1>'
    return inner

@make_HtmL_heading
def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word Up']
    return random.choice(greetings)

# greet_heading = make_HtmL_heading(greet)
print(greet())

# def fib(n):
#     if n == 0:
#         return 0
#     elif n == 1:
#         return 1
#     else:
#         return fib(n-1) + fib(n-2)

def memoize(f):
    memo = {}
    def inner(x):
        if x in memo:
            return memo[x]
        else:
            memo[x] = f(x)
            return memo[x]
    return inner

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)  

fib = memoize(fib)
print(fib(40))