console.log(`Line::01----> ${document.links}`);
console.log(`Line::02----> ${document.baseURI}`);
let titleEle = document.getElementById('title');
console.log(`Line::03----> ${titleEle.id}`);
console.log(`Line::04----> ${titleEle.className}`);
console.log(`Line::05----> ${titleEle.getAttribute('id')}`);
console.log(`Line::06----> ${titleEle.getAttribute('class')}`);
titleEle.setAttribute('class','test');
console.log(`Line::07----> ${titleEle.getAttribute('class')}`);
titleEle.setAttribute('class','heading test');
console.log(`Line::08----> ${titleEle.getAttribute('class')}`);
console.log(`Line::09----> ${titleEle.classList}`);
console.log(`Line::09----> ${titleEle.innerText}`);  
//  Note:- innerText return only text of element which is displayed on UI

console.log(`Line::09----> ${titleEle.innerHTML}`); 
//  Note:- innerHTML is not the same as innerText. innerHTML includes HTML tags, while innerText does not.

console.log(`Line::09----> ${titleEle.textContent}`);
//  Note:- textContent is similar to innerText, but it also includes the text of child elements. 
//         wheater the child elements are visible or not.
 
let ulEle = document.querySelector('li');
ulEle.style.backgroundColor = 'gray'
ulEle.style.color = 'white';
ulEle.style.padding = '3px';
console.log('Line::10----> ',ulEle);
console.log(`Line::11----> ${ulEle.tagName}`);

let listItems = document.querySelectorAll('.list-items');
console.log('Line::12----> ',listItems);
listItems.forEach(item => {
    item.style.backgroundColor = 'green';
    item.style.color = 'white';
    item.style.padding = '3px';
});

let listItems2 = document.getElementsByClassName('list-items');
console.log('Line::13----> ', listItems2);

/*
NodeList--> NodeList is a Array like object which is returned by querySelectorAll() method.
            It is a collection of nodes. It can be iterate means forEach works with this. If you check in browser console.
        
HTML Collection--> HTMLCollection is a Array like object which is returned by getElementsByClassName() method.
                   It is a collection of elements.
                   It can not be iterate means forEach does not work with this. If you check in browser console.
*/
let listItems3 = Array.from(listItems2); // convert HTMLCollection to Array
listItems3.forEach(item => {
    item.style.backgroundColor = 'red';
    item.style.color = 'white';
    item.style.padding = '3px';
})
console.log('Line::14----> ', listItems3); 