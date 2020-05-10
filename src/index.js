import menu from './menu.json'
//Custom template which will take dish from MENU
import menuItemTemplate from './templates/dish-template.hbs'
import './styles.css';

const refs ={
  menuItems: document.querySelector('ul.js-menu'),
  swichControl: document.querySelector('input.js-switch-input')
}

buildMenuItems(menu)
function buildMenuItems (menu){
  //Generate array dishes of menu with custom template and then join toString
  const markup = menu.map(dish => menuItemTemplate(dish)).join('')
  refs.menuItems.insertAdjacentHTML("beforeend", markup)
}

//DATA for Local Storage and theme styles
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//Add Event Listeners
document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage)
refs.swichControl.addEventListener('change', changeTheme)

//Get DATA from LS
function getThemeFromLocalStorage () {
  if(Theme.LIGHT === JSON.parse(localStorage.getItem('theme'))){
    refs.swichControl.checked = false
    onLightTheme()
  }
  if(Theme.DARK === JSON.parse(localStorage.getItem('theme'))){
    //checkbox is checked
    refs.swichControl.checked = true
    onDarkTheme()
  }
}

//CHANGE THEME
function changeTheme (e){
  if(!refs.swichControl.checked){
    onLightTheme()
  } 
  if(refs.swichControl.checked){
    onDarkTheme()
  }
}
//ENABLE LIGHT THEME
function onLightTheme (){
  document.body.classList.remove(Theme.DARK)
  document.body.classList.add(Theme.LIGHT)
  localStorage.removeItem('theme', JSON.stringify(Theme.DARK))
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT))
}
//ENABLE DARK THEME
function onDarkTheme (){
  document.body.classList.remove(Theme.LIGHT)
  document.body.classList.add(Theme.DARK)
  localStorage.removeItem('theme', JSON.stringify(Theme.LIGHT))
  localStorage.setItem('theme', JSON.stringify(Theme.DARK))
}


