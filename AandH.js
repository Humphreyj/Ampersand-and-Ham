
function openNav(){
	document.getElementById('sideBar').style.width='250px';
}

function closeNav() {
	document.getElementById('sideBar').style.width='0';
}

function toggleAbout() {
	var displaySetting = document.getElementById('aboutContent').style.display;
	var target = document.getElementById('aboutContent');

	if(displaySetting=='block') {
		target.style.display='none';

	}else {
		target.style.display='block';
	}
}

function toggleMenu() {
	var displaySetting = document.getElementById('menuContent').style.display;
	var target = document.getElementById('menuContent');

	if(displaySetting=='block') {
		target.style.display='none';

	}else {
		target.style.display='block';
	}
}

function toggleHours() {
	var displaySetting = document.getElementById('hoursContent').style.display;
	var target = document.getElementById('hoursContent');

	if(displaySetting=='block') {
		target.style.display='none';

	}else {
		target.style.display='block';
	}
}

function toggleJoin() {
	var displaySetting = document.getElementById('joinContent').style.display;
	var target = document.getElementById('joinContent');

	if(displaySetting=='block') {
		target.style.display='none';

	}else {
		target.style.display='block';
	}
}




