var a = { name: "Sam", class: "MCA" };
var b = { class: "MCA", name: "Sam" };

function jsonEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
console.log(jsonEqual(a, b)); // true in all three cases above
