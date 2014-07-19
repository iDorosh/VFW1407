Titanium.UI.setBackgroundColor('#000');



var pWidth = Ti.UI.Platform.displayCaps.platformWidth;
var pHeight = Ti.UI.Platform.displayCaps.platformHeight;
var itemCount = 15;
var rowCount = 3;
var margin = 10;
var trueCanvasWidth = ;
var size = 

var mainWindow = Ti.UI.createWindow({
	title: "My First App",
	backgroundColor: "#fff",
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	width: pWidth,
	top: 20,
});

var viewContainer = Ti.UI.createView({
	width: pWidth,
	backgroundColor :"#fef",
});

for(var i=0; i<itemCount; i++){
	var view = Ti.UI.createView({
		backgroundColor: "#33ccff",
		top: margin,
		width: size,
		height: size
	});
}
mainWindow.add(viewContainer, border);
mainWindow.open();

 