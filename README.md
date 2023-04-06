# CHALENGE

## Section 2
---
HTML Code
```
...
<div id="counter">
    <button id="btn-decrement" class="decrement" onclick="decreClick()">-</button>
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

## Section 3
---
HTML Code
```
...
<div id="counter">
    <button id="btn-decrement" class="decrement" onclick="decreClick()">-</button>
    ...
</div>
...
```

JS Code
```
...
let decreParent = document.querySelector('.decrement');
console.log('Parent dari class="decrement" adalah ',decreParent.parentNode);
...
```
---
HTML Code
```
...
<div id="counter">
</div>
...
```
JS Code
```
...
let div = document.getElementById('counter'); 
let divChild = div.firstChild.nodeName;
console.log('Child dari id="counter" adalah ',divChild);
...
```
---
HTML Code
```
...
<div id="counter">
    <button id="btn-decrement" class="decrement" onclick="decreClick()">-</button>
    ...
</div>
...
```
JS Code
```
...
let currentDecre = document.querySelector('.decrement');
let nextSibling = currentDecre.nextElementSibling;
console.log('Next sibling dari class="decrement" adalah ',nextSibling);
...
```
---

