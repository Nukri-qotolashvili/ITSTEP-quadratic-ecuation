const a = prompt("ჩაწერეთ a-ს მნიშვნელობა", "");
const b = prompt("ჩაწერეთ b-ს მნიშვნელობა", "");
const c = prompt("ჩაწერეთ c-ს მნიშვნელობა", "");
const d = b * b - 4 * a * c;
let i;
let x0;
let x1;
let x2;

if (d === 0) {
  x0 = -b / (2 * a);
  document.write("x1=x2= ", x0);
} else if (d > 0) {
  x1 = (-b + Math.sqrt(d)) / (2 * a);
  x2 = (-b - Math.sqrt(d)) / (2 * a);
  document.write(x1, "<br/>", x2);
} else {
  document.write("განტოლებას ამონახსნი არ აქვს");
}

// წარმოსახვითი რიცხვებისათვის ფორმულა
// როდესაც D<0 sqrt(-D)= sqrt(-1) * sqrt(D) სადაც sqrt(-1)= i, ხოლო sqrt(D) დადებითი რიცხვია
// შედეგად ვიღებთ რომ x= (-b + i * sqrt(D)) / (2*a)
