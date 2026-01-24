class fibonacciSeries:
    # find the fibonacci series 
    def series(self,value):
        if value==0:
            return 0
        elif value==1:
            return 1
        else:
            return self.series(value-1)+self.series(value-2)
    
    # using while loop
    def fiboSeries(self,value):
        res=[]
        while True:
            if value==0:
                res.append(value)
            if value==1:
                res.append(value)
            else:
                seri=(value-1)+(value-2)
                res.append(seri)

        
if __name__=="__main__":
    obj=fibonacciSeries()
    value=int(input(f'Enter the value:'))
    for i in range(value):
        print(obj.series(i))
        print(obj.fiboSeries(i))

    for i in range(value):
        print(obj.fiboSeries(i))