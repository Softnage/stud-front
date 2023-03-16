if(document.querySelector('.home_swiper')){
  var home_swiper = new Swiper('.home_swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    autoplay:{
      delay : 4000
    },
  });
}

window.onresize =()=>{
  var winWidth =  window.innerWidth
  makeBannerSwiper(winWidth)
  handleMenu(winWidth)
  makeShowSwiper(winWidth)
  handleScreen(winWidth)
  makeHotelSwiper(winWidth)
}
window.onload =()=>{
  var winWidth =  window.innerWidth
  makeBannerSwiper(winWidth)
  handleMenu(winWidth)
  makeShowSwiper(winWidth)
  handleScreen(winWidth)
  makeHotelSwiper(winWidth)
}

const makeBannerSwiper =(min)=>{
  if(document.querySelector('.banner_swiper')){
    console.log(min)
    if(min > 570 && min < 1000){
      var slide_num = 3
    }
    if(min < 570 && min > 300){var slide_num = 2}
    else if(min < 300){var slide_num = 1}
    else{var slide_num = 4}
    var banner_swiper = new Swiper(".banner_swiper", {
      slidesPerView: slide_num,
      loop:true,
      // autoplay:{
      //   delay : 3000
      // },
      speed: 1000,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
    banner_swiper.el.style.zIndex = 10
  }
}

const menu_tag = document.getElementById('menu_tag')
// const search_form = document.querySelector('.search_form')
const home_swiper_nav = document.querySelector('.home_swiper_nav')
const handleMenu =(min)=>{
  if(min < 501){
    if(menu_tag){
      menu_tag.onclick =()=>{
        home_swiper_nav.classList.toggle('change')
      }
    }
  }
}

const next = document.getElementById('next')
const prev = document.getElementById('prev')
const makeShowSwiper =(min)=>{
  if(document.querySelector('.show1')){
    if(min < 840 && min > 500){var slide_num = 2}
    else if(min < 550){var slide_num = 1}
    else if (min < 1300 && min > 840) {
    slide_num = 3
    }
    else{var slide_num = 4}
      var show_swiper = new Swiper('.show1', {
      direction: 'horizontal',
      slidesPerView: slide_num,
      // invert:true,
      loop: true,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      speed: 1500,
      autoplay:{
        delay : 2900,
        disableOnInteraction: false,
      },
    });
    show_swiper.el.style.zIndex = 1
    var show_swiper2 = new Swiper('.show2', {
      direction: 'horizontal',
      slidesPerView: slide_num,
      invert:true,
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      speed: 1500,
      autoplay:{
        reverseDirection: true,
        delay : 2900,
        disableOnInteraction: true,
      },
    });
    show_swiper2.el.style.zIndex = 1
  }
}

if(document.querySelector('.gallery_swiper_top')){
  var gallery_swiper_top = new Swiper('.gallery_swiper_top', {
    direction: 'horizontal',
    loop: true,
    invert : true,
    speed: 1500,
    autoplay:{
      reverseDirection: true,
      delay : 3000
    },
  });
  gallery_swiper_top.el.style.zIndex = 1
}

if(document.querySelector('.gallery_swiper_low')){
  var gallery_swiper_low = new Swiper('.gallery_swiper_low', {
    direction: 'vertical',
    invert:true,
    loop: true,
    speed: 1500,
    autoplay:{
      delay : 3000
    },
  });
  gallery_swiper_low.el.style.zIndex = 1
}

const sideBar_tag = document.getElementById('sideBar_tag')
const sideBar = document.querySelector('.sideBar')
const main = document.querySelector('.main')


const handleScreen =(min)=>{
  if(sideBar){
    sideBar_tag.onclick =()=>{
      sideBar.classList.toggle('show')
      if(min > 1300){
        sideBar.classList.toggle('change')
        sideBar_tag.classList.toggle('change')
        main.classList.toggle('change')
      }
    }
  }
}

const makeHotelSwiper =(min)=>{
  if(document.querySelector('.hostel_swiper')){
    if(min < 930 && min > 530){slideNum = 2}else if(min < 530 ){slideNum = 1}else{slideNum = 3}
      var hostel_swiper = new Swiper('.hostel_swiper', {
      direction: 'horizontal',
      slidesPerView: slideNum,
      loop:true,
      spaceBetween: 10,
      autoplay: {delay : 5000},
      speed:1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    hostel_swiper.el.style.zIndex = 1
  }
}

if(document.querySelector('.top_pick_swiper')){
  var top_pick_swiper = new Swiper('.top_pick_swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {delay : 3000},
    speed:1000,
  });
}


const searchTab = document.getElementById('searchTab')
const search_form = document.querySelector('.search_form')
if(searchTab){
  searchTab.onclick =()=>{
    search_form.classList.toggle('change')
  }
}