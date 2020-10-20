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

function renderTree(tree, element) {
  const li = document.createElement('li');
  li.innerText = tree.label;
  element.append(li);

  if (tree.children.length) {
    const ul = document.createElement('ul');
    li.append(ul);

    for (let i = 0; i < tree.children.length; i += 1) {
      renderTree(tree.children[i], ul)
    }
  }
}

// const browser = renderTree(browserTree, document.getElementById("root"));
// const node = renderTree( nodesHierarchy, document.getElementById('root'));

// export { browser, node }

export function renderPage() {
  const browserTreeList = renderTree(browserTree, document.getElementById("root"));
  const nodesHierarchyList = renderTree(nodesHierarchy, document.getElementById("root"));
}