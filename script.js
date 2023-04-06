let btnDecre = document.getElementById("btn-decrement")
let btnIncre = document.getElementById("btn-increment")
let countNumb = document.getElementById("count-number")

let number = 0

function decreClick() {
	number--
	countNumb.innerText = number;
}

function increClick() {
	number++
	countNumb.innerText = number;
}
