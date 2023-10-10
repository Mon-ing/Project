window.onload = pageLoad;

function pageLoad()
{
	var Button1 = document.getElementById("start");
	Button1.onclick = startGame;

}

function startGame()
{
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart()
{
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	
	timer = setInterval(timecount,TIMER_TICK);
	function timecount()
	{
		var Box = document.querySelectorAll("#game-layer div");
		x.innerHTML = second;
		if (second > 0 )
		{
			second -=1;
		}
		else
		{
			alert ("GAME OVER");
			clearScreen();
			clearInterval(timer);
			timer = null;
		}
		if (Box.length == 0)
		{
			alert("You Win!!!");
			clearInterval(timer);
			timer = null;
		}
	}

}
function addBox(){
	// สร้างกล่องตาม input ที่เราใส่

	var numbox = parseInt(document.getElementById('numbox').value);
	var gameLayer = document.getElementById('game-layer');
	var colorDrop = document.getElementById('color').value;


	for (var i =0; i<numbox;i++)
	{
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.classList.add(colorDrop)
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box)
{
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function()
	{
		box.paretNode.removeChild(box);
	}

}

function clearScreen()
{
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = decument.querySelectorAll("#game-layer div");

	//delete all  div
	for (var i=0;i<allbox.length;i++)
	{
		allbox[i].paretNode.removeChild(allbox[i]);
	}
}

