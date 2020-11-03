let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(obj, arr) {
  obj = Object.create(objToCopy);
  arr = Object.keys(objToCopy);
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    
console.log(newObj.bar);    

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   
console.log(newObj2.bar);   