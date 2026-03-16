
const tasks=["Login","Open Dashboard","Invite Friend"]
window.onload=function(){
let list=document.getElementById("taskList")
tasks.forEach(t=>{
let li=document.createElement("li")
li.innerText=t
li.onclick=()=>addPoints(5)
list.appendChild(li)
})
}
