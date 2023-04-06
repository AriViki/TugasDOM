// Section 2
let btnDecre = document.getElementById("btn-decrement")
let btnIncre = document.getElementsByName("increment")
let countNumb = document.getElementById("count-number")

let number = 0
console.log("Section 2");
let headings = document.getElementsByTagName('h3');
console.log('ditemukan tag h3 sebanyak : ',headings.length);

function decreClick() {
	number--
	countNumb.innerText = number;
}

function increClick() {
	number++
	countNumb.innerText = number;
}

// Section 3
console.log("Section 3");
let decreParent = document.querySelector('.decrement');
console.log('Parent dari class="decrement" adalah ',decreParent.parentNode);

let div = document.getElementById('counter'); 
let divChild = div.firstChild.nodeName;
console.log('Child dari id="counter" adalah ',divChild);

let currentDecre = document.querySelector('.decrement');
let nextSibling = currentDecre.nextElementSibling;
console.log('Next sibling dari class="decrement" adalah ',nextSibling);

