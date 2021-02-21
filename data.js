const array = [3, 2.3, "name", "lastname", false];
// console.log(array.length);
//loop through the array
for (const arr of array) {
  let newArray = [arr, "this is the new array string"];
  //   console.log(arr);
  //   console.log(newArray);
}
//do while loop
let i = 0;
do {
  i += 1;
  //   console.log(i);
} while (i < 30);

//while loops
while (i <= 30) {
  i--;
  if (i == 0) break;
  //   console.log(i);
}

//here goes objects
let object = {
  name: "sakib hasan",
  bool: true,

  greet(name) {
    console.log(`hello there ${name}`);
  },
};
// console.log(object.bool);
// console.log(object["bool"]);
object.name = "newName";
object["name"] = "brackets name";
//this is kind of cool....
// object.greet(object["name"]);
