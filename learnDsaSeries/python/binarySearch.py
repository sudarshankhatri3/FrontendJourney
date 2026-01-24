class binarySearch:
    def __init__(self,arr,value):
        self.arr=arr
        self.value=value

    #search the item
    def search(self):
        min=0
        max=len(self.arr)-1
        while(min<=max):
            mid=(min+max)//2
            if(self.arr[mid]>self.value):
                max=mid-1
            elif(self.arr[mid]<self.value):
                min=mid+1
            else:
                return f'value {self.value} find at index {mid}'
            

if __name__=="__main__":
    lst=[23,25,28,29,34,36,37,38,45,47,49,50]
    obj=binarySearch(lst,23)
    obj1=binarySearch(lst,49)
    print(obj.search())
    print(obj1.search())
