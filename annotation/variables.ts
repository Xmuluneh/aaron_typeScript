// Primitive annotation
const apple: number = 10;
const speed: string = 'fast';
const today: Date = new Date();
today.getDay();
console.log(today.getFullYear());

// Array annotation
const array: string[] = ['red', 'blue'];

// class Annotation
class Car {}

const car: Car = new Car();

// Objects Annotation

const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
// function annotation

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
//
const json = { false: 'false' };
const corr: { string: string } = JSON.parse(json);
console.log(corr);
