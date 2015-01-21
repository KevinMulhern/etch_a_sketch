
$(document).ready(function() {
		createGrid(16)
		randColor()


	$('.btn-clear').click(function(event){
		 event.preventDefault()
		$('.grid').empty();
		var input = prompt("How many rows do you want in the grid?");
		console.log(input);
		createGrid(input);
	});

	$(".square").hover(function(){
			$(this).addClass('black');
			console.log('hovering')
		});

	$('.rainbow').click(function(event){
	event.preventDefault();
	$('.square').hover(function(){
		$(this).css('background-color', randColor());
	});
});


});



function createGrid(size) {
		var numRows = size;
		var numCols = size;

		//Create the rows

		// First set thier width and height
		var rowHeight = parseFloat($('.grid').height() / numRows);
		var rowWidth = parseFloat($('.grid').width());

		//Create the rows:
		for (var i = 0; i < numRows; i++) {
			$('<div class="row"> </div>').appendTo('.grid').height(rowHeight).width(rowWidth);
		};

		// create the squares
		for (var i = 0; i < numCols; i++) {
			$('<div class="square"> </div>').appendTo('.row')
		};

		// find the height and width of te squares
		var squareWidth = rowWidth / numCols;
		var squareHeight = rowHeight;

		$('.square').width(squareWidth)
		$('.square').height(squareHeight)

		//the hover effect.
		$(".square").mouseover(function(){
			$(this).css('background-color', '#000')
		});



};

function randColor(){
	var col = '#'
	var ColArray = ['1','2','3','4','5','6','7','8','9','0', 'A','B', 'C', 'D', 'E', 'F']
	for (var i = 0; i < 6; i++){
		col += ColArray[Math.floor(Math.random()*15)]
		console.log(col)
	}
	return col;
	console.log(col)
};

$('.rainbow').click(function(event){
	event.preventDefault;
		$('.square').hover(function(){
			$(this).css('background-color', randColor());
		});
});













	










