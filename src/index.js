const browserTree = {
  label: "Window",
  children: [
    {
      label: "DOM - Document Object Model; DOM Tree",
      children: [
        {
          label: "document",
          children: [],
        },
        {
          label: "CSSOM - CSS Object Model",
          children: [],
        },
      ],
    },
    {
      label: "BOM - Browser Object Model",
      children: [
        {
          label: "navigator",
          children: [],
        },
        {
          label: "screen",
          children: [],
        },
        {
          label: "location",
          children: [],
        },
        {
          label: "frames",
          children: [],
        },
        {
          label: "history",
          children: [],
        },
        {
          label: "XMLHttpReques",
          children: [],
        },
      ],
    },
    {
      label: "JavaScript",
      children: [
        {
          label: "Object",
          children: [],
        },
        {
          label: "Array",
          children: [],
        },
        {
          label: "Function",
          children: [],
        },
        {
          label: "...",
          children: [],
        },
      ],
    },
  ],
};

const nodesHierarchy = {
  label: "Node",
  children: [
    {
      label: "Text",
      children: [],
    },
    {
      label: "Comment",
      children: [],
    },
    {
      label: "Element",
      children: [
        {
          label: "SVGElement",
          children: [],
        },
        {
          label: "HTMLElement",
          children: [
            {
              label: "HTMLInputElement",
              children: [],
            },
            {
              label: "HTMLBodyElement",
              children: [],
            },
            {
              label: "HTMLAnchorElement",
              children: [],
            },
          ],
        },
      ],
    },
  ]
};

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

function flattenObj(tree) {
  let result = [];
  result.push(tree.label);

  function nextLevel(el) {
    return result.push(el.label)
  }

  
  if (tree.children.length) {
    tree.children.forEach(node => {
      nextLevel(node);

      if (node.children.length) {
        node.children.forEach(element => {
          nextLevel(element);
        })
      }
    })
  }
  return result;
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

export function renderPage() {
  const root = document.getElementById("root");
  const flatBrowser = flattenObj(browserTree);
  const flatNode = flattenObj(nodesHierarchy);

  root.append(renderTree([browserTree]));
  root.append(renderTree([nodesHierarchy]));
  root.append(TreeToList(flatBrowser));
  root.append(TreeToList(flatNode));
}

