const btn=document.querySelector('.burgar');
const navlinks=document.querySelector('.navbar-links');
const toparrow=document.querySelector('.fab');
btn.addEventListener('click',()=>{
    btn.classList.toggle('toggle')
    navlinks.classList.toggle('show-nav')
})

const t1=gsap.timeline({default:{ease:'power4'}})
t1.to('.navigation',{y:'-100%',duration:0})
t1.to('#intro .heading-title',{x:'300%',duration:0})
t1.to('.text',{y:'0%',duration:1.2})
t1.to('#start',{y:'-300%',duration:1.2,delay:0.5})
t1.to('.navigation',{y:'0%',duration:1})
t1.to('#intro .heading-title',{x:'0%',duration:1,delay:1})
