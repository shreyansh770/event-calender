let cont = document.querySelector('.faculty-list')

let userToDel = {

    delEmail: "",
    email: "",
    token:""
}

cont.addEventListener('click', async (e) => {


    if (e.target.classList.contains('fa-trash')) {

        let delBtn = document.querySelector('.dele-fac')

        if (localStorage.getItem('login')) {

            let facvalue = delBtn.getAttribute('datavalue')

            let facDet = JSON.parse(localStorage.getItem('login'))

            userToDel.delEmail = facvalue;
            userToDel.email = facDet.email;
            userToDel.token = facDet.token

            
            let delUser = await axios.post('http://localhost:3000/delFac',userToDel)

            console.log(delUser);

        } else {
            console.log("User not logged In");
        }
    }

})