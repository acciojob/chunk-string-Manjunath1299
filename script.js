function stringChop(str, size) {
  if (str === null) {
    return [];
  }

  const chunks = [];
  let i = 0;

  while (i < str.length) {
    chunks.push(str.substr(i, size));
    i += size;
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
