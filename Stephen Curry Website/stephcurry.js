var myImage=document.getElementById("myPhoto");

var imageArray=["sc1.jpg","sc2.jpg","sc3.jpg","sc4.jpg"];

var imageIndex=0;

function changeImage () {
	myPhoto.setAttribute("src", imageArray [imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length) {
		imageIndex=0;
	}
}

var intervalHandle = setInterval(changeImage,1400);

myPhoto.onclick=function(){
	clearInterval(intervalHandle);
}