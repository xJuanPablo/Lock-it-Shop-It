// code to switch between light and dark mode

let switchBtn = document.querySelector('#switchBtn')

switchBtn.addEventListener('click', () =>{
let theme = document.querySelector('.theme')
  if(theme.getAttribute('href') == "/assets/css/style.css"){
    theme.setAttribute('href', "/assets/css/light.css")
  } else{
    theme.setAttribute('href', "/assets/css/style.css")
  }
})