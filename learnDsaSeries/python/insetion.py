class insertionSort:
    def __init__(self,arr):
        self.arr=arr


    #sort the array
    def sort(self):
        for i in range(len(self.arr)-1):
            max=self.arr[i]
            j=i-1
            while(j>=0 and self.arr[j]<max):
                self.arr[j+1]=self.arr[j]
                j-=1
            self.
        return self.arr
    


if __name__=="__main__":
    data=[11,2,34,5,22,3,56,32,78]
    obj=insertionSort(data)
    print(obj.sort())