var answersWindow = Ti.UI.createWindow({
	backgroundColor: "#01b4ff", 
	statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
});

var signsView = Ti.UI.createView({
	backgroundColor: "#01b4ff",
	top: 20,
	left: 5,
	bottom: 5,
	right: 5, 
});

var equatitonView = Ti.UI.createLabel({
	text: "2✕3",
	color: "fff",
	font: {fontSize: "80%", fontFamily: "Helvetica", fontWeight: "light"},
});


var equationViewBackground2 = Ti.UI.createView({
	backgroundColor: "#898b8c",
	top: "7%",
	borderRadius: 4,
	width: "85%",
	height: "18.5%",
});

var equationViewBackground = Ti.UI.createView({
	backgroundColor: "#023348",
	top: "7%",
	borderRadius: 4,
	width: "85%",
	height: "17.7%",
});

var equalsLabel = Ti.UI.createLabel({
	text: "=",
	color: "fff",
	top: "23%",
	font: {fontSize: "80%", fontFamily: "Helvetica", fontWeight: "light"},
});

var answerBackground = Ti.UI.createView({
	backgroundColor: "#023348",
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
	text: "?",
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
	text: "6",
	color: "#01b4ff",
	font: {fontSize: 120, fontFamily: "Helvetica", fontWeight: "light"},
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
	text: "5",
	color: "#01b4ff",
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

twonumbersButton.addEventListener("click", function() {
	click.play();
});

plusButton.addEventListener("click", function() {
	correct.play();
});

multiplyButton.addEventListener("click", function() {
	wrong.play();
});

twonumbersButton.addEventListener("click", function(openSigns){
	answersWindow.open({
		transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
	
});

pauseLabel.addEventListener("click", function(openSigns){
	answersWindow.close({
		transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
	mainWindow.open();
});


answerBackground.add(answerLabel);
equationViewBackground.add(equatitonView);
multiplyButton.add(multiplyLabel);
plusButton.add(plusLabel);
signsView.add(equationViewBackground2, equationViewBackground, plusBackground, plusButton, multiplyBackground, multiplyButton, equalsLabel,answerBackground2, answerBackground);
answersWindow.add(signsView, scoreLabel, pauseLabel);
