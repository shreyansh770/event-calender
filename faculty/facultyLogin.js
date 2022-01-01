

let loginObj = {
    email:"",
    password:""
}

let lgemail = document.querySelector("#lg-email")
let lgpass = document.querySelector("#lg-password")
let lgbtn = document.querySelector("#lg-btn")

lgemail.addEventListener("blur",(e)=>{

    console.log(e.currentTarget.value);
    loginObj.email = e.currentTarget.value;
})

lgpass.addEventListener("blur",(e)=>{

    loginObj.password = e.currentTarget.value
})


lgbtn.addEventListener("click",async()=>{
    let lres = await axios.get('http://localhost:3000/auth/login',{
        params:{
            email : loginObj.email,
            password : loginObj.password
        },
    })

    if(lres.data.user){
        window.location.href = '/view/main.html'
    }
    console.log(lres);
})