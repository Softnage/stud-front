const sideBar_tag = document.getElementById('sideBar_tag')
const sideBar = document.querySelector('.sideBar')
const main = document.querySelector('.main')

window.onresize =()=>{
  var winWidth =  window.innerWidth
  handleScreen(winWidth)
}
window.onload =()=>{
  var winWidth =  window.innerWidth
  handleScreen(winWidth)
}

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