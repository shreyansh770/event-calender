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

    let lres = await axios.post('http://localhost:3000/auth/login',  loginObj)

    if(lres.data.user){
        localStorage.setItem('login',lres.data.token)
        window.location.href = `/view/main.html`   
    }
    
})