let logoutBtn = document.querySelector('.login_logout')


logoutBtn.addEventListener('click',()=>{
    if(localStorage.getItem('login')){
        localStorage.removeItem('login')
        msg('Faculty logged out')
    }else{
        window.location.href = `/view/login.html`
    }
})