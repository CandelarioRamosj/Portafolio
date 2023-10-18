var test = document.getElementsByClassName('contenedor-enlaces-proyecto');
var img = document.getElementsByClassName('img-proyectos');

for(let i = 0; i < test.length; i++){
  test[i].addEventListener("mouseover", function (event) {
    //highlight the mouseover target
    img[i].classList.add('img-js-opacity')
  }, false);
  
  test[i].addEventListener("mouseout", function (event) {
    // highlight the mouseout target
    img[i].classList.remove('img-js-opacity')
  }, false);
}