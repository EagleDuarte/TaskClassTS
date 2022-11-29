type Gender = "Masculino" | "Feminino";

class Human {
  constructor(
    public height: number,
    public weight: number,
    public name: string,
    public age: number,
    public alive: boolean,
    public gender: Gender
  ) {
    this.height = height;
    this.weight = weight;
    this.name = name;
    this.age = age;
    this.alive = alive;
    this.gender = gender;
  }

  birth() {
    this.age = 0;

    console.log(`${this.name} nasceu.`);
  }

  birthDay() {
    this.age++;

    console.log(`${this.name} completou ${this.age} anos de idade.`);
  }

  walk() {
    console.log(`${this.name} está andando.`);
  }

  eat() {
    console.log(`${this.name} está comendo.`);
  }

  talk() {
    console.log(`${this.name} está conversando.`);
  }

  cry() {
    console.log(`${this.name} está chorando.`);
  }

  die() {
    this.alive = false;

    console.log(`${this.name} faleceu.`);
  }

  codou() {
    console.log("Jamerson codou.");
  }
}

const jamerson = new Human(1.82, 100, "Jamerson", 38, true, "Masculino");

console.log(jamerson);

jamerson.birth();

jamerson.eat();

jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();
jamerson.birthDay();

jamerson.die();
jamerson.walk();
jamerson.codou();

console.log(jamerson);
