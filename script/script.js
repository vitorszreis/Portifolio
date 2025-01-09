const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if (top >= 100){
        header.classList.add('navbarDark')
    }else{
        header.classList.remove('navbarDark')
    }
}

document.querySelectorAll('.custom-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Projeto em breve!');
        // window.location.href = "link-do-projeto";
    });
});