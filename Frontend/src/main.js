/**
 * Created by chaika on 25.01.16.
 */

$(function(){
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/PizzaMenu');
    var PizzaCart = require('./pizza/PizzaCart');
    var Pizza_List = require('./Pizza_List');

    PizzaCart.initialiseCart();
    PizzaMenu.initialiseMenu();

    function initialize() {
        var icon ={
            url: "assets/images/Pizza-icon.png",
            scaledSize: new google.maps.Size(32, 32)
        };
        var mapProp = {
            center: new google.maps.LatLng(50.464379,30.519131),
            zoom: 11
        };
        var html_element =	document.getElementById("googleMap");
        var map	=	new	google.maps.Map(html_element,	 mapProp);
        var point = new google.maps.LatLng(50.464379,30.519131);
        var marker = new google.maps.Marker({
            position: point,
            map: map,
            icon: icon
        });
    }


    google.maps.event.addDomListener(window,	 'load',	initialize);
    google.maps.event.addListener(map, 'click', function(me){
       var coordinaes = new me.latLng;
       var marker = new google.maps.Marker({
           position: coordinaes,
           map: map,
           icon: icon
       })
    });
});
