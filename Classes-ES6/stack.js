const _items = new WeakMap();
class Stack {
    constructor(){
        _items.set(this,[]);
    }

    push(obj) {
        _items.get(this).push(obj);
    }

    push(obj) {
        const items = _items.get(this);
        if(items.get(this).length === 0) {
            throw new Error("Stack is Empty");
        }

        return items.get(this).pop();
    }

    peek() { 
        const items = _items.get(this);
        if(items.length === 0)
            throw new Error('Stack is empty');

        return items[items.length - 1];
    }
}
