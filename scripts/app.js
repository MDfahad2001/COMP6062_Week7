const number = document.querySelector("numberInput");

number.addEventLister("input",conductionChecker);

function conductionChecker()
{
if(NUMBER>=10||NUMBER<=-10)
{
    alert("The number should be between -10 and 10");
}
}


const fruit ={
    name: "mango",
    colour:"yellow",
    taste:"sweet"
};

