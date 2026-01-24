class towerOfHoni:
    def tower(self,n,fromTower,toTower,auxTower):
        if n==1:
            print(f'Disk 1 from {fromTower} to {toTower}')
            return 
        self.tower(n-1,fromTower,auxTower,toTower)
        print(f'Disk {n} from {fromTower} to {toTower}')
        self.tower(n-1,auxTower,toTower,fromTower)


if __name__=="__main__":
    n=3
    obj=towerOfHoni()
    obj.tower(n,'A','B','C')