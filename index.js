function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

function flatten(array) {
  return array.reduce((acc, curr) => acc.concat(curr), []);
}


function partition(array, predicate) {
  const partitioned = [[], []];
  array.forEach((item) => {
    partitioned[predicate(item) ? 0 : 1].push(item);
  });
  return partitioned;
}


function rotate(array, count) {
  const index = count % array.length;
  return array.slice(index).concat(array.slice(0, index));
}


function difference(array1, array2) {
  return array1.filter((item) => !array2.includes(item));
}


function intersection(array1, array2) {
  return array1.filter((item) => array2.includes(item));
}


function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}


function sample(array, size = 1) {
  const shuffled = shuffle(array);
  return shuffled.slice(0, size);
}


function compact(array) {
  return array.filter(Boolean);
}


function pluck(array, key) {
  return array.map((item) => item[key]);
}

module.exports = chunk;
module.exports = flatten;
module.exports = partition;
module.exports = rotate;
module.exports = difference;
module.exports = intersection;
module.exports = shuffle;
module.exports = sample;
module.exports = compact;
module.exports = pluck;
