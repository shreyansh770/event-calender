

let uname = document.querySelector("#name")
let email = document.querySelector("#email")
let phn = document.querySelector("#num")
let pass = document.querySelector("#pass")
let cpass = document.querySelector("#cpass")
let subtn = document.querySelector(".signup")

let signUpObj = {
    name :"",
    email:"",
    phNo:"",
    password:"",
    confirmPassword:""
}

uname.addEventListener("blur",(e)=>{
    signUpObj.name = e.currentTarget.value;
})
email.addEventListener("blur",(e)=>{
    signUpObj.email = e.currentTarget.value;
})
phn.addEventListener("blur",(e)=>{
    signUpObj.phNo = Number(e.currentTarget.value);
})
pass.addEventListener("blur",(e)=>{
    signUpObj.password = e.currentTarget.value;
})
cpass.addEventListener("blur",(e)=>{
    signUpObj.confirmPassword = e.currentTarget.value;
})

subtn.addEventListener("click",async ()=>{
    console.log("clicked");
    let sres = await axios.post('http://localhost:3000/auth/signup',signUpObj)
    if(sres.data.user){
        window.location.href = '/view/login.html'
    }
})




