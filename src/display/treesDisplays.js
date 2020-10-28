function renderTree(tree) {
  if (tree.length === 0) return null;

  const ul = document.createElement('ul');

  tree.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = element.label;
    ul.append(li);

    const subTree = renderTree(element.children);
    if (subTree !== null) ul.append(subTree);
  })

  return ul;
}

function TreeToList(arrayTree) {
  const ol = document.createElement('ol');
  arrayTree.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = element;
    ol.append(li)
  })
  return ol;
}

export {renderTree, TreeToList}