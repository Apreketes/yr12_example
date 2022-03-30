function myfunction() {
	var x = 1024;
	var y = 9999;
	var deg = Math.floor(Math.random() * (x - y)) + y; 
	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
		var valueList = ["10","20","50","100","150","200","400","500",];
		var getValue = valueList[Math.floor(Math.random() * valueList.length)];
		// alert(getValue); 
	}, 5000);
}