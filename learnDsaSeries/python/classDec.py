class student:
    count=0
    
    def __init__(self,name,age,gpa):
        self.name=name
        self.age=age
        self.gpa=gpa

    
    def info(self):
        print(f'My name is {self.name} and age is {self.age}')

    @classmethod
    def overallInfo(cls):
        print(f'My name is {cls.count}')



# create an instance of class 
student.overallInfo()