class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  quantidadeCombustivel: number;

  constructor(
    tipoCombustivel: string,
    valorLitro: number,
    quantidadeCombustivel: number
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }
  abastecerPorValor(valor: number) {
    const qtdCombustivel = valor / this.valorLitro;
    if (qtdCombustivel > this.quantidadeCombustivel) {
      console.log("não é possível abastecer");
      return;
    }
    this.quantidadeCombustivel -= qtdCombustivel;
    console.log(`Foi colocado ${qtdCombustivel} litros de gasolina`);
  }
  abastecerPorLitro(qtd: number) {
    if (qtd > this.quantidadeCombustivel) {
      console.log("não é possível abastecer");
      return;
    }
    const result = qtd * this.valorLitro;
    this.quantidadeCombustivel -= qtd;
    console.log("total:", result);
  }
  alterarValor(num: number) {
    this.valorLitro = num;
  }
  alterarCombustivel(tipo: string) {
    this.tipoCombustivel = tipo;
  }
  alterarQuantidadeCombustivel(qtd: number) {
    this.quantidadeCombustivel = qtd;
  }
}

const postoGasolina = new BombaCombustivel("alcool", 7, 500);
postoGasolina.abastecerPorValor(30);
postoGasolina.abastecerPorValor(100);
postoGasolina.alterarCombustivel("gasolina");
postoGasolina.alterarQuantidadeCombustivel(200);
postoGasolina.alterarValor(20);
postoGasolina.abastecerPorLitro(40);
postoGasolina.alterarQuantidadeCombustivel(70);
