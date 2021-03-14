const r =  [
    1, 2, 
    [1.1, 1.2, 1.3],
    3
];

const  generateList = function(arr){
    const result = document.createElement("ul");
    arr.forEach(element => {
        console.log(element)
        let li = document.createElement("li");
        let value = 0;
        if (Array.isArray(element)){
            li = generateList(element)
        }else {
            value = document.createTextNode(element);
            li.append(value);
        }result.appendChild(li)
    })
    return result
}
  document.body.appendChild(generateList(r))
  