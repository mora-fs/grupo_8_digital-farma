const menuButton= document.querySelector('#menuButton');
const dropDownMenu= document.querySelector('#dropDownMenu');
const displayMenuToggle= menuButton.addEventListener('click', function(){
    dropDownMenu.classList.toggle('menuOff');
    console.log(dropDownMenu);
})
window.addEventListener('load', function(){
    displayMenuToggle;
})