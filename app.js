

let add=()=>{
    let num1= parseFloat(document.getElementById("firstNum").value);
    let num2= parseFloat(document.getElementById("secNum").value);
    let sum= num1+num2;
    document.getElementById("result").innerHTML=`<h1 style="text-align: center;">The Sum of two numbers is ${sum}</h1>`;
       
}