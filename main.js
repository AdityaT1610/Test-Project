
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

Avengers_image_width = 30;
Avengers_image_height = 30;

var player_object= "";
var Avengers_image_object= "";

function player_update()
{
	fabric.Image.fromURL("Cursor.jpg", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	Avengers_image_object = Img;

	Avengers_image_object.scaleToWidth(Avengers_image_width);
	Avengers_image_object.scaleToHeight(Avengers_image_height);
	Avengers_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(Avengers_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	Avengers_image_width = Avengers_image_width + 10;
	Avengers_image_height = Avengers_image_height + 10;
	document.getElementById("current_width").innerHTML = Avengers_image_width;
	document.getElementById("current_height").innerHTML = Avengers_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("p and shift pressed together");
	Avengers_image_width = Avengers_image_width - 10;
	Avengers_image_height = Avengers_image_height - 10;
	document.getElementById("current_width").innerHTML = Avengers_image_width;
	document.getElementById("current_height").innerHTML = Avengers_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '87')
	{
		new_image(''); 
		console.log("");
	}
	if(keyPressed == '71')
	{
		new_image(''); 
		console.log("");
	}
	if(keyPressed == '66')
	{
		new_image(''); 
		console.log("");
	}
	if(keyPressed == '84')
	{
		new_image(''); 
		console.log("");
	}
	if(keyPressed == '82')
	{
		new_image(''); 
		console.log("");
	}
	if(keyPressed == '89')
	{
		new_image(''); 
		console.log("");
	}
	if(keyPressed == '71')
	{
		new_image(''); 
		console.log("");
	}
	if(keyPressed == '68')
	{
		new_image(''); 
		console.log("");
	}
	if(keyPressed == '85')
	{
		new_image(''); 
		console.log("");
	}
	if(keyPressed == '67')
	{
		new_image(''); 
		console.log("");
	}
	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("Avengers image height = " + Avengers_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("Avengers image height = " + Avengers_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("Avengers image width = " + Avengers_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("Avengers image width  = " + Avengers_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
