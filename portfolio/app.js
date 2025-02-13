let skills=document.querySelector(".skills");
let education=document.querySelector(".education");
let skillsDiv=document.querySelector(".skills-div");
let educationDiv=document.querySelector(".education-div");

skills.addEventListener("click",function(){
    educationDiv.style.left="-5000px";
    skillsDiv.style.left="0px";
    education.classList.remove('active-link');
    skills.classList.add('active-link');
})

education.addEventListener("click",function(){
    educationDiv.style.left="0px";
    skillsDiv.style.left="-5000px";
    education.classList.add('active-link');
    skills.classList.remove('active-link');
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbzgT2j_KseJmskiHYyQY5UuH8TmwOpnnVir32FqePfXjVGPpY-KrfXSJVjYj6H_GnL-/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

const themeChanger=document.querySelector('.theme-changer')

themeChanger.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    if(document.body.classList=='dark'){
        themeChanger.innerHTML='<i class="fa-regular fa-sun"></i>&nbsp;&nbsp;Light mode'
    }else{
        themeChanger.innerHTML='<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark mode'
    }
})

const menuBtn=document.querySelector('.menu-button')
const menuCloseBtn=document.querySelector('.menu-close-button');
const listdiv=document.querySelector('.list-div')

menuBtn.addEventListener('click',()=>{
    listdiv.style.left='0';   
})

menuCloseBtn.addEventListener('click',()=>{
    listdiv.style.left='-100%';
})
