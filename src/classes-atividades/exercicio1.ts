class Contador {
  contador: number;

  constructor() {
    this.contador = 0;
  }
  zerar() {
    this.contador = 0;
  }
  incrementar() {
    this.contador;
  }
  buscarContador(): number {
    return this.contador;
  }
}

const contador = new Contador();

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log("contador->", contador.buscarContador());
