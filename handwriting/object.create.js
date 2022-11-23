// Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）。

function create(obj) {
    function F() { }
    F.prototype = obj;
    return new F();
}

let newObj = create({ a: 1 })

console.log(newObj);