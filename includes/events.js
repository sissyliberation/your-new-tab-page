var isRemoved = true;

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("addLinkBtn").addEventListener('click',addLinkBtnHandler);
	document.getElementById("addingLink").addEventListener('click',addingLinkHandler);
	document.getElementById("removeLinkBtn").addEventListener('click',removeLinkBtnHandler);
	document.getElementById("removingLink").addEventListener('click',removingLinkHandler);
	document.getElementById("resetLinks").addEventListener('click',resetLinksHandler);
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

function addingLinkHandler(e) {
	e.preventDefault();
 	var name = $('.addNewLink input[placeholder="Name"]').val();
	var url = $('.addNewLink input[placeholder="URL"]').val();
	if(name!= "" && url != "") {
		if(url.substr(0,4) != "http") {
			url='http://'+url;
		}
		$('ul.links').append("<li><a href='"+url+"'>"+name+"</a></li>");
		// $.cookie(name,url);
		$('.addNewLink input[placeholder="Name"]').val('');
		$('.addNewLink input[placeholder="URL"]').val('');
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

function removingLinkHandler(e) {
	e.preventDefault();
	$('#whattodo').text('Click on one of the links below to remove it.');
	$('ul.links a').hover(
		function() {$(this).css("color","red");},
		function() {$(this).css("color","black");}
	);
	$('ul.links a').on("click",function(e){
		e.preventDefault();
		var tmp_txt = $(this).text();
		// $.removeCookie(tmp_txt);
		$(this).remove();
	});
}

function resetLinksHandler(e) {
	e.preventDefault();
	var sure = confirm("Are you sure you want to reset everything?");
	if(sure==true) {
		// $.removeCookie('user_saved', {path:'/'});
		// $.each($.cookie(), function(name, url) {
		// 	$.removeCookie(name);
		// });
		location.reload();
	}
}