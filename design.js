window.onload = function() {
	new Effect.Fade('canvasTwo');
	var thumbs = $$("ul#btns li");
	for (var i = 0; i < thumbs.length; i++) {
		thumbs[i].onclick = changeImg;
	}
}

function changeImg (){	
	if ($("canvasOne").style.display == "none") {
		$('canvasOne').src = "images2/" + this.id + ".jpg";
		new Effect.Fade('canvasTwo', { duration: 1.3 });
		setTimeout(canvasOneAppear, 1500);		
	} 
	else {
		$('canvasTwo').src = "images2/" + this.id + ".jpg";
		new Effect.Fade('canvasOne', { duration: 1.3 });
		setTimeout(canvasTwoAppear, 1500);		
	}
}

function canvasOneAppear() {
	new Effect.Appear('canvasOne', { duration: 1.3 });	
}

function canvasTwoAppear() {
	new Effect.Appear('canvasTwo', { duration: 1.3 });	
}
