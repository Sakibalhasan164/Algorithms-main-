function makeSpinalCase(a) {
  //gets a string as parameter
  const splited = a.split(" ");

  return splited.join("---").toUpperCase();
}

const string = "How are you boy?";
const result = makeSpinalCase(string);
console.log(result);

//here we are going to convert binary into real text

function toText(b) {
  const bArray = b.split(" ");
  const result = [];
  for (i = 0; i < bArray.length; i++) {
    result.push(String.fromCharCode(parseInt(bArray[i], 2)));
  }
  return result.join("");
}

const readableText = toText("01110011 01100001 01101011 01101001 011000  10");

console.log(readableText);

//binary to readable text
function toBinary(str) {
  let output = [];
  for (i = 0; i < str.length; i++) {
    bin = str[i].charCodeAt().toString(2);
    output.push(Array(8 - bin.length + 1).join("0") + bin);
  }
  return output.join(" ");
}

const binarry = toBinary("sakib");
console.log(binarry);
