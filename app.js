let para1 = document.getElementById('para1');
let span1 = parseInt(document.getElementById('span1').innerHTML);
let span2 = parseInt(document.getElementById('span2').innerHTML);
let result = document.getElementById('result');

result.innerHTML = span1 < span2 ? span1 + span2 : "false";

para1.innerHTML = parseInt(result.value) - 10 < 0 ? "Le résultat - 10 est inférieur à 0" :
    "Le résultat - 10 est supérieur ou égal à 0";
para1.style.backgroundColor = "blue";
para1.style.color = "#8fd6ff";
