//============= MENU =======

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


// modifica o header da página quando der scroll
function changeHeaderWhenScroll(){
  
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if(window.scrollY >= navHeight){
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  
  }else{
    // menor que a altura do header
    header.classList.remove('scroll')
  }

}

// testimonial slider - swiper - lib carrossel 

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination:{
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767:{
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
  
});

// === ScrollReveal =====================
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance:'30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, {interval: 100})


  // Botão voltar para o topo

  function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top')
    
    if(window.scrollY >= 560){
      backToTopButton.classList.add('show')
  
    } else{
      backToTopButton.classList.remove('show')
    }
  }
 

  // When Scroll
window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
  backToTop()
})