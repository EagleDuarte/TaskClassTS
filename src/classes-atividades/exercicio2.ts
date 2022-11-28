class Bola {
  constructor(
    public cor: string,
    public circunferencia: number,
    public material: string
  ) {
    this.cor = cor;
    this.circunferencia = circunferencia;
    this.material = material;
  }
  alterarCor(novaCor: string) {
    console.log("Cor anterior", this.cor);
    this.cor = novaCor;
  }
  mostrar() {
    console.log("Cor", this.cor);
  }
}

const bola = new Bola("green", 12, "tecido");

bola.mostrar();

bola.alterarCor("blue");
bola.mostrar();
