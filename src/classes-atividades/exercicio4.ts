class Calcudora{
    private historico: string[]
    constructor(){
        this.historico = [];
    }
    visualizarHistorico(){
        for (const iterator of this.historico){
            console.log(`iterator,"\n");
        }
    }
    somar(num1: number, num2: number){
        const result = num1+num2;
        this.historico.push(`${num1}+${num2}=${resultado}`);
        return result;
        
    }
    multiplicar(num1: number, num2: number){
        const result = num1+num2;
        this.historico.push(`${num1}x${num2}=${resultado}`);
        return result;
    }
    subtrair(num1: number, num2: number){
        const result = num1+num2;
        this.historico.push(`${num1}-${num2}=${resultado}`);
        return result;
    }
    subtrair(num1: number, num2: number){
        const result = num1+num2;
        this.historico.push(`${num1}/${num2}=${resultado}`);
        return result;
    }
}
const calc= new Calculadora();

calc.somar(4, 2);
calc.divir(30,2);
calc.multiplicar(65,90)
calc.subtrair(10,20);
calc.visualizarHistorico();