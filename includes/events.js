var isRemoved = true;

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("addLinkBtn").addEventListener('click',addLinkBtnHandler);
	document.getElementById("addingLink").addEventListener('click',addingLinkHandler);
	document.getElementById("removeLinkBtn").addEventListener('click',removeLinkBtnHandler);
	document.getElementById("removingLink").addEventListener('click',removingLinkHandler);
	document.getElementById("resetLinks").addEventListener('click',resetLinksHandler);
	document.getElementById("settingsBtn").addEventListener('click',settingsBtnHandler);
	document.getElementById("changingFontColor").addEventListener('click',changingFontColorHandler);
	document.getElementById("changingBackgroundColor").addEventListener('click',changingBackgroundColorHandler);
}); 

function addLinkBtnHandler(e) {
	e.preventDefault();
 	if($('#newLink').is(':visible')) {
		$('.options').hide();
	}
	else if( $('#removeLink').is(':visible') || $('#settingsLink').is(':visible') || $('.options').is(':hidden') ){
		$('.options').show();
		$('#newLink').show();
		$('#removeLink').hide();
		$('#settingsLink').hide();
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
		localStorage.setItem(name,url);
		$('.addNewLink input[placeholder="Name"]').val('');
		$('.addNewLink input[placeholder="URL"]').val('');
	}
}

function removeLinkBtnHandler(e) {
	e.preventDefault();
	if( $('#newLink').is(':visible') || $('#settingsLink').is(':visible') || $('.options').is(':hidden')  ) {
		$('.options').show();
		$('#newLink').hide();
		$('#settingsLink').hide();
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
		function() {
			if(localStorage.getItem("font-color")) {
				$(this).css("color",localStorage.getItem("font-color"));
			}
			else {
				$(this).css("color","black");
			}
		}
	);
	$('ul.links a').on("click",function(e){
		e.preventDefault();
		var tmp_txt = $(this).text();
		localStorage.removeItem(tmp_txt);
		$(this).remove();
	});
}

function resetLinksHandler(e) {
	e.preventDefault();
	console.log('this is it');
	var sure = confirm("Are you sure you want to reset everything?");
	if(sure==true) {
		localStorage.clear();
		location.reload();
	}
}

function settingsBtnHandler(e) {
	e.preventDefault();
 	if($('#settingsLink').is(':visible')) {
		$('.options').hide();
	}
	else if( $('#newLink').is(':visible') || $('#removeLink').is(':visible') || $('.options').is(':hidden') ){
		$('.options').show();
		$('#settingsLink').show();
		$('#removeLink').hide();	
		$('#newLink').hide();	
	}
	else {
		alert('hi');
	}
}

function changingFontColorHandler(e) {
	e.preventDefault();
	var color = $('.changeFontColor input[placeholder="font color"]').val();
	if(color != "") {
		localStorage.setItem("font-color",color);
		$('.changeFontColor input[placeholder="font color"]').val('');
	}
	location.reload();
}

function changingBackgroundColorHandler(e) {
	e.preventDefault();
	var color = $('.changeBackgroundColor input[placeholder="background color"]').val();
	if(color != "") {
		localStorage.setItem("background-color",color);
		$('.changeBackgroundColor input[placeholder="background color"]').val('');
	}
	location.reload();
}