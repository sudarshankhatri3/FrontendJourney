class bubblesort:
    def __init__(self,arr):
        self.arr=arr

    #sort the array
    def sort(self):
        for i  in range(len(self.arr)-1):
            for j in range(len(self.arr)-i-1):
                if(self.arr[j]>self.arr[j+1]):
                    self.arr[j],self.arr[j+1]=self.arr[j+1],self.arr[j]
        return self.arr
    
if __name__=="__main__":
    lst=[23,21,456,78,343,53,67,863,123,45,56]
    obj=bubblesort(lst)
    print(obj.sort())