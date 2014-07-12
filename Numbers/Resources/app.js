Titanium.UI.setBackgroundColor('#000');

var mainWindow = Ti.UI.createWindow({
	title: "My First App",
	backgroundColor: "#fff",
});

var mainView = Ti.UI.createView({
	backgroundColor: "#0f4559",
});


var playButton = Ti.UI.createView({
	backgroundColor: "#fff",
	top: 325,
	bottom: 195,
	left:100,
	right: 100,
	borderRadius: 4,
});

var playButtonBackground = Ti.UI.createView({
	backgroundColor: "#adadad",
	top: 325,
	bottom: 191,
	left:100,
	right: 100,
	borderRadius: 4,
});

var playButtonText = Ti.UI.createLabel({
	text: "Play",
	color: "#00c6ff",
	font: {fontSize: 24, fontFamily: "americantypewriter", fontweight: "light"}
});
	
var rate = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 35,
	width:80,
	left: 75,
	top: 390,
	borderRadius: 4,
});

var rateBackground = Ti.UI.createView({
	backgroundColor: "#adadad",
	height: 35,
	width:80,
	left: 75,
	top: 394,
	borderRadius: 4,
});

var topScores = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 35,
	width:80,
	right: 75,
	top: 390,
	borderRadius: 4,
});

var topScoresBackground = Ti.UI.createView({
	backgroundColor: "#adadad",
	height: 35,
	width:80,
	right: 75,
	top: 394,
	borderRadius: 4,
});

var rateText = Ti.UI.createLabel({
	text: "rate",
	color: "#ff6c00",
	font: {fontSize: 24, fontFamily: "Helvetica", fontWeight: "regular"}
});


var mathSign = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 70,
	top: 75,
	left:75,
	right: 75,
	borderRadius: 20,
});

var mathSignText = Ti.UI.createLabel({
	text: "1+1=2",
	color: "#0f4559",
	font: {fontSize: 42, fontFamily: "AmericanTypewriter", fontWeight: "light"}
});

var mathSignTriangle = Ti.UI.createLabel({
	text: "★",
	color: "#fff",
	top: 75,
	font: {fontSize: 100, fontFamily: "AmericanTypewriter", fontWeight: "light"}
});

var mathSignTriangle1 = Ti.UI.createLabel({
	text: "⏏",
	color: "#0f4559",
	top: 112,
	left: 125,
	font: {fontSize: 100, fontFamily: "AmericanTypewriter", fontWeight: "light"}
});

var mathSquare = Ti.UI.createView({
	backgroundColor: "#0f4559",
	height: 75,
	width: 75,
	top:112,
	left: 80,
});


var mainText = Ti.UI.createLabel({
	text: "Numbers",
	color: "#fff",
	Top: 175,
	font: {fontSize: 42, fontFamily: "AmericanTypewriter", fontWeight: "light"}
});

var deverloper = Ti.UI.createLabel({
	text: "© Ian Dorosh 2014",
	color: "#cfcfcf",
	bottom: 10,
	font: {fontSize: 12, fontFamily: "AmericanTypewriter", fontWeight: "light"}
	
});

var scoreIcon = Ti.UI.createView({
	backgroundColor: "#ff6c00",
	height: 20,
	width: 15,

});

var scoreIcon1 = Ti.UI.createView({
	backgroundColor: "#ff6c00",
	height: 10,
	width: 15,
	bottom: 7.5,
	left:18,
});

var scoreIcon2 = Ti.UI.createView({
	backgroundColor: "#ff6c00",
	height: 15,
	width: 15,
	bottom: 7.5,
	right:18,
});

var scoreText = Ti.UI.createLabel({
	text: "1",
	bottom: 7,
	color: "#fff",
	font: {fontSize: 14, fontFamily: "Helvetica", fontWeight: "bold"}
});

var vTransform = Ti.UI.create2DMatrix();
vTransform = vTransform.rotate(45);

var v = Ti.UI.createView({
	
	color: "#ff6c00",
	height: 30,
	width: 30,
 	transform: vTransform,
 	
});

var loadFile= require("numbers");
var loadfile = require("secondWindow");




mainWindow.add(mainView,mathSignTriangle, mathSignTriangle1, mathSquare, mathSign, playButtonBackground, playButton,rateBackground, rate,topScoresBackground, topScores, deverloper,mainText);
rate.add(rateText); 
topScores.add(scoreIcon, scoreIcon1, scoreIcon2, scoreText);
mathSign.add(mathSignText);
playButton.add(playButtonText);
mainWindow.open();

  