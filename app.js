
let points=0

function showPage(p){
document.querySelectorAll('.page').forEach(e=>e.classList.remove('active'))
document.getElementById(p).classList.add('active')
}

async function login(){
Pi.init({version:"2.0",sandbox:true})
const scopes=['username','payments']
const auth=await Pi.authenticate(scopes,function(){})
document.getElementById("username").innerText="User: "+auth.user.username
}
login()

function addPoints(n){
points+=n
document.getElementById("points").innerText=points
}
