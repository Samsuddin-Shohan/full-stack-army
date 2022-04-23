const aFunction = new Function(
  "str",
  `
    const obj={};
    for(const s of str){
        obj[s]=s+'a'
    };
    return obj;
    `
);

console.log(aFunction("shohan"));
