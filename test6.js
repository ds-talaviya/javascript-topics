function findMissingNum(...rest) {
  let data = rest.sort((a, b) => a - b);
  let resp = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = data[i] + 1; j < data[i + 1]; j++) {
      resp.push(j)
    }
  }
  return resp;
}

console.log(findMissingNum(7, 1, 2, 4));
