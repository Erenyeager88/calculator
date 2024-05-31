const display = document.getElementById('display');

function appendToDisplay(input){
display.value += input;
}
function clearDisplay(){
display.value ='';
}
function calculate(){
   if(display.value !=''){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = 'Error';
    }
   }
   else{
    display.value=''
   }
    
    
}
function del(){
display.value = display.value.toString().slice(0,-1);
}   