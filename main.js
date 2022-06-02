// abre e fecha o menu hamburger
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle ){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
  })
}

// esconde o menu ao clicar
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}