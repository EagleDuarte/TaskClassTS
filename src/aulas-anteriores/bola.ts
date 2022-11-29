export default class Bola {
    constructor (public cor: string, public circun: number, public material: string) {
    this.cor=cor
    this.circun=circun
    this.material=material
    }

    trocarCor(newColor:string){
        this.cor= newColor
    }

    mostrar(){
        console.log(`cor da bola`);
    }
}