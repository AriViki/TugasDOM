let btnDecre = document.getElementById("btn-decrement")
let btnIncre = document.getElementsByName("increment")
let countNumb = document.getElementById("count-number")

let number = 0
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
