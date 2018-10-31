// class Node {
//     constructor(val, left, right) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }

//     getValue() {
//         return this.val;
//     }
// }

export class Tree {
    constructor(tree) {
        this.root = tree;
        this.result = [];
        this.level = 0;
    }

    getTree() {
        return this.root;
    }

    depthFirst() {
        this.result = [];
        this.depthProch(this.root);
        return this.result;
    }

    depthProch(node) {
        if(node){
           this.result.push(node.val);
            this.depthProch(node.left);
            this.depthProch(node.right);
        }
    }

    breadthFitst() {
        this.result = [];
        this.result.push(this.root.val);
        this.breadthProch(this.root);
        return this.result;
    }

    breadthProch(node) {
        if(node.left) {
            this.result.push(node.left.val);
        }
        if(node.right) {
            this.result.push(node.right.val);
        }
        if(node.left){        
            this.breadthProch(node.left);
        }
        if( node.right){
            this.breadthProch(node.right);
        }
    }
}

let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};

// let tree = new Tree(root);

// console.log(tree.depthFirst());

// console.log(tree.breadthFitst());
