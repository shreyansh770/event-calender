let addFacultyBtn = document.querySelector(".afbtn");
let fCont = document.querySelector('.faculty-container')
let fxBtn = document.querySelector('.f-close-cont')



addFacultyBtn.addEventListener("click", async () => {



    // check if user is loggedIn && user is authorized
    if (localStorage.getItem('login')) {
        // if loggedIn and authorized send a post request to add user
        let cookieToken = localStorage.getItem('login')

        let user = await axios.get('http://localhost:3000/auth/getUser', {
            params: {
                cookieToken
            }
        })


        if (user.data.user[0].role == "admin") {
            fCont.style.display = "block"
        } else {
            alert('Only allowed for admins')
        }

    } else {
        console.log("You are not logged in")
    }



})

fxBtn.addEventListener('click', () => {
    fCont.style.display = 'none'
})