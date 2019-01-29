let apple = {
	img: 'img/apple.png',
	chance: 25
};

let cherry = {
	img: 'img/cherry.png',
	chance: 25
};

let granate = {
	img: 'img/granate.png',
	chance: 20
};

let grapes = {
	img: 'img/grapes.png',
	chance: 10
};

let kiwi = {
	img: 'img/kiwi.png',
	chance: 30
};

let lemon = {
	img: 'img/lemon.png',
	chance: 19
};

let pear = {
	img: 'img/pear.png',
	chance: 15
};

let pineapple = {
	img: 'img/pineapple.png',
	chance: 17
};

let plum = {
	img: 'img/plum.png',
	chance: 19
};

let strawberry = {
	img: 'img/strawberry.png',
	chance: 9
};

let watermelon = {
	img: 'img/watermelon.png',
	chance: 1
};

let fruits = [apple, cherry, granate, grapes, kiwi, lemon, pear, pineapple, plum, strawberry, watermelon];
let slot1 = document.getElementById('slot1id');
let slot2 = document.getElementById('slot2id');
let slot3 = document.getElementById('slot3id');
let res1 = document.getElementById('res1-id');
let res2 = document.getElementById('res2-id');
let res3 = document.getElementById('res3-id');
let slots = [slot1, slot2, slot3];

for(let k = 0; k < slots.length; k++) {
	for (let i = 0; i < fruits.length; i++) {
		let image = new Image();
		image.src = fruits[i].img;
		slots[k].appendChild(image);
	};
};

function getRandomInt(min, max) {
	return Math.random() * (max - min) + min;
};

let startId = document.getElementById('start-id');
startId.addEventListener('click', slotMachineAll);

function slotMachineAll() {
	slotMachine(slot1, res1);
	slotMachine(slot2, res2);
	slotMachine(slot3, res3);
};

function slotMachine(slot, res) {
    let fruitsClone = fruits.slice(0);
		let timerId = setInterval(function() {
			let deleted = fruitsClone.pop();
			fruitsClone.unshift(deleted);
			let image = new Image();
			image.src = deleted.img;
			let theFirstChild = slot.firstChild;

			slot.insertBefore(image, theFirstChild);
			addAnimationSlot1();
			addAnimationSlot2();
			addAnimationSlot3();
	}, 200);

		setTimeout( function () {
			let mass = fruitsPicture;
			let number = getRandomInt(0, fruitsPicture[fruitsPicture.length - 1]);
			for (let  i = 0; i < mass.length; i++){
				if (number <= mass[i]){
					let randomImage = fruits[i];
					let timerRandom = setInterval( function () {
						if (randomImage.img === fruitsClone[2].img)  {
							clearInterval(timerRandom);
							clearInterval(timerId);
							console.log(slot.children[2]);
							let fruit = slot.children[2].cloneNode();
							fruit.style.top = 0 + 'px';
							res.innerHTML='';
							res.appendChild(fruit);
						}
					}, 100);
					break;
				}
			}
		}, 3000);
};

function addAnimationSlot1() {
	let elementImg = document.querySelectorAll(`#slot1id img`);
	let restest = -200;
	for (let i = 0; i < elementImg.length; i++) {
		restest += 100;
		elementImg[i].style.position = 'absolute';
		elementImg[i].style.top = restest + 'px';
		elementImg[i].style.left = 3 + 'px';
	}
};

function addAnimationSlot2() {
	let elementImg = document.querySelectorAll(`#slot2id img`);
	let restest = -200;
	for (let i = 0; i < elementImg.length; i++) {
		restest += 100;
		elementImg[i].style.position = 'absolute';
		elementImg[i].style.top = restest + 'px';
		elementImg[i].style.left = 3 + 'px';
	}
};

function addAnimationSlot3() {
	let elementImg = document.querySelectorAll(`#slot3id img`);
	let restest = -200;
	for (let i = 0; i < elementImg.length; i++) {
		restest += 100;
		elementImg[i].style.position = 'absolute';
		elementImg[i].style.top = restest + 'px';
		elementImg[i].style.left = 3 + 'px';
	}
};

let fruitsCoefficient = [0];
let fruitsPicture = [0];

function calcAll() {
	let summPercent = 0;
	for (let i = 0; i < fruits.length; i++) {
		summPercent += fruits[i].chance;
	}
	let coefficientDepend = summPercent / 100;
	let summLength = 0;
	for (let i = 0; i < fruits.length; i++) {
		res = coefficientDepend * fruits[i].chance;
		summLength += res;
		fruitsCoefficient.push(res);
	}

	let coefficientPercent = summLength / 100;

	for (let i = 0; i < fruits.length; i++) {
		result = coefficientPercent * fruits[i].chance;
		resultDepend = result / coefficientDepend;
		fruitsPicture.push(resultDepend);
	}

	for(let i = 1; i < fruitsPicture.length; i++) {
		resPush = fruitsPicture[i-1] + fruitsPicture [i];
		fruitsPicture.splice(i, 1, resPush);
	}
};

calcAll();

// test
// let testMass = [];
// calcAll();
// for (let i = 0; i < 10000; i++) {
//
// 	let mass = fruitsPicture;
//
// 	let number = getRandomInt(0, fruitsPicture[fruitsPicture.length - 1]);
// 	for (let k = 0; k < mass.length; k++) {
// 		if (number <= mass[k]) {
//
// 			let randomImage = fruits[k].img;
// 			testMass.push(randomImage);
// 			console.log(randomImage);
// 			break;
// 		}
//
// 	}