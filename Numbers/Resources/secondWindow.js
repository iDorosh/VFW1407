Titanium.UI.setBackgroundColor('#000');

var secondWindow = Ti.UI.createWindow({
	title: "My First App",
	backgroundColor: "#04c797",
});

var equation1Text = Ti.UI.createLabel({
	text: "3+3",
	color: "#fff",
	Top: 125,
	font: {fontSize: 84, fontFamily: "Helvetica", fontWeight: "bold"}
});

var eauation1AnswerText = Ti.UI.createLabel({
	text: "= 6",
	color: "#fff",
	top: 250,
	font: {fontSize: 84, fontFamily: "Helvetica", fontWeight: "bold"}
});

var check = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 135,
	width:135,
	left: 20,
	bottom: 20,
	borderRadius: 4,
});

var checkMark = Ti.UI.createLabel({
	text: "✔︎",
	color: "#00a8ff",
	font: {fontSize: 150, fontFamily: "GillSans", fontWeight: "bold"}
});


var x = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 135,
	width:135,
	right: 20,
	bottom: 20,
	borderRadius: 4,
});

var xMark = Ti.UI.createLabel({
	text: "✘",
	color: "#de0102",
	font: {fontSize: 120, fontFamily: "GillSans", fontWeight: "bold"}
});

var checkBackground = Ti.UI.createView({
	backgroundColor: "#adadad",
	height: 135,
	width:135,
	left: 20,
	bottom: 16,
	borderRadius: 4,
});

var xBackground = Ti.UI.createView({
	backgroundColor: "#adadad",
	height: 135,
	width:135,
	right: 20,
	bottom: 16,
	borderRadius: 4,

});

var scoreText = Ti.UI.createLabel({
	text: "0",
	color: "#fff",
	top: 22,
	right: 10,
	font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"}
});







var timerLine = Ti.UI.createView({
	color: "#fff",
	height: 60,
	top:40,
});

var xBackground1 = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 1,
	top: 20,
});

var play = function(){
	secondWindow.open();
};



playButton.addEventListener("click", play);

secondWindow.add(equation1Text, eauation1AnswerText, scoreText, checkBackground, check, xBackground, x,xBackground1, timerLine);

check.add(checkMark);
x.add(xMark);


//second Cscreen)

var secondView = Ti.UI.createView({
	backgroundColor: "#fb9a00",
});

var equation2Text = Ti.UI.createLabel({
	text: "8+2",
	color: "#fff",
	Top: 125,
	font: {fontSize: 84, fontFamily: "Helvetica", fontWeight: "bold"}
});

var eauation2AnswerText = Ti.UI.createLabel({
	text: "= 10",
	color: "#fff",
	top: 250,
	font: {fontSize: 84, fontFamily: "Helvetica", fontWeight: "bold"}
});

var xBackground1 = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 1,
	
	top: 20,
});
check.addEventListener("click", function(e){
	
	var timer = Ti.UI.createAnimation({
		right:600,
		duration: 2000,
	});

	xBackground1.animate(timer);
});
	
var play = function(){
	secondWindow.open();
};


secondView.add(equation2Text, eauation2AnswerText, scoreText, checkBackground, check, xBackground, x,xBackground1, timerLine);

var click = function(){
	secondWindow.add(secondView);
};

checkMark.addEventListener("click", click);


