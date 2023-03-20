const show_log_form = document.querySelectorAll('[id=show_log_form]')
const form_cover = document.querySelector('.form_cover')
const fs1 = document.getElementById('fs1')
const fs2 = document.getElementById('fs2')
const show_sign_form = document.querySelectorAll('[id=show_sign_form]')
const close_form = document.getElementById('close_form')

if(document.getElementById('show_sign_form')){
  show_log_form.forEach(el=>{
    el.onclick =()=>{
      form_cover.classList.toggle('change')
      fs1.classList.toggle('change')
    }
  })
  show_sign_form.forEach(el=>{
    el.onclick =()=>{
      form_cover.classList.toggle('change')
      fs2.classList.toggle('change')
    }
  })
  close_form.onclick =()=>{
    if(fs1.classList.contains('change')){
      fs1.classList.remove('change')
    }else if (fs2.classList.contains('change')) {
      fs2.classList.remove('change')
    }
    form_cover.classList.toggle('change')
  }
}


const h_card_like = document.querySelectorAll('[id=h_card_like]')
  h_card_like.forEach(h=>{
    h.onclick =()=>{
      // <i class=""></i>
      if(h.classList.contains('fa-regular')){
        h.classList.replace('fa-regular','fa-solid')
      }else{
        h.classList.replace('fa-solid','fa-regular')
      }
      console.log(h)
    }
  })

const image_modal = document.querySelector('.image_modal')
const image_modal_s = document.querySelector('.image_modal_swiper')
const imi = document.querySelectorAll('[id=imi]')
if(image_modal){
  image_modal.onclick =(e)=>{
    if(e.target.dataset.con === 'image_modal'){
      image_modal.style.display = 'none'
    }
  } 
  for (let i = 0; i < imi.length; i++) {
    imi[i].onclick =()=>{
      image_modal.style.display = 'flex'
    }
  }
}