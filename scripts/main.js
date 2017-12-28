"use strict";

let containerSize = 364;
let backgroundColor = '#ffe6f2';
let size = 5;
initializeGrid(containerSize,size,backgroundColor); 

// clears grid when button 'clear' is pressed
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click',function (){
	initializeGrid(containerSize,size,backgroundColor);
});

// changes size of  grid (and clears it)
const changeSizeButton = document.querySelector('.size');
changeSizeButton.addEventListener('click',function (){
	do{
		size = prompt('Type amount of squares per row you want to be displayed');
	}
	while((size%1)!=0);
	initializeGrid(containerSize,size,backgroundColor);
});



// initializes new grid full of square divs with given measurment[px] ,
// amount of squares in row, and sets background color
function initializeGrid(measurment, size, color) {
	let pixels = measurment/size; // sets size of single div(both width and height)
	let container = document.querySelector('.container');
	container.innerHTML = ""; // clears previous container

	// sets size of container to that passed by 'measurement' argument
	container.style.cssText = `width: ${measurment}px; height: ${measurment}px; background-color:${color}`;

	for(let i=0; i<(size*size); i++) {
		let gridDiv = document.createElement('div');
		
		gridDiv.style.cssText = `box-sizing: border-box; display: inline-block; 
		width: ${pixels}px; height: ${pixels}px; background-color:${color}`;
		gridDiv.classList.add('grid-div');

		container.appendChild(gridDiv);
	}

	// changes background color of divs in grid when user moves mouse over them
	let gridDivs = document.querySelectorAll('.grid-div');
	gridDivs.forEach(function (gridDiv) {
		gridDiv.addEventListener('mouseover',function(){
	  	changeColor(gridDiv);
	  	});
	});
}

// changes background color of given div (color is randomized)
function changeColor(div) {
	let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';;
	div.style.backgroundColor = randomColor;
}
