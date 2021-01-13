/*Menusticky*/
var hamburguer = document.getElementById('hamburguer');
var alturaH = hamburguer.offsetTop;
var navega = document.getElementById('navega');
var altura = navega.offsetTop;
var responsiveButton = function(){
	if (screen.width <= 991) {
		/*Añadir y retirar la hamburguesa*/
		if(window.pageYOffset > alturaH){
			hamburguer.classList.add('hambuerguerSticky');
		}
		else{
			hamburguer.classList.remove('hambuerguerSticky');
		}
	}
	else{
		if(window.pageYOffset > altura){
			navega.classList.add('navegasticky');
		}
		else{
			navega.classList.remove('navegasticky'); 
		}
	}
}
window.addEventListener('scroll',responsiveButton)
/*Funcion para eliminar los estilos del nav*/
var eliminarEstilos = function(){
	document.getElementById('navega').style.display= "none"
	document.getElementById('navega').children[0].style.display= "none"
	document.getElementById('navega').children[0].children[0].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[0].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[1].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[2].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[3].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[0].children[0].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[1].children[0].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[2].children[0].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[3].children[0].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[0].children[0].children[0].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[0].children[0].children[1].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[1].children[0].children[0].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[1].children[0].children[1].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[2].children[0].children[0].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[2].children[0].children[1].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[3].children[0].children[0].style.display= "none"
	document.getElementById('navega').children[0].children[0].children[3].children[0].children[1].style.display= "none"
}
/*Funcion para agregárlos*/
var agregarEstilos = function(){
	document.getElementById('navega').style.removeProperty('all');
	document.getElementById('navega').children[0].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[0].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[1].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[2].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[3].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[0].children[0].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[1].children[0].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[2].children[0].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[3].children[0].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[0].children[0].children[0].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[0].children[0].children[1].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[1].children[0].children[0].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[1].children[0].children[1].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[2].children[0].children[0].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[2].children[0].children[1].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[3].children[0].children[0].style.removeProperty('all');
	document.getElementById('navega').children[0].children[0].children[3].children[0].children[1].style.removeProperty('all');
}

/*Aimación barras corintas &&  Eliminar o agregar estilos del nav si la ventana cambia de tamaño*/
var menu = document.getElementById('menu');
var mouseOverBar = function(){
	this.children[1].style.display = "block";
	this.children[1].style.animation = "0.2s slideUp";
	this.children[1].style.bottom = "-12px";
}
var mouseLeaveBar = function(){
	this.children[1].style.animation = "0.2s slideDown";
	this.children[1].style.bottom = "-19px";
}
var slideBar = function(){
	for (var i = 0; i < menu.children.length; i++){
		menu.children[i].children[0].addEventListener('mouseover', mouseOverBar);
		menu.children[i].children[0].addEventListener('mouseleave', mouseLeaveBar);
	}    
}
var quitSlideBar = function(){
	for (var i = 0; i < menu.children.length; i++){
		menu.children[i].children[0].removeEventListener('mouseover',mouseOverBar);
		menu.children[i].children[0].addEventListener('mouseleave', mouseLeaveBar);
	}    
}

