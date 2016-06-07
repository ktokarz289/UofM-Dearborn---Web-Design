
var time, totalMoves, nums, interval, lookup;
function checkBoard(){
	var expNum, notWon = 0;
	for(var i = 0; i<14;i++)
	{
		expNum = i+1;
		if(nums[i] != expNum)
		{
			notWon = 1;
		}
	}
	if(notWon == 0)
	{
		alert("You Won!!!!");
		endgame();
	}
}
function timer(){
	time += 1;
	document.getElementById("time").innerHTML = "Total time: " + time + " seconds";
}
function amtMoves(){
	totalMoves += 1;
	document.getElementById("moves").innerHTML = "Total moves: " + totalMoves;
}
function endgame(){
	window.clearInterval(interval);
	time=0; 		//Game over so reset time
	totalMoves = 0;
	document.getElementById("time").innerHTML = "Total time: " + 0 + " seconds";
	document.getElementById("moves").innerHTML = "Total moves: " + 0;
	for(var i=0;i<16;i++)
	{
		nums[i] = " ";
	}
	setupBoard();
}

function selBlock(col, row){
	var temp1,temp2,key2,temp3,loc;
	if(col > 1)
	{
		temp3 = col - 1;
		key = lookup[temp3][row];
		if(nums[key] == 0)
		{
			key2 = lookup[col][row];		//get the original value key
			temp = nums[key];				//get the value from array
			temp2 = nums[key2];				
			nums[key2] = temp;
			nums[key]  = temp2;
			loc = "col" + col + "row" + row;
			document.getElementById(loc).innerHTML = nums[key2];
			loc = "col" + temp3 + "row" + row;
			document.getElementById(loc).innerHTML = nums[key];
			amtMoves();
		}
	}
	if(row > 1)
	{
		temp3 = row - 1;
		key = lookup[col][row-1];
		if(nums[key] == 0)
		{
			key2 = lookup[col][row];		//get the original value key
			temp = nums[key];				//get the value from array
			temp2 = nums[key2];				
			nums[key2] = temp;
			nums[key]  = temp2;
			loc = "col" + col + "row" + row;
			document.getElementById(loc).innerHTML = nums[key2];
			loc = "col" + col + "row" + temp3;
			document.getElementById(loc).innerHTML = nums[key];
			amtMoves();
		}
	}
	if(col < 4)
	{
		temp3 = col + 1;
		key = lookup[col+1][row];
		if(nums[key] == 0)
		{
			key2 = lookup[col][row];		//get the original value key
			temp = nums[key];				//get the value from array
			temp2 = nums[key2];				
			nums[key2] = temp;
			nums[key]  = temp2;
			loc = "col" + col + "row" + row;
			document.getElementById(loc).innerHTML = nums[key2];
			loc = "col" + temp3 + "row" + row;
			document.getElementById(loc).innerHTML = nums[key];
			amtMoves();
		}
	}
	if(row < 4)
	{
		temp3 = row + 1;
		key = lookup[col][row+1];
		if(nums[key] == 0)
		{
			key2 = lookup[col][row];		//get the original value key
			temp = nums[key];				//get the value from array
			temp2 = nums[key2];				
			nums[key2] = temp;
			nums[key]  = temp2;
			loc = "col" + col + "row" + row;
			document.getElementById(loc).innerHTML = nums[key2];
			loc = "col" + col + "row" + temp3;
			document.getElementById(loc).innerHTML = nums[key];
			amtMoves();
		}
	}
	checkBoard();
}

function initizializeGame(){
	var found1;
	var key = 0;
    nums = new Array();
	var count = 0;
	while( count < 15 )
	{
		var ran = Math.floor(Math.random()*15);
		ran++;
		found1 = nums.indexOf(ran);					//attempt to find the value
		if ( found1 == -1 )							//if the value is not found added it
		{
			count++;
			nums.push(ran);
		}
	}
	lookup = new Array(5);
	for(var i=0;i<5;i++)
	{
		lookup[i] = new Array(5);
	}
	for(var i=1;i<5;i++)
	{
		for(var j=1;j<5;j++)
		{
			lookup[j][i] = key;
			key++;
		}
	}
	ran = Math.floor(Math.random()*15);
	found1 = nums[ran];
	nums[ran] = " ";
	nums.push(found1);
	totalMoves = 0;
	time = 0;
	document.getElementById("time").innerHTML = "Total time: " + time + " seconds";
	document.getElementById("moves").innerHTML = "Total moves: " + totalMoves;
	interval = window.setInterval("timer()",1000);
	setupBoard();
}

function simpleGame(){
	var found1;
	var key = 0;
    nums = new Array();
	var count = 0;
	
	lookup = new Array(5);
	for(var i=0;i<5;i++)
	{
		lookup[i] = new Array(5);
	}
	for(var i=1;i<5;i++)
	{
		for(var j=1;j<5;j++)
		{
			lookup[j][i] = key;
			key++;
		}
	}
	
	for(var j = 1; j<15; j++)
	{
		nums.push(j);
	}
	nums.push(0);
	nums.push(15);
	totalMoves = 0;
	time = 0;
	document.getElementById("time").innerHTML = "Total time: " + time + " seconds";
	document.getElementById("moves").innerHTML = "Total moves: " + totalMoves;
	interval = window.setInterval("timer()",1000);
	setupBoard();
}

function setupBoard(){
	document.getElementById("col1row1").innerHTML = nums[0];
	document.getElementById("col2row1").innerHTML = nums[1];
	document.getElementById("col3row1").innerHTML = nums[2];
	document.getElementById("col4row1").innerHTML = nums[3];
	document.getElementById("col1row2").innerHTML = nums[4];
	document.getElementById("col2row2").innerHTML = nums[5];
	document.getElementById("col3row2").innerHTML = nums[6];
	document.getElementById("col4row2").innerHTML = nums[7];
	document.getElementById("col1row3").innerHTML = nums[8];
	document.getElementById("col2row3").innerHTML = nums[9];
	document.getElementById("col3row3").innerHTML = nums[10];
	document.getElementById("col4row3").innerHTML = nums[11];
	document.getElementById("col1row4").innerHTML = nums[12];
	document.getElementById("col2row4").innerHTML = nums[13];
	document.getElementById("col3row4").innerHTML = nums[14];
	document.getElementById("col4row4").innerHTML = nums[15];
}