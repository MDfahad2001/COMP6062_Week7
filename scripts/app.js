let number = document.querySelector("#numberInput");

number.addEventListener("input",conductionChecker);

function conductionChecker()
{
if(number.value >= 10||number.value <= -10)
{
    alert("The number should be between -10 and 10");
    if(number.value >= 10){number.value=10;}
    if(number.value <= -10){number.value=-10;}
}
}


const fruit ={
    name: "mango",
    color:"yellow",
    taste:"sweet"
};

document.querySelector("#fruitName").innerHTML = `Name: ${fruit.name}`;
document.querySelector("#fruitColor").innerHTML = `Color: ${fruit.color}`;
document.querySelector("#fruitTaste").innerHTML = `Taste: ${fruit.taste}`;

