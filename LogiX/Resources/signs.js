var signsWindow = Ti.UI.createWindow({
	backgroundColor: "#023348", 
	statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
});

var signsView = Ti.UI.createView({
	backgroundColor: "#023348",
	top: 20,
	left: 5,
	bottom: 5,
	right: 5, 
});

var equatitonView = Ti.UI.createLabel({
	text: "2   5",
	color: "fff",
	font: {fontSize: "80%", fontFamily: "Helvetica", fontWeight: "light"},
});

var space = Ti.UI.createView({
	backgroundColor: "#023348",
	height: 75,
	width: 60, 
	borderRadius: 5,
});

var equationViewBackground2 = Ti.UI.createView({
	backgroundColor: "#898b8c",
	top: "7%",
	borderRadius: 4,
	width: "85%",
	height: "18.5%",
});

var equationViewBackground = Ti.UI.createView({
	backgroundColor: "#01b4ff",
	top: "7%",
	borderRadius: 4,
	width: "85%",
	height: "17.5%",
});

var equalsLabel = Ti.UI.createLabel({
	text: "=",
	color: "fff",
	top: "23%",
	font: {fontSize: "80%", fontFamily: "Helvetica", fontWeight: "light"},
});

var answerBackground = Ti.UI.createView({
	backgroundColor: "#01b4ff",
	borderRadius: 4,
	top: "44%",
	width: "42%",
	height: "17.7%",
});
var answerBackground2 = Ti.UI.createView({
	backgroundColor: "#898b8c",
	borderRadius: 4,
	top: "44.5%",
	width: "42%",
	height: "18%",
});


var answerLabel = Ti.UI.createLabel({
	text: "10",
	color: "fff",
	font: {fontSize: "80%", fontFamily: "Helvetica", fontWeight: "light"},
});




var plusButton = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: 5,
	height: 135,
	width: 135,
	left: 13,
	bottom: 20,
	
});

var plusLabel = Ti.UI.createLabel({
	text: "+",
	color: "#023348",
	top: -40,
	font: {fontSize: 155, fontFamily: "Helvetica", fontWeight: "light"},
});



var plusBackground = Ti.UI.createView({
	backgroundColor: "#898b8c",
	borderRadius: 5,
	height: 139,
	width: 135,
	left: 13,
	bottom: 16,
	
});

var multiplyButton = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: 5,
	height: 135,
	width: 135,
	right: 13,
	bottom: 20,
	
});

var multiplyLabel = Ti.UI.createLabel({
	text: "✕",
	color: "#023348",
	font: {fontSize: 120, fontFamily: "Helvetica", fontWeight: "light"},
});


var multiplyBackground = Ti.UI.createView({
	backgroundColor: "#898b8c",
	borderRadius: 5,
	height: 139,
	width: 135,
	right: 13,
	bottom: 16,
	
});

var scoreLabel = Ti.UI.createLabel({
	text: "24",
	color: "#fff",
	top: 20,
	right: 8,
	font: {fontSize: 22, fontFamily: "Helvetica", fontWeight: "bold"},
});

var pauseLabel = Ti.UI.createLabel({
	text: "||",
	color: "#fff",
	top: 20,
	left: 12,
	font: {fontSize: 22, fontFamily: "Helvetica", fontWeight: "bold"},
});

var correct = Titanium.Media.createSound({
	url: "sounds/tapright.wav",
	preload: true
});

var wrong = Titanium.Media.createSound({
	url: "sounds/tapwrong.wav",
	preload: true
});

var click = Titanium.Media.createSound({
	url: "sounds/click.wav",
	preload: true
});

pauseLabel.addEventListener("click", function() {
	click.play();
});

addmultiplyButton.addEventListener("click", function() {
	click.play();
});

plusButton.addEventListener("click", function() {
	wrong.play();
	
	var blurr = Ti.UI.createView({
		backgroundColor: "#000",
		opacity: .7,
	});
	
	var scoreSign = Ti.UI.createView({
		backgroundColor: "#fff",
		height: "30%",
		width: "90%",
		borderRadius: 5,
	});
	
	var scoreSign2 = Ti.UI.createView({
		backgroundColor: "#00b3fd",
		height: "32%",
		width: "94%",
		borderRadius: 5,
	});
	
	var mainMenu = Ti.UI.createView({
		backgroundColor: "#023348",
		height: "30%",
		width: "40%",
		borderRadius: 5,
		top: "60%",
		left: "8%",
	});
	
	var mainMenuLabel = Ti.UI.createLabel({
	text: "Menu",
	color: "fff",
	font: {fontSize: "25%", fontFamily: "Helvetica", fontWeight: "light"},
});

	mainMenu.addEventListener("click", function(openSigns){
	signsWindow.close({
		transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
	mainWindow.open();
	
});

mainMenu.addEventListener("click", function() {
	click.play();
});
	
	
	mainMenu.add(mainMenuLabel);
	scoreSign.add(mainMenu);
	signsWindow.add(blurr, scoreSign2, scoreSign);
});

multiplyButton.addEventListener("click", function() {
	correct.play();
});

addmultiplyButton.addEventListener("click", function(openSigns){
	signsWindow.open({
		transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
	
});

pauseLabel.addEventListener("click", function(openSigns){
	signsWindow.close({
		transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
	mainWindow.open();
});


answerBackground.add(answerLabel);
equationViewBackground.add(equatitonView, space);
multiplyButton.add(multiplyLabel);
plusButton.add(plusLabel);
signsView.add(equationViewBackground2, equationViewBackground, plusBackground, plusButton, multiplyBackground, multiplyButton, equalsLabel,answerBackground2, answerBackground);
signsWindow.add(signsView, scoreLabel, pauseLabel);