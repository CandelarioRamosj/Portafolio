let ul = document.getElementById('ul')
let boton = document.getElementById('button-bars')

boton.addEventListener('click', function(){
  //Quita y pone el navbar con el boton
  ul.classList.toggle('invisible-ul')
})

let links = document.querySelectorAll('#ul a');

links.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    //Quita el #id de la url al hacer clic en un elemento
    let href = this.getAttribute('href');
    let target = document.querySelector(href);
    target.scrollIntoView({
      behavior: 'smooth'
    });
    //Quita el navbar cuando se hace clic en un elemento
    ul.classList.toggle('invisible-ul')
  });
});
