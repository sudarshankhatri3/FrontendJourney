class selection:
    def __init__(self,arr):
        self.arr=arr


    #sort the array 
    def sort(self):
        n=len(self.arr)
        for i in range(n):
            min=self.arr[i]
            p=i
            for j in range(i+1,n):
                if(min<self.arr[j]):
                    min=self.arr[j]
                    p=j

            self.arr[i],self.arr[p]=self.arr[p],self.arr[i]
        
        return self.arr
    
#create an instance of class 
lst=[23,1,345,43,2,67,3,899,34,68,49,89]
obj=selection(lst)
print(obj.sort())