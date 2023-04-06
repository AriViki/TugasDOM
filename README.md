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

## Section 4
---
HTML Code
```
...
<body>
	...
</body>
...
```

JS Code
```
...
console.log("Section 4");
let div4 = document.createElement('div4');
div4.id = 'counter';
div4.className = 'section4';
let text = document.createTextNode('Section4 create element');
div4.appendChild(text);
document.body.appendChild(div4);
...
```
---
HTML Code
```
...
<div id="counter">
	<h3 id="section2-header">Section 2</h3>
	<button id="btn-decrement" class="decrement" onclick="decreClick()">-</button>
	<span id="count-number">0</span>
	<button id="btn-increment" name="increment" onclick="increClick()">+</button>
</div>
...
```
JS Code
```
...
let innerHtmlDiv = document.getElementById('counter');
console.log(innerHtmlDiv.innerHTML);
...
```
---
HTML Code
```
...
<body>
	...
</body>
...
```
JS Code
```
...
const button = document.querySelector('div4');
button.firstChild.after('+++Section4 after()');
...
```
---