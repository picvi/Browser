import {browserTree} from "./trees/browserTree.js"
import {nodesHierarchy} from "./trees/node.js"

import {renderTree, TreeToList} from "./display/treesDisplays.js"


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
          element.children.forEach(value => nextLevel(value))
        })
      }
    })
  }

  // for (const key in tree) {
  //   if (typeof key === "object") {
  //     for (const value in key) {
  //       flattenObj(value)
  //     }
      
  //   } else {
  //     result.push(tree[key])
  //   }
  // }
  

  // for ( const key in tree) {
  //   if (typeof tree[key] === "object") {
  //     if (tree[key].length) {
  //       tree[key].forEach( element => {
  //       result.push(...element[key]);
  //     })
  //     }
      
  //   } else {
  //     result.push(tree[key]);
  //   }
  // }
  
  return result;
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

