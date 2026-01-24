""" List is a datatype that is mutable,ordered,allow duplicate values"""

class listPractice:
    def __init__(self,data):
        self.data=data

    #append value in list
    def addSingleValue(self,value):
        self.data.append(value)
        return self.data
    
    # extend list
    def addMultipleValue(self,value):
        self.data.extend(value)
        return self.data
    
    # pop the data from a list
    def removeItems(self):
        self.data.pop()
        return self.data
    
    #count the value in list
    def countItems(self,value):
        self.data.count(value)
        return self.data
    
    # insert the value in certain position
    def insertValue(self,pos,value):
        self.data.insert(pos,value)
        return self.data

    #sort,index,remove,clear
    def sortList(self):
        self.data.sort()
        return self.data
    
    # find the index of value
    def findIndex(self,value):
        self.data.index(value)
        return self.data
    
    # remove the value
    def removeValue(self,value):
        self.data.remove(value)
        return self.data
    
    # clear the list
    def clearList(self):
        self.data.clear()
        return self.data
    

if __name__ == "__main__":
    data=[12,13,14,15,56,43,67,78,78,23,29]
    obj=listPractice(data)
    print(f'Append value:{obj.addSingleValue(999)}')
    print(f'Extend list:{obj.addMultipleValue([15,67,78,89])}')
    print(f'Remove item:{obj.removeItems()}')
    print(f'Count value:{obj.countItems(23)}')
    print(f'inser at pos:{obj.insertValue(12,45)}')
    print(f'sort items:{obj.sortList()}')
    print(f'Find Index:{obj.findIndex(12)}')
    print(f'Remove element:{obj.removeItems()}')
    print(f'clear list:{obj.clearList()}')