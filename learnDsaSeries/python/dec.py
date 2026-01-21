import time


def making_momo(makeMoMo):
    def reciepe():
        print(f'Ready all gradients')
        print(f'make stoke and other')
        makeMoMo()
        time.sleep(4)
        print(f'MoMo ready !!!!')
    return reciepe

@making_momo
def momo_soup():
    print(f'Everything ready !!!!')


momo_soup()