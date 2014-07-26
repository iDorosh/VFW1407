Titanium.UI.setBackgroundColor('#000');


var mainWindow = Ti.UI.createWindow({
	title: "Cars",
	backgroundColor: "#3d3d3e",
});







var galleryButton = Ti.UI.createView({
	top: 0,
	backgroundColor: "128dff",
	height: 100,
});

var galleryText = Ti.UI.createLabel({
	text: "Gallery",
	color: "#fff",
	left: 30,
	font: {fontSize: 24, fontFamily: "Helvetica", fontWeight: "regular"},
});


galleryButton.addEventListener("click", function(open){
	navWindow.openWindow(galleryView);
});

galleryView = Ti.UI.createWindow({
	title: "Gallery",
	backgroundColor: "#fff",
});







var dataPageButton = Ti.UI.createView({
	top: galleryButton.top+galleryButton.height,
	backgroundColor: "0b5fad",
	height: 100,
});

var dataPageText = Ti.UI.createLabel({
	text: "Data",
	color: "#fff",
	left: 30,
	font: {fontSize: 24, fontFamily: "Helvetica", fontWeight: "regular"},
});

dataPageButton.addEventListener("click", function(open){
	navWindow.openWindow(dataView);
	
});

dataView = Ti.UI.createWindow({
	title: "Data",
	backgroundColor: "#fff",
});





var customizeButton = Ti.UI.createView({
	top: dataPageButton.top+dataPageButton.height,
	backgroundColor: "0c4375",
	height: 100,
});

var customizeButtonText = Ti.UI.createLabel({
	text: "Customize",
	color: "#fff",
	left: 30,
	font: {fontSize: 24, fontFamily: "Helvetica", fontWeight: "regular"},
});

customizeButton.addEventListener("click", function(open){
	navWindow.openWindow(customizeView);
});


customizeView = Ti.UI.createWindow({
	title: "Customize",
	backgroundColor: "#fff",
});



var mainWindowLabel = Ti.UI.createLabel({
	text: "1407 Ian Dorosh",
	color: "#fff",
	top: customizeButton.top+customizeButton.height+ 20,
	font: {fontSize: 12, fontFamily: "Helvetica", fontWeight: "light"},
});



var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow,
});

customizeButton.add(customizeButtonText);
dataPageButton.add(dataPageText);
galleryButton.add(galleryText);
mainWindow.add(galleryButton, dataPageButton, customizeButton, mainWindowLabel);
navWindow.open();