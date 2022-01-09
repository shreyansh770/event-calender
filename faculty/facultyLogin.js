let loginObj = {
    email: "",
    password: ""
}

let lgemail = document.querySelector("#lg-email")
let lgpass = document.querySelector("#lg-password")
let lgbtn = document.querySelector("#lg-btn")

lgemail.addEventListener("blur", (e) => {

    console.log(e.currentTarget.value);
    loginObj.email = e.currentTarget.value;
})

lgpass.addEventListener("blur", (e) => {

    loginObj.password = e.currentTarget.value
})


lgbtn.addEventListener("click", async () => {
    

    
    let lres = await axios.post('http://localhost:3000/auth/login', loginObj )

    if (lres.data.user) {
        // console.log(lres.data.user.email);
        
        localStorage.setItem('login', JSON.stringify({token:lres.data.token , email:lres.data.user.email}))
        window.location.href = `/view/main.html`
    }

})


