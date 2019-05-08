myObj1 = {
  name: "John",
  age: "45",
  car: null,
  friends: ["anto", "rex", "selva"]
};
myObj2 = { name: "John", age: "30", car: null };

// find keys
keyObj1 = Object.keys(myObj1);
keyObj2 = Object.keys(myObj2);

// find values
valueObj1 = Object.values(myObj1);
valueObj2 = Object.values(myObj2);

// find max length to iterate
if (keyObj1.length > keyObj2.length) {
  var biggestKey = keyObj1.length;
} else {
  var biggestKey = keyObj2.length;
}

// now compare their keys and values
for (var i = 0; i < biggestKey; i++) {
  if (keyObj1[i] == keyObj2[i] && valueObj1[i] == valueObj2[i]) {
    console.log(valueObj2[i]);
  } else {
    // it prints keys have different values
    console.log(
      "myObj1 value: " + valueObj1[i] + "\nmyObj2 value: " + valueObj2[i] + "\n"
    );
  }
}
