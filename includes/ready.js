
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