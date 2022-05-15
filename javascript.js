// var a=document.getElementById('input1').value;
// var b=document.getElementById('input2').value;
// var c=document.getElementById('input3').value;
// var d=document.getElementById('input4').value;
// var e=document.getElementById('input5').value;
const percentage = () =>{ 
    let a=document.getElementById('input1').value;
let b=document.getElementById('input2').value;
let c=document.getElementById('input3').value;
let d=document.getElementById('input4').value;
let e=document.getElementById('input5').value;
  let g=(+a+ +b+ +c+ +d+ +e)/5;
if(a==''||b==''||c==''||d==''||e==''){
   document.getElementById('value').innerHTML='please  fill the marks of all subject';
}
else{
    
    document.getElementById('value').innerHTML=`You obtain total  ${g} %`;
    if(g>=90){
        document.getElementById('value2').innerHTML=` Wow awesome you are excellance`;
    }
    if(g>=80){
        document.getElementById('value2').innerHTML=` awesome your percentage are good`;
    }
    if(g>=70){
        document.getElementById('value2').innerHTML=` you are a average student`;
    }
    if(g>=60){
        document.getElementById('value2').innerHTML=`  you are a below average student`;
    }
}

}
percentage();

