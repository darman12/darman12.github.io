/*******************************************
 * Displays information on the specials menu 
 * relevant to the day of the week.
 ******************************************/
var d = new Date();
var today = d.getDay();
var days = ['We\'re closed on Sunday','Monday Special','Taco Tuesday','Wednesday Special','Thursday Special','Friday Special','Saturday Special']
document.getElementById("special").innerHTML = days[today];

// changes the specials info box to display the special for the current day
var specialMenuItem = [
   'Que tengas un buen dia!',
   '<ul><li>Caldo de Res</li><li>Costillas de Puerco con Salsa Verde</li></ul>',
   'Tacos: de Carne Asada, Abovada, Chorizo, y Pollo',
   'Caldo de Albondigas',
   'Tacos de Birria, Beef',
   'Pozole',
   'Menudo Rojo']
document.getElementById("special-menu").innerHTML = specialMenuItem[today];

// changes specials button if it's Sunday
if(today === 0) {
   document.querySelector('a.button').textContent  = 'See specials';
}