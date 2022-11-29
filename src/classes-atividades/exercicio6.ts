class Carro {
  consumoCombustivel: number;
  qtdCombustivel: number;
  constructor(consumoCombustivel: number) {
    this.consumoCombustivel = consumoCombustivel;
    this.qtdCombustivel = 0;
  }

  locomovendo(km: number) {
    const consumo = km - this.consumoCombustivel;
    if (consumo < 0) {
      console.log("sem combustivel");
      return;
    }

    this.qtdCombustivel -= consumo;
  }

  obterGasolina(): number {
    return this.qtdCombustivel;
  }

  adicionarGasolina(qtd: number) {
    this.qtdCombustivel = qtd;
  }
}

const fordKa1000 = new Carro(10);
fordKa1000.adicionarGasolina(50);
console.log("1__", fordKa1000.obterGasolina());
fordKa1000.locomovendo(100);
console.log(fordKa1000.obterGasolina());
