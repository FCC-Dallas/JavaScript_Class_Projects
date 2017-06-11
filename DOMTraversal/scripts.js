let fluffyBunny = document.querySelector('.paragraph');
let listUl = document.querySelector('ul');


fluffyBunny.addEventListener('mouseover', () => {
	//change it to uppercase
	fluffyBunny.textContent = fluffyBunny.textContent.toUpperCase();
});

fluffyBunny.addEventListener('mouseout', () => {
	//change it to lowercase
	fluffyBunny.textContent = fluffyBunny.textContent.toLowerCase();
});

listUl.addEventListener('click', (event)=>{
	//click the up button
	//move the list item up

	//we are targeting an element with the tagName as button
	if(event.target.tagName == 'BUTTON'){

		//if that targeted button has a class name of up select it
		if(event.target.className == 'up'){


			let li = event.target.parentNode;
			let prevLi = li.previousElementSibling;
			let ul = li.parentNode;
			ul.insertBefore(li, prevLi);
		}
		//bonus
		//click remove button
			//remove the list item selected

	}
});


