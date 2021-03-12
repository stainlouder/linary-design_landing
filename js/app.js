	var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
if(isMobile.any()){}
	
if(location.hash){
		var hsh=location.hash.replace('#','');
	if($('.popup-'+hsh).length>0){
		popupOpen(hsh);
	}else if($('div.'+hsh).length>0){
		$('body,html').animate({scrollTop:$('div.'+hsh).offset().top,},500, function(){});
	}
}


$('.wrapper').addClass('loaded');

	var act="click";
if(isMobile.iOS()){
	var act="touchstart";
}

function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();



$(window).resize(function(event) {
	mainblock();
});
function mainblock(){
		var h=$(window).outerHeight();
	$('.mainblock').css('min-height',h);
}
	mainblock();



$('.filter__item').click(function(event) {
		var i=$(this).data('filter');
	if (i==1) {
		$('.portfolio__column').show();
	}else{
		$('.portfolio__column').hide();
		$('.portfolio__column.f_'+i).show();
	}
	$('.filter__item').removeClass('active');
	$(this).addClass('active');

	return false;
});



$(document).ready(function(){
	$("a").on('click', function(event) {
	  if (this.hash !== "") {
		event.preventDefault();
  
		var hash = this.hash;
  
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
  
		  window.location.hash = hash;
		});
	  }
	});
});

$(".gallery").magnificPopup({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	}
});