//video
function toggle(){
  var video1 = document.querySelector(".video1");
  var video = document.querySelector("video");
  video1.classList.toggle("active");
  video.pause();
  video.currentTime = 0; 
}

//slider
// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
  });
  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item.
  $('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
  next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  if (next.next().length>0) {
  next.next().children(':first-child').clone().appendTo($(this));
  } else {
  $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
  });

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

