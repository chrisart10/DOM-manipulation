// Excercise 1:
// Get list of div in live and static ways.
let divLiveList = document.getElementsByTagName('div');
let divStaticList = document.querySelectorAll('div');
console.log('Execercise 1:\n\n');
console.log('div Live List\n', divLiveList);
console.log('div Static List\n', divStaticList);
// Excercise 2: 
// Itarate list using forEach method in boths variable (divStaticList,divLiveList )
// hint: remember convert to array if is necesary.
const divLiveList_Array = Array.from(divLiveList);

console.log('Execercise 2:\n\n');
console.log('Iterating div Live List using For Each:');
divLiveList_Array.forEach(element => {
    console.log(element);
});
console.log('Iterating div Static List using For Each:');
divStaticList.forEach(element => {
    console.log(element);
});
// Excercise 3:
// Get element's child of live div list
console.log('Execercise 3:\n\n')
console.log('Iterating div Live List using For Each:');
divLiveList_Array.forEach(element => {
    console.log('Element\'s Child of div Static List\n', element.children);
});
// Get node's child of static div list
console.log('Iterating div Static List using For Each:');
divStaticList.forEach(element => {
    console.log('Node\'s Child of div Static List\n', element.childNodes);
});
// Excercise 4:
/* 
Part 1:
Create a new paragraph and append in every div before first paragraph using HTMLCollection
result: <p>before first paragraph</p>
*/
console.log('Excercise 4 Part 1:\n\n');
divLiveList_Array.forEach(div => {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'before first paragraph';
    div.insertBefore(paragraph, div.querySelector('p'));
});

/* 
Part 2:
Create a new paragraph and append in every div after last paragraph using NodeList
result: <p>after words...</p>
*/
console.log('Excercise 4 Part 2:\n\n');
divStaticList.forEach(div => {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'after last paragraph';
    div.appendChild(paragraph, div.querySelector('p'));
});

// Excercise 5:
// Add ":" to the phrase some definition.
// for example some definition => some definition:

divStaticList.forEach(div =>{
    div.childNodes[4].textContent += ":";
});

// Excercise 6:
// change background of every div

divStaticList.forEach(div=>{
    div.style.backgroundColor = '#ced3db';
    div.style.border = '2px dashed black';
})

// Excercise 7: 
// Change text decoration of Header
const header = document.querySelector('header');
header.style.textDecoration = 'underline dotted #99a6d1 5px';
// Change background, override message of footer with 'I\'m a master of The DOM', Add 20px of padding 
const footer = document.querySelector('footer');
footer.textContent = 'I\'m a master of The DOM';
footer.style.backgroundColor = '#273975';
footer.style.color = '#ffffff';
footer.style.padding = '20px';