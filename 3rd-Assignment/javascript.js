//Image Slideshow
var index = 0;
carousel();

function carousel() {
	var i;
	var slides = document.getElementsByClassName("slideshow-image");
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	index++;
	
	if (index > slides.length) {index = 1}    

	slides[index-1].style.display = "block";  
	
	// Change image every 3 seconds
	setTimeout(carousel, 3000); 
}

//Text Editing
//Is the user is currently editing a paragraph
var editing  = false;

//Create Ready button
var butt = document.createElement('BUTTON');
var buttext = document.createTextNode('Ready!');

//Show text
butt.appendChild(buttext);
butt.onclick = saveEdit;

function catchIt(e) {
	//if editiing, end the function
	if (editing) return;
	if (!document.getElementById || !document.createElement) return;
	// Find target
	if (!e) var obj = window.event.srcElement;
	else var obj = e.target;

	while (obj.nodeType != 1) {
		obj = obj.parentNode;
	}
	// only work on text, not links
	if (obj.tagName == 'TEXTAREA' || obj.tagName == 'A') return;
	// set ancestor node of whatever text we click on
	while (obj.nodeName != 'P' && obj.nodeName != 'HTML') {
		obj = obj.parentNode;
	}
	// if clicked object is not text- do nothing
	if (obj.nodeName == 'HTML') return;

	//store paragraph text
	var x = obj.innerHTML;
	//create TEXTAREA
	var y = document.createElement('TEXTAREA');
	//take parent node
	var z = obj.parentNode;

	// put TEXTAREA in before paragraph 
	z.insertBefore(y,obj);
	// same with button2
	z.insertBefore(butt,obj);
	// remove paragraph
	z.removeChild(obj);
	// put in text to TEXTAREA
	y.value = x;
	y.focus();

	editing = true;
}

function saveEdit() {
	// get the text from TEXTAREA
	var area = document.getElementsByTagName('TEXTAREA')[0];
	// create new paragraph
	var y = document.createElement('P');
	var z = area.parentNode;
	// put TEXTAREA text into new paragraph
	y.innerHTML = area.value;
	// apply previous css to new text
	y.className = "bodytext";
	// put paragraph in
	z.insertBefore(y,area);
	// take out TEXTAREA
	z.removeChild(area);
	// remove button
	z.removeChild(document.getElementsByTagName('button')[0]);
	// done editing!
	editing = false;
}

document.onclick = catchIt;

//Image Tiles
function resetAllTiles() {
	var tiles = document.getElementsByClassName("tile-border");

	for(let i=0; i < tiles.length; i++) {
		tiles[i].style.display = "inline-block";
	}
}

function clearAllTiles() {
	var tiles = document.getElementsByClassName("tile-border");

	for(let i=0; i < tiles.length; i++) {
		tiles[i].style.display = "none";
	}
}

function clearTile(elem) {
	elem.style.display = "none";
}