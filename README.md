# CHALENGE

## Section 2
---
HTML Code
```
...
<div id="counter">
    <button id="btn-decrement" onclick="decreClick()">-</button>
    ...
</div>
...
```

JS Code
```
...
let btnDecre = document.getElementById("btn-decrement")
...
```
---
HTML Code
```
...
<div id="counter">
    ...
	<button id="btn-increment" name="increment" onclick="increClick()">+</button>
</div>
...
```
JS Code
```
...
let btnIncre = document.getElementsByName("increment")
...
```
---
HTML Code
```
...
<div id="counter">
	<h3 id="section2-header">Section 2</h3>
	...
</div>
...
```
JS Code
```
...
let headings = document.getElementsByTagName('h3');
console.log('ditemukan tag h3 sebanyak : ',headings.length);
...
```
---

