window.onload = start;

function start(){
	
	$("section").load("partials/index.html");

}

$(function(){
	$("#menu-nav").find('ul').find('li').find('a').click(function(e){
		$("section").load("partials/"+$(this).attr('href'));
			e.preventDefault();
	});
});
