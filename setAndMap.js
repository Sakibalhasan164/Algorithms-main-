//@@@@
//SETS
//@@@

const set = new Set([true, 2, "name", "whatever", false]);
set.add("2");
set.delete("name");
// console.log(set);

for (const item of set) {
  console.log(item);
}

//@@@
//MAp Data
//@@@
const map = new Map([[1, "one"]]);
// map.set(name, "sakib");
console.log(map);
