var part1 = document.getElementById('part1');
var button1 = document.getElementById('button1');
var oneVid = document.getElementById('oneVid');
var part2 = document.getElementById('part2')
var button2 = document.getElementById('button2');
var twoVid = document.getElementById('twoVid');
var part3 = document.getElementById('part3');
var button3 = document.getElementById('button3');
var threeVid = document.getElementById('threeVid');
var buttonHolder = document.getElementById('buttonHolder');
/***************************************************************/

$('part1','part2','part3',document).ready(function(){
	buttonHolder.style.display = 'flex';
});


function One(){
	part2.style.display = 'none';
	part1.style.display = 'block';
	button1.style.backgroundColor = 'red';
	button2.style.backgroundColor = 'black';
	part3.style.display = 'none';
	button3.style.backgroundColor = 'black';
	twoVid.src = 'https://drive.google.com/file/d/15_4ZMZK0p7sSB8Wc1hKgXCXIiA--05px/preview';
	threeVid.src = 'https://drive.google.com/file/d/1VnykA_q-A5RkJBapiQtiDXv3pjWG26G-/preview'
}

function Two(){
	part1.style.display = 'none';
	button1.style.backgroundColor = 'black';
	part2.style.display = 'block';
	button2.style.backgroundColor = 'red';
	part3.style.display = 'none';
	button3.style.backgroundColor = 'black';
	oneVid.src = 'https://drive.google.com/file/d/1nvFYVh6NsEHIIjkZZKWNMRhG5bWqa4Zs/preview';
	threeVid.src = 'https://drive.google.com/file/d/1VnykA_q-A5RkJBapiQtiDXv3pjWG26G-/preview'
}

function Three(){
	part1.style.display = 'none';
	button1.style.backgroundColor = 'black';
	part2.style.display = 'none';
	button2.style.backgroundColor = 'black';
	part3.style.display = 'block';
	button3.style.backgroundColor = 'red';
	oneVid.src = 'https://drive.google.com/file/d/1nvFYVh6NsEHIIjkZZKWNMRhG5bWqa4Zs/preview';
	twoVid.src = 'https://drive.google.com/file/d/15_4ZMZK0p7sSB8Wc1hKgXCXIiA--05px/preview';
}


button1.click();