if (screen.width <= 991) {
	eliminarEstilos();
}
else{
	slideBar();
}
/*Funcion para realizar cosas cuando se cambie el tamaño*/
window.addEventListener('resize', function(){
	alturaH = hamburguer.offsetTop;
	altura = navega.offsetTop; 
	if (screen.width <= 991) {
		eliminarEstilos();
		quitSlideBar();
		responsiveButtonHambuerguer();
	}	
	else{
		menuResponsivo.style.left ="-100%";
		menuResponsivo.style.animation = "0.3s slideLeft";
		agregarEstilos();
		slideBar();
		responsiveButtonHambuerguer();
	}
});
/*Evento de block scroll*/
var windowX = window.pageXOffset;
var windowY = window.pageYOffset;
var blockScroll = function(){
	window.scroll(windowX, windowY);
}
/*Añadiendole evento a  la hamburguesa*/
var responsiveButtonHambuerguer = function(){
	if (screen.width <= 991) {
		/*Añadir y retirar la hamburguesa*/
		if(window.pageYOffset > alturaH){
			hamburguer.classList.add('hambuerguerSticky');
			menuResponsivo.style.left ="-100%";
			menuResponsivo.style.animation = "0.3s slideLeft";
			window.removeEventListener('scroll',blockScroll);
		}
		else{
			setTimeout(function(){
				hamburguer.classList.remove('hambuerguerSticky');
			},120)
			menuResponsivo.style.left ="-100%";
			menuResponsivo.style.animation = "0.3s slideLeft";
			hamburguer.style.animation = "0.12s slideRightHambuerguer"
			window.removeEventListener('scroll',blockScroll);
			window.addEventListener('scroll',responsiveButton)
		}
	}
	else{
		if(window.pageYOffset > altura){
			navega.classList.add('navegasticky');
			navega.children[1].style.opacity ="1";
		}
		else{
			navega.classList.remove('navegasticky');
			navega.children[1].style.opacity ="0";
		}
	}
}
/*abrir y cerrar el menu responsivo*/
var sino = true
var menuResponsivo = document.getElementById('menuResponsivo');
hamburguer.addEventListener('click', function(){
	if (sino) {
		if (window.pageYOffset<alturaH){
			menuResponsivo.style.left ="0";
			menuResponsivo.style.animation = "0.3s slideRight";
			setTimeout(function(){
				hamburguer.style.right= "-15%";
				hamburguer.style.animation = "0.08s slideLeftHambuerguer";
				hamburguer.style.right= "0";
				hamburguer.classList.add('hambuerguerSticky');
			},300);
			window.removeEventListener('scroll',responsiveButton)
		}
		else{
			menuResponsivo.style.left ="0";
			menuResponsivo.style.animation = "0.3s slideRight";
		}
		/*Funcion para bloquear el scroll*/
		windowX = window.pageXOffset;
		windowY = window.pageYOffset;
		window.addEventListener('scroll',blockScroll)
		sino= false;
	}
	else{
		responsiveButtonHambuerguer();
		sino=true;
	}
})
/*goTop button*/
var permitirGoTop = true;
if(document.documentElement.scrollTop > 600 && permitirGoTop == true){
	document.querySelector('.go-top-container').classList.add('show');
}
window.onscroll	= function(){
	if(document.documentElement.scrollTop > 600 && permitirGoTop == true){
		document.querySelector('.go-top-container').classList.add('show');
	}else{
		document.querySelector('.go-top-container').classList.remove('show');
	}
}
document.querySelector('.go-top-container').addEventListener('click', () =>{
	var posicion = document.getElementById('inicio').offsetTop;
	window.scrollTo({
		top: posicion,
		behavior: 'smooth'
	})
})
/*Quitar la barra corinta al estar en otra seccion*/
var cambioDeSeccion = function(){
	var posInicio = document.getElementById('inicio').offsetTop,
	posPinabetes = document.getElementById('pinabetes').offsetTop-100,
	posUbicaciones = document.getElementById('ubicaciones').offsetTop-100;
	if ((parseInt(window.pageYOffset)+1) >= posInicio && (parseInt(window.pageYOffset)) < posPinabetes) {
		menu.children[0].children[0].children[1].style.display = "block";
		menu.children[0].children[0].children[1].style.animation = "0.2s slideUp";
		menu.children[0].children[0].children[1].style.bottom = "-12px";
		menu.children[0].children[0].removeEventListener('mouseleave', mouseLeaveBar);
		menu.children[1].children[0].children[1].style.animation = "0.2s slideDown";
		menu.children[1].children[0].children[1].style.bottom = "-19px";
		menu.children[1].children[0].addEventListener('mouseleave', mouseLeaveBar);
		menu.children[2].children[0].children[1].style.animation = "0.2s slideDown";
		menu.children[2].children[0].children[1].style.bottom = "-19px";
		menu.children[2].children[0].addEventListener('mouseleave', mouseLeaveBar);
	}
	else if ((parseInt(window.pageYOffset)+1) >= posPinabetes && (parseInt(window.pageYOffset)) < posUbicaciones) {
		menu.children[1].children[0].children[1].style.display = "block";
		menu.children[1].children[0].children[1].style.animation = "0.2s slideUp";
		menu.children[1].children[0].children[1].style.bottom = "-12px";
		menu.children[1].children[0].removeEventListener('mouseleave', mouseLeaveBar);
		menu.children[0].children[0].children[1].style.animation = "0.2s slideDown";
		menu.children[0].children[0].children[1].style.bottom = "-19px";
		menu.children[0].children[0].addEventListener('mouseleave', mouseLeaveBar);
		menu.children[2].children[0].children[1].style.animation = "0.2s slideDown";
		menu.children[2].children[0].children[1].style.bottom = "-19px";
		menu.children[2].children[0].addEventListener('mouseleave', mouseLeaveBar);
	}
	else if ((parseInt(window.pageYOffset)+1) >= posUbicaciones) {
		menu.children[2].children[0].children[1].style.display = "block";
		menu.children[2].children[0].children[1].style.animation = "0.2s slideUp";
		menu.children[2].children[0].children[1].style.bottom = "-12px";
		menu.children[2].children[0].removeEventListener('mouseleave', mouseLeaveBar);
		menu.children[1].children[0].children[1].style.animation = "0.2s slideDown";
		menu.children[1].children[0].children[1].style.bottom = "-19px";
		menu.children[1].children[0].addEventListener('mouseleave', mouseLeaveBar);
	}
	else{
		menu.children[2].children[0].children[1].style.animation = "0.2s slideDown";
		menu.children[2].children[0].children[1].style.bottom = "-19px";
		menu.children[1].children[0].children[1].style.animation = "0.2s slideDown";
		menu.children[1].children[0].children[1].style.bottom = "-19px";
		menu.children[0].children[0].children[1].style.animation = "0.2s slideDown";
		menu.children[0].children[0].children[1].style.bottom = "-19px";
	}
}
window.addEventListener('scroll',cambioDeSeccion);
/*Al hacer click quitar el menu e ir hacia la seccion*/
var irALaSeccion = function(){
	responsiveButtonHambuerguer();
	sino=true;
}
for (var i = 0; i < 4; i++) {
	menuResponsivo.children[i].children[0].addEventListener('click', irALaSeccion);
}
/*Cambiar a pinabetes clase B*/
var edenPlus = document.getElementById('edenPlus'),
b = document.getElementById('b'),
fichas = document.getElementById('fichas'),
fichasB = document.getElementById('fichasB');

var showB = function(){
	fichas.style.display = "none";
	edenPlus.style.backgroundColor = '#5d6740'
	b.style.backgroundColor = '#bccf86'
	fichasB.style.display = 'flex'
}
var showEdenPlus = function(){
	fichasB.style.display = "none";
	b.style.backgroundColor = '#5d6740'
	edenPlus.style.backgroundColor = '#bccf86'
	fichas.style.display = 'flex'	
}
edenPlus.addEventListener('click', showEdenPlus);
b.addEventListener('click', showB);