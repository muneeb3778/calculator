
let display=document.querySelector(".display")
let button=document.querySelectorAll('button')

let string=""

button=Array.from(button)




button.forEach((v)=>{

v.addEventListener("click",(e)=>{
if(e.target.innerHTML=="DEL"){
string=string.slice(0,string.length-1)
display.value=string
}else if(e.target.innerHTML=="AC"){
string=""
display.value=string
}else if(e.target.innerHTML=="="){
string=eval(string)
display.value=string
}
else{        
string+=e.target.innerHTML
display.value=string
}
})

})












































