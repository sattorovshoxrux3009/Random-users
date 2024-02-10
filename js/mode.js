const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const modeChange=()=>{
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
}
if(localStorage.getItem('darkmode:')){
    modeChange();
}
darkBtn.addEventListener('click',()=>{
    modeChange();
    localStorage.setItem('darkmode:',true)
})
lightBtn.addEventListener('click',()=>{
    modeChange();
    localStorage.setItem('darkmode:','')
})
