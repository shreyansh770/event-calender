let addFacultyBtn = document.querySelector(".afbtn");
let fCont = document.querySelector('.faculty-container')
let fxBtn = document.querySelector('.f-close-cont')

let facname = document.querySelector('.f-name>input')
let facemail = document.querySelector('.f-email>input')
let facphn = document.querySelector('.f-phn>input')
let fapass = document.querySelector('.f-pass>input')
let facpass = document.querySelector('.cp>input')
let facrole = document.querySelector('.f-role>input')

let addFBtn = document.querySelector('.add-faculty-sbtn')

let facObj = {

    name: "",
    email: "",
    phNo: "",
    password: "",
    confirmPassword: "",
    role: "",
    token:""
}


addFacultyBtn.addEventListener("click", async () => {


    // check if user is loggedIn && user is authorized
    if (localStorage.getItem('login')) {
        
        let userToken = JSON.parse(localStorage.getItem('login'))
        
        let user = await axios.get('http://localhost:3000/auth/getUser', {
            params: {
                email: userToken.email
            }
        })

        console.log(user.data);

        if (user.data.user[0].role == "Admin") {

            fCont.style.display = "block"
            
        } else {
            msg('Only allowed for admins')
        }

    } else {
        msg('You are not logged in')
    }



})

fxBtn.addEventListener('click', () => {
    fCont.style.display = 'none'
})


facname.addEventListener("blur", (e) => {
    facObj.name = e.currentTarget.value;
})
facemail.addEventListener("blur", (e) => {
    facObj.email = e.currentTarget.value;
})
facphn.addEventListener("blur", (e) => {
    facObj.phNo = Number(e.currentTarget.value);
})
fapass.addEventListener("blur", (e) => {
    facObj.password = e.currentTarget.value;
})
facpass.addEventListener("blur", (e) => {
    facObj.confirmPassword = e.currentTarget.value;
})

facrole.addEventListener("blur",(e)=>{
    facObj.role = e.currentTarget.value;
})

addFBtn.addEventListener('click', async () => {


    // if loggedIn and authorized send a post request to add user
    let user_Token = JSON.parse(localStorage.getItem('login'))
    
    facObj.token = user_Token.token

    let adminUser = await axios.post('http://localhost:3000/addfaculty', facObj)

    // console.log(adminUser);
 
})