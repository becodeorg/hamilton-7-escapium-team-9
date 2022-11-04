//ABOUT US
//video
function toggle(){
  var video1 = document.querySelector(".video1");
  var video = document.querySelector("video");
  video1.classList.toggle("active");
  video.pause();
  video.currentTime = 0; 
}

//slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("WhatPeopleSay__bloc");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; 
}
//FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {

var panel = this.nextElementSibling;
if (panel.style.maxHeight){
  panel.style.maxHeight = null;
} else {
  let active = document.querySelectorAll(".accordion-div .accordion.active");
  for(let j = 0; j < active.length; j++){
    active[j].classList.remove("active");
    active[j].nextElementSibling.style.maxHeight = null;
  }
  this.classList.toggle("active");
  panel.style.maxHeight = panel.scrollHeight + "px";
}
});
}

//CONTACT
document.getElementById("firstname").addEventListener("keyup", check);
document.getElementById("email").addEventListener("keyup", check);
document.getElementById("msg").addEventListener("keyup", check);

function check(){
  var firstname = document.getElementById("firstname").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;

  if(firstname.length === 0 || email.length === 0 || msg.length === 0){
      document.getElementById("firstname").style.borderBottom = "solid #F60B0E";
      document.getElementById("email").style.borderBottom  = "solid #F60B0E";
      document.getElementById("msg").style.borderBottom  = "solid #F60B0E";
      document.getElementById("Success").style.visibility ="hidden";
  }
  else{
    document.getElementById("firstname").style.borderBottom = "solid #717171";
    document.getElementById("email").style.borderBottom  = "solid #717171";
    document.getElementById("msg").style.borderBottom  = "solid #717171";
    document.getElementById("Success").style.visibility ="visible";
  }
}

// var test= {lat: 40.779897, lng: -73.968565};
//MAP
function initMap() {
  var test= {lat: 40.779897, lng: -73.968565};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: test,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ],
      },
    ],
  }
  );

  var marker = new google.maps.Marker({
    position: test,
    map: map,
    icon: '../resources/images/gmap-logo.png',
  });
  
}

//HOMEPAGE
//NAVBAR
;(function($) {
  $(function() {
    $('nav ul li > a:not(:only-child)').click(function(e) {
      $(this)
        .siblings('.nav-dropdown')
        .slideToggle()
      $('.nav-dropdown')
        .not($(this).siblings())
        .hide()
      e.stopPropagation()
    })
    $('html').click(function() {
      $('.nav-dropdown').hide()
    })
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active')
    })
  })
})(jQuery)

//CAROUSEL
// function carousel(){
//   var slide1 = document.querySelector(".slide1");
//   var slide2 = document.querySelector(".slide2");
//   var slide3 = document.querySelector(".slide3");
//   var slide4 = document.querySelector(".slide4");

//   slide2.classList.replace("active", null);
//   slide3.classList.replace("active", null);
//   slide4.classList.replace("active", null);
//   slide1.classList.toggle("active");
// }
// function carousel2(){
//   var slide1 = document.querySelector(".slide1");
//   var slide2 = document.querySelector(".slide2");
//   var slide3 = document.querySelector(".slide3");
//   var slide4 = document.querySelector(".slide4");
  
//   slide1.classList.replace("active", null);
//   slide3.classList.replace("active", null);
//   slide4.classList.replace("active", null);
//   slide2.classList.toggle("active");

// }
// function carousel3(){
//   var slide1 = document.querySelector(".slide1");
//   var slide2 = document.querySelector(".slide2");
//   var slide3 = document.querySelector(".slide3");
//   var slide4 = document.querySelector(".slide4");
  
//   slide1.classList.replace("active", null);
//   slide2.classList.replace("active", null);
//   slide4.classList.replace("active", null);
//   slide3.classList.toggle("active");

// }
// function carousel4(){
//   var slide1 = document.querySelector(".slide1");
//   var slide2 = document.querySelector(".slide2");
//   var slide3 = document.querySelector(".slide3");
//   var slide4 = document.querySelector(".slide4");
  
//   slide1.classList.replace("active", null);
//   slide2.classList.replace("active", null);
//   slide3.classList.replace("active", null);
//   slide4.classList.toggle("active");

// }

  