# Ricky Lin
# SoftDev2 pd7
# K16 -- Do You Even List?
# 2019-04-11

UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LOWER = UPPER.lower()
NUMS = [str(i) for i in range(10)]
SPECIAL = ".?!&#,;:-_*"

def threshold(pw):
    upper = [char for char in pw if char in UPPER]
    lower = [char for char in pw if char in LOWER]
    nums = [char for char in pw if char in NUMS]

    return len(upper) > 0 and len(lower) > 0 and len(nums) > 0

def strength(pw):
    if not threshold(pw):
        return 0

    strength = 0 

    upper = [char for char in pw if char in UPPER]
    lower = [char for char in pw if char in LOWER]
    nums = [char for char in pw if char in NUMS]
    spec = [char for char in pw if char in SPECIAL]

    if len(pw) >= 12: strength += 1
    if len(pw) >= 16: strength += 1
    if len(upper) >= 4: strength += 1
    if len(upper) >= 8: strength += 1
    if len(lower) >= 4: strength += 1
    if len(lower) >= 8: strength += 1
    if len(nums) >= 4: strength += 1
    if len(nums) >= 8: strength += 1
    if len(spec) >= 4: strength += 1
    if len(spec) >= 8: strength += 1

    return strength

print(threshold("myNoobPassword123")) #true
print(threshold("lowercaseiscool")) #false 

print(strength("password1")) #0
print(strength("1234qwerQWER????")) #6
