class MatrixRepresent:
    def __init__(self,vertex):
        self.vertex=[[0]*vertex for i in range(vertex)]
        self.size=vertex
    
    # for undirected graph
    def insert(self,v1,v2):
        if (0<=v1<self.size and 0<=v2<self.size):
            self.vertex[v1][v2]=1
            self.vertex[v2][v1]=1


    # for directed graph 
    def insertDirection(self,v1,v2):
        if (0<=v1<self.size and 0<=v2<self.size):
            self.vertex[v1][v2]=1
    

    # for weighted graph
    def weightedGraph(self,v1,v2,weight):
        if (0<=v1<self.size and 0<=v2<self.size):
            self.vertex[v1][v2]=weight

    def display(self):
        for i in range(len(self.vertex)):
            for j in range (len(self.vertex)):
                print(self.vertex[i][j],end=" ")
            print('\n')


if __name__=="__main__":
    obj=MatrixRepresent(4)
    print(f'Matrix representation of undirected graph')
    obj.insert(2,3)
    obj.insert(3,2)
    obj.display()
    print(f'Matrix representation of directed graph')
    obj.insert(3,3)
    obj.display()
    print(f'Matrix representation of weighted graph')
    obj.weightedGraph(2,3,5)
    obj.display()

