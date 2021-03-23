var newReleases = document.querySelector('.new-releases');
var sebMenu = document.querySelector('.seb-menu');
var men = document.querySelector('.men');
var sebMenu2 = document.querySelector('.seb-menu2');
var Women = document.querySelector('.women');
var sebMenu3 = document.querySelector('.seb-menu3');
var Kids = document.querySelector('.kids');
var sebMenu4 = document.querySelector('.seb-menu4');
var Sale = document.querySelector('.sale');
var sebMenu5 = document.querySelector('.seb-menu5');

newReleases.addEventListener('click', function (){
    sebMenu.classList.toggle('active');
});

men.addEventListener('click', function(){
    sebMenu2.classList.toggle('active');
});

Women.addEventListener('click', function(){
    sebMenu3.classList.toggle('active');
});

Kids.addEventListener('click', function(){
    sebMenu4.classList.toggle('active');
});

Sale.addEventListener('click', function(){
    sebMenu5.classList.toggle('active');
});





