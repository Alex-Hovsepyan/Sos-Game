let burger_type = 'close'

function menuFunc() {
    let header = document.querySelector('.header')
    let line1 = document.querySelector('.line1')
    let line2 = document.querySelector('.line2')
    let line3 = document.querySelector('.line3')

    switch(burger_type) {
        case 'close':
            header.classList.add('responsive_header')
            line2.style.opacity = 0
            setTimeout(() => {
                line2.style.display = 'none'
            }, 300);
            line1.style.transform = 'rotate(-45deg)'
            line3.style.transform = 'rotate(45deg)'
            line3.style.top = '0'
            line3.style.width = '40px'
            burger_type = 'open'
            
            break
        case 'open':
            header.classList.remove('responsive_header')
            line1.style.transform = 'rotate(0)'
            line3.style.transform = 'rotate(0)'
            line3.style.width = '35px'
            line3.style.top = '22px'
            line2.style.display = 'block'
            setTimeout(() => {
                line2.style.opacity = 1
            }, 300);
            burger_type = 'close'
            break
    }
}

var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    loop: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    }
  });

window.onscroll = () => {
  let header = document.querySelector('header')
  if (window.scrollY > 600) {
    header.classList.add('header_scroll')
  }
  else {
    header.classList.remove('header_scroll')
  }
}