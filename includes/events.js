var isRemoved = true;

document.addEventListener('DOMContentLoaded', function () {
 	document.getElementById("addLinkBtn").addEventListener('click',addLinkBtnHandler);
 	document.getElementById("removeLinkBtn").addEventListener('click',removeLinkBtnHandler);
}); 


function addLinkBtnHandler(e) {
	e.preventDefault();
 	if($('#newLink').is(':visible')) {
		$('.options').hide();
	}
	else if( $('#removeLink').is(':visible') || $('.options').is(':hidden') ){
		$('.options').show();
		$('#newLink').show();
		$('#removeLink').hide();	
	}
}

function removeLinkBtnHandler(e) {
	e.preventDefault();
	if( $('#newLink').is(':visible') || $('.options').is(':hidden')  ) {
		$('.options').show();
		$('#newLink').hide();
		$('#removeLink').show();
		$('#whattodo').text('');
	}
	else {
		$('.options').hide();
	}
	$('ul.links a:hover').css("color","#ccc");
	isRemoved = !isRemoved;
	if(isRemoved) {
		$('ul.links a').hover(
			function() {$(this).css("color","#ccc");},
			function() {$(this).css("color","black");}
		);
	}
}
