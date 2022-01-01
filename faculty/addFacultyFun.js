
let addFacultyBtn = document.querySelector(".afbtn");
let fCont = document.querySelector('.faculty-container')
let fxBtn = document.querySelector('.f-close-cont')



addFacultyBtn.addEventListener("click",()=>{

    // check if user is loggedIn && user is authorized
    // if loggedIn and authorized send a post request to add user

    fCont.style.display = "block"
})

fxBtn.addEventListener('click',()=>{
    fCont.style.display = 'none'
})
