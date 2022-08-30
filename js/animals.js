// @ts-check

export default class Animal {
  constructor() {
    this.animals = ['원숭이', '사자'];
  }

  showAnimals() {
    this.animals.map((el) => console.log(el));
  }
}
