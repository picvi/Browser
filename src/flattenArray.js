function flattenArray(array) {
  let flatten = [];

  array.forEach((element) => {
    if (Array.isArray(element)) {
      flatten = flatten.concat(...element);
    } else {
      flatten = flatten.concat(element);
    }
  })
  return flatten;
}

function renderArray(arr) {
  const bloq = document.createElement('blockquote');
  bloq.innerHTML = JSON.stringify(arr);

  return bloq;
}
