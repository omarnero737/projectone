const section = document.querySelector('.container');
const input = document.querySelector('input');
const button  = document.querySelector('button');
const img = document.createElement('img');
var count =0
img.className = 'mx-auto d-block img-thumbnail mt-4'
var char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
button.addEventListener('click', (e)=>{
    count = count+1;
    if(count>1){
        window.location.reload();
    }
    if(input.value >= 27){
        alert("enter number less than 26");
    }
    else{
for(var i= 1 ; i<=input.value; i++){
    const li = document.createElement('li');
li.className = 'list-group-item list-group-item-primary d-inline';
let x = Math.ceil(Math.random()*26);
li.appendChild(document.createTextNode(char[x-1]));section.appendChild(li);
li.addEventListener('click',(e) => {img.setAttribute('src',`pic/${char[x-1]}.jpg`); section.appendChild(img);
var time = e.timeStamp;
var type = e.type;
var traget = e.target;
var name = li.innerText;
const item = {name: name,time: time,type: type, target: traget,}
let items;
if(localStorage.getItem('items') === null) {
  items = [];} else {
  items = JSON.parse(localStorage.getItem('items'));}
items.push(item);
localStorage.setItem('items', JSON.stringify(items));
setTimeout(()=> {
    localStorage.removeItem('items');
},5000)
});
} 
    }
var time = e.timeStamp;
var type = e.type;
var traget = e.target;
const task = {time : time,type : type,target: traget}
let tasks;
if(localStorage.getItem('tasks') === null) {
  tasks = [];} else {
  tasks = JSON.parse(localStorage.getItem('tasks'));}
tasks.push(task);
localStorage.setItem('tasks', JSON.stringify(tasks));
setTimeout(()=>{
    // localStorage.clear();
    localStorage.removeItem('tasks');
 } , 5000)
});




