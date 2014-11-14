$(document).ready(function(){

//back to top
  $(function() {
    $(window).scroll(function(){
      var scrolltop=$(this).scrollTop();
      if(scrolltop>=200){
        $("#elevator_item").show();
      }else{
        $("#elevator_item").hide();
      }
    });
    $("#elevator").click(function(){
      $("html,body").animate({scrollTop: 0}, 500);
    });
    $(".qr").hover(function(){
      $(".qr-popup").show();
    },function(){
      $(".qr-popup").hide();
    });
  });







// masonry
setTimeout(function() {
 var container = document.querySelector('#container');
 var msnry = new Masonry( container, {
  // options
  columnWidth: 5,
  itemSelector: '.item'
});
}, 500);









// menu-btn
$(".menu-toggle").click(function(){
	if($(".lines").hasClass("menu-x")){
    $(".overlay").removeClass("close-menu");
    $(".lines").removeClass("menu-x");
    $('#header').css("background-color", "transparent");
    $("#navList2").slideUp( 300 );
  } else {
    $(".overlay").addClass("close-menu");
    $(".lines").addClass("menu-x");
    $('#header').css("background-color", "rgba(0,0,0,.8)");
    $("#navList2").slideDown( 300 );

    $(".close-menu").click(function(){

      $(".overlay").removeClass("close-menu");
      $(".lines").removeClass("menu-x");
      $('#header').css("background-color", "transparent");
      $("#navList2").slideUp( 300 );
      
    });
  }

});
// menu-btn-end




$( window ).scroll(function() {
  if($(".lines").hasClass("menu-x")){
    $("#navList2").slideUp( 300 );
    $(".lines").removeClass("menu-x");
    $(".overlay").removeClass("close-menu");
  } 
});


$(".close-menu").click(function(){

  $(".overlay").removeClass("close-menu");
  $(".lines").removeClass("menu-x");
  $('#header').css("background-color", "transparent");
  $("#navList2").slideUp( 300 );

});




// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 


});


//this is for header image size same as window size

var divHeight = 0;

$( window ).resize(function() {
	heightUpdate();
}); /* event listener */

$(document).ready(function(){
	heightUpdate();
}); /* event listener */

function heightUpdate()
{
  divHeight = $( window ).height();
  $("#fullscreen-cover").css("height", divHeight);
}
/* responsive dom function begins */



$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > divHeight) {
    $('#header').css("background-color", "rgba(0,0,0,.8)");
  } else {
    $('#header').css("background-color", "transparent");
  }
});


//bxslider

$(document).ready(function(){
  $('.bxslider').bxSlider();
});

