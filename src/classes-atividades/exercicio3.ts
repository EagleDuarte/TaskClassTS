class ContaCorrente {
  conta: string;
  correntista: string | undefined;
  saldo!: number;

  constructor(conta: string, correntista: string, saldo?: number) {
    this.conta = conta;
    this.correntista = correntista;
    this.saldo = saldo ?? 0;
  }
  alterarNome(nome: string) {
    this.correntista = nome;
    console.log("Bem vindo, consulte sua conta:");
  }
  depositar(valor: number) {
    this.saldo += valor;
  }
  sacar(valor: number) {
    const newSaldo = (this.saldo = valor);
    if (newSaldo > 0) {
      this.saldo = newSaldo;
      console.log("seu saldo atual é:", this.saldo);
    } else {
      console.log("saldo indisponivel");
    }
  }
}

const contaAleatoria = new ContaCorrente("contaAletoria", "Capitão América");
console.log("anterior", contaAleatoria.correntista);

contaAleatoria.alterarNome("Tony Stark");

contaAleatoria.depositar(500);
contaAleatoria.sacar(300);
