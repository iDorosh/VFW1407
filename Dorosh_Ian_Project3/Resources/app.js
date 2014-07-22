Titanium.UI.setBackgroundColor('#000');


var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "photos");
var imageFiles = imagesFolder.getDirectoryListing();

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var rowCount = 4;
var margin = 10;
var trueCanvasWidth = pWidth-margin;
var size = trueCanvasWidth/rowCount-margin;


var mainWindow = Ti.UI.createWindow({
	title: "My Photos",
	backgroundColor: "#fff",
});

var openGalleryButton = Ti.UI.createView({
	backgroundColor: "000",
	opacity: .5,
	height: 60,
	width: 200,	
	borderRadius: 5,
	
});

var openGalleryText = Ti.UI.createLabel({
	text: "Open Gallery",
	color: "#fff",
});

openGalleryButton.addEventListener("click", function(open){
	navWindow.openWindow(galleryView);
});

openGalleryButton.add(openGalleryText);
mainWindow.add(openGalleryButton);





var galleryView = Ti.UI.createWindow({
	title: "Gallery",
	backgroundColor: "#fff",
	layout : "horizontal",
});


var viewContainer = Ti.UI.createScrollView({
	top:0,
	width: pWidth,
	backgroundColor :"#fff",
	layout: "horizontal",
	contentWidth: pWidth,
	height: pHeight,
	showVerticalScrollIndicator: true,
});





for(var i=0; i<imageFiles.length; i++){
	var view = Ti.UI.createView({
		backgroundColor: "#fff",
		top: margin,
		left: margin,
		width: size,
		height: size,
		borderRadius: 5,
	});
	
	var newImage = Ti.UI.createImageView({
		title: imageFiles[i],
		image: "photos/" + imageFiles[i],
		top: 0,
		width: view.width*2,
	});
	view.add(newImage);
	viewContainer.add(view);
};

viewContainer.addEventListener("click", function(event){
		photoView(event.source.title);
});





var photoView = function(data){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#fff",
		title: data,
	});
	

	var pictures = Ti.UI.createImageView({
		image: "photos/" + data,
		width: pWidth,
		enableZoomControls: true,
	});
	

	var closeWindow = function(){
		detailWindow.close();
	};
	
	navWindow.openWindow(detailWindow);
	
	detailWindow.add(pictures);
	detailWindow.open();
	
};


var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow,
});



galleryView.add(viewContainer);
navWindow.open();

 