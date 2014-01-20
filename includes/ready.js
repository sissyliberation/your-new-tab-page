
$(document).ready(function(){

	// this is if you are using it for the first time
	// if($.cookie('user_saved')!="true") { 
	// 	$.cookie('user_saved','true', {expires:365});
	// 	$.cookie("Gmail","http://mail.google.com", {expires:365});
	// 	$.cookie("Facebook","http://facebook.com", "Facebook", {expires:365});
	// 	$.cookie("Twitter","http://twitter.com", "Twitter", {expires:365});
	// }

	// initializing conditions here

	$('.options').hide();

	//display links here
	// $.each($.cookie(), function(name, url) {
	// 	if(name!='user_saved') {
	// 		$('.links').append("<li><a href='"+url+"'>"+name+"</a></li>");	
	// 	}
	// });




	$('#addingLink').on("click",function(e){
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
	});


	$('#removingLink').on( "click", function() {
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
	});
	
	// reset everything
	$('#resetLinks').on("click",function() {
		var sure = confirm("Are you sure you want to reset everything?");
		if(sure==true) {
			// $.removeCookie('user_saved', {path:'/'});
			// $.each($.cookie(), function(name, url) {
			// 	$.removeCookie(name);
			// });
			location.reload();
		}
	});
	

	// date stuff
	var weekday=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var months = ["January","February","March","April","May","June","July",
				"August","September","October","November","December"];
	var d = new Date();
	$('.date').text(weekday[d.getDay()]+", "+months[d.getMonth()]+ " "+d.getDate()+", "+d.getFullYear());
	// setInterval(function(){
	// 	d = new Date();
	// 	var seconds = d.getSeconds();
	// 	var minutes = d.getMinutes();
	// 	if(seconds < 10) {
	// 		seconds = "0"+seconds;
	// 	}
	// 	if(minutes < 10) {
	// 		minutes = "0"+minutes;
	// 	}
	// 	$('.time').text(d.getHours()+":"+minutes+":"+seconds);
	// },1000);
});