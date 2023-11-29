// let screen=document.getElementById('screen');
// buttons=document.querySelectorAll('button');
// let screenValue= " ";
// for (item of buttons){
//     item.addEventListener('click',(e)=>{
//         buttonText=e.target.innerText;
//         console.log('Button text is ',buttonText);
//         if(buttonText=='AC'){
//             screenValue= " ";
//             screen.value= screenValue;
//         }
//         else if(buttonText == '='){
//             screen.value=eval(screenValue);
//         }
//         else{
//             screenValue ==buttonText;
//             screen.value = screenValue;
//         }

//     })
// }

let input = document.getElementById('screen');
let buttons=document.querySelectorAll('button');

let string = " ";
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string =eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML == 'AC'){
            string =" ";
            input.value =string;
        }
        else{
            string +=e.target.innerHTML;
            input.value = string;
        }
    })
})