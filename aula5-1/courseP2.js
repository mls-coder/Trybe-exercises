//retorna toda a tag
let getId = document.getElementById('tittle');
console.log(getId);

//retorna somente o conteúdo 
let getInner = document.getElementById('tittle').innerHTML;
console.log(getInner);

//retorna tag dentro da tag selecionada
let getInnerTag = document.getElementById('helloWorld').innerHTML;
console.log(getInnerTag);

//retorna somente o texto filtrado
let getInnerText = document.getElementById('helloWorld').innerText;
console.log(getInnerText);
