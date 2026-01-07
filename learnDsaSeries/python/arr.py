from array import *


val=array("l",[2,3,4,5,6,7,7])

print(val)

for i in range(len(val)):
    print(val[i],end=" ")

print('\n')
for i in val:
    print(i,end=" ")


val.append(12)
print(f'Append 1:{val}')
val.append(34)
print(f'Append 2:{val}')

val.insert(3,3434)
print(f'Insert 1:{val}')
val.insert(5,45455)
print(f'Insert 2:{val}')
val.extend([12,2,34344,34343,5545,3233,32])
print(val)

# Reverse a list in-place without using reverse() or slicing.
data=[]
length=len(val)-1
while length>=0:
    data.append(val[length])
    length-=1

print(f'Reverse array:{data}')

low=0
high=len(val)-1
while low<=high:
    val[low],val[high]=val[high],val[low]
    low+=1
    high-=1

print(f'Two pointer:{val}')






# Find the second largest element in a list.

second=array("L",[2,21,2332,21,4,323,67,32,78,32,45,6])

for i in range(len(second)-1):
    for j in range(len(second)-1):
        if(second[j]>second[j+1]):
            second[j],second[j+1]=second[j+1],second[j]

print(f'sorted array:{second}')
print(f'Second largest number:{second[-2]}')

# Rotate a list to the right by k positions.

class rotate:
    def  __init__(self,value):
        self.arr=[2,3,4,5,6,7,7]
        self.value=value

    def rotate(self):
        for i in range(self.value):
            data=self.arr.pop()
            self.arr.insert(0,data)

        return self.arr
    

obj=rotate(3)
print(obj.rotate())

        

# Remove duplicate elements while preserving order.

class Duplicate:
    def __init__(self,arr):
        self.arr=arr

    def removeDuplicate(self):
        data=set(self.arr)
        original_without_duplicate=list(data)
        return original_without_duplicate
    

vl=[1,1,2,3,3,3,3,2,1,2,4,45,5,4,3,3,3,4,3,3,2,2,2]
dlc=Duplicate(vl)
print(dlc.removeDuplicate())
    
        

# Find all pairs in a list whose sum equals a given value.
class pari:
    def __init__(self,arr,target):
        self.arr=arr
        self.target=target

    def pair(self):
        low=0
        high=len(self.arr)-1
        res=[]
        count=0
        while low<=high:
            print("hello")
            if self.arr[low]+self.arr[high]==self.target:
                print('hello')
                
                count+=1
            
            low+=1
            high-=1
        print(count)
        return res
    
    # Sum of elements    Input: [1, 2, 3, 4]    Output: 10
    def sum(self):
        sum=0
        for i in range(len(self.arr)-1):
            sum+=self.arr[i]
        return sum
    
    # Find maximum element without using max()
    def max(self):
        max=0
        for i in range(len(self.arr)-1):
            if self.arr[i]>max:
                max=self.arr[i]

        return max
    
    # Count even and odd numbers
    def count(self):
        eCount=0
        oCount=0
        for i in range(len(self.arr)-1):
            if(self.arr[i]%2==0):
                eCount+=1
            else:
                oCount+=1

        return [eCount,oCount]
    
            

new=[1,2,3,4,5,6,6,7,7,5,4,3,2,4]
target=5
couple=pari(new,target)
print(f'pair for sum:{couple.pair()}')  
print(f'sum of element:{couple.sum()}')  
print(f'max in array:{couple.max()}')  
print(f'Count even and odd:{couple.count()}')          

# Check if a list is sorted

# Remove duplicates (preserve order)

# [1, 2, 2, 3, 1] → [1, 2, 3]


# Second largest element

# Rotate list right by k

# [1,2,3,4,5], k=2 → [4,5,1,2,3]


# Move all zeros to end

# [0,1,0,3,12] → [1,3,12,0,0]


# Find missing number (1 to n)

# Level 3: Advanced Coding

# Find pair with given sum

# arr=[1,4,5,6], sum=10 → (4,6)


# Find intersection of two lists

# [1,2,3], [2,3,4] → [2,3]


# Find longest consecutive sequence

# [100,4,200,1,3,2] → 4


# Flatten a nested list

# [1,[2,[3,4]],5] → [1,2,3,4,5]


# Majority element (appears > n/2 times)

