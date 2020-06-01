// 1.
let container1 = document.getElementById('container');

// 2.
let container2 = document.querySelector('section #container');

// 3.
let secondArr = document.querySelectorAll('.second');

// 4.
let onlyInOrdered = document.querySelectorAll('ol .third');

// 5.
// Commented out so line 31 will work
// container1.innerText = "Hello!";

// 6. 
let addMainClassToFooter = document.querySelectorAll("div.footer")[0];
addMainClassToFooter.classList.add("main");

// 7.
addMainClassToFooter.classList.remove("main");

// 8.
let newLi = document.createElement("li");

// 9. 
newLi.innerHTML = "four";

// 10.
(document.querySelector("ul")).appendChild(newLi);

// 11. ...

// 12.
let olLi = document.querySelectorAll('ol li');

for(let i = 0; i < olLi.length; ++i)
	olLi[i].style.backgroundColor = "green";

// 13. 	
document.querySelector("body").removeChild(addMainClassToFooter);

console.log(container1);
console.log(container2);
console.log(secondArr);
console.log(onlyInOrdered);
console.log(addMainClassToFooter);
console.log(newLi);