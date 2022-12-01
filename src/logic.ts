// Code logic and syntax

/********************************
|	1. Variables and functions	|
*********************************/

// do not use var because it can leak out of scopes!
var notGood: any;
// let does not have this promblem
let muchBetter: number | string;
// with let you can re-assign values
muchBetter = 123;

muchBetter = "sfsdfsf";

// but const cannot because it should hold its value constant
const superSafe = "asdasd";

// this will fail:
/* superSafe = "hmm"; */


let obj: Person = {
	name: "piet",
	age: 77,
	species: "fish",
	gender: 1
};

// define the object types just like a normal JS object but then define each properties type.
type Person = {
	name: string;
	age: number;
	gender: 2 | 1;
	species: "human" | "fish" | "reptile";
};

// A function that gets a string as input and outputs a Person object
function test(name: string): Person
{
	return {
		name: name,
		age: 77,
		species: "fish",
		gender: 1
	};
}

// arrow function (almost the same as above)
// the only difference is what the `this` keyword does.
const test2 = (name: string): Person => 
{
	return {
		name: name,
		age: 77,
		species: "fish",
		gender: 1
	};
}

class Person2
{
	public name: string;
	public age: number;

	public constructor(name: string, age: number)
	{
		this.name = name;
		this.age = age;
	}
}

const p = new Person2("asdasd", 123);

// The `this` keyword is a little bit more complex in the way that its behaviour is different when used in a Function, a class or in some scope...
// Check out this link to learn about the `this` keyword https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this  


/*****************************
|	2. Arrays and loops      |
******************************/
// humans:   				 1  2  3  4  5  6  7  8  9  10   11	   12   13
const arr = 				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "asd", {}, true];
// pc: offset from start:    0  1  2  3  4  5  6  7  8  9    10    11   12

const arr2: string[] = ["asdas", "asdsd", "Asdsd"];

// off by one errors: an array with 3 items (array.length === 3)
// then when trying to access the last item `array[array.length]` 
// sees as offset 3 from the first spot so the 4th value in the array
// and that value does not exists so this is called an "off by one error"
// because really the only solution is `array[array.length - 1]` (Note the `- 1`);


// standard for loop
for (let offset = 0; offset < arr.length; offset++)
{
	// give me the value where the offset points to from the arr Array
	let val = arr[offset];
}

//object always have key and value
const obj2: { [key: string]: number } = {
	a: 123,
	b: 123,
	c: 123
};

/*
{
	key: value,
	key: value,
	...
}
*/


// for ... in ... gives back all the keys in the object/array (for arrays it will be 0, 1, 2, .... )
for (let key in obj2)
{
	console.log(obj2[key]);
}

// for ... of ... gives back all the avlues in the object/array
for (let value of arr2)
{
	console.log(value);
}

let isDone: boolean = false;
let i = 0;

while (!isDone)
{
	if (i++ > 100)
		isDone = true;
}



/********************************
|	3. Scope and Namespaces		|
********************************/
{
	{
		{
			{

			}
		}
	}
}


namespace Engine
{
	export class Game 
	{
		public constructor()
		{
			// the Core and Renderer class live inside the same namespace so we can access them from here
			new Core();
			new Renderer();
		}
	};

	// Since the Engine and Game classes are exported we can also use them outside the namespace
	export class Engine { };


	// But non exported are protected and hidden from the outside world (outside the namespace Engine)
	class Core { };
	class Renderer { };
	class Physics { };

}

const engine = new Engine.Engine();
const game = new Engine.Game();

// const renderer = Engine.Renderer(); // This errors because Renderer is not exported from the Engine namespace


/*********************************************
*	4. Callbacks and Async code (Promises)	 | 
*********************************************/
// a callback is basicly a function which will be called later by something else
// for example event listeners will call your functions when the event happen.
window.addEventListener("click", function ()
{
	console.log("clicked!");
});


// a simple implementation for the event listeners

// First we need a place where we can store all the functions/callbacks
const listeners: { [event: string]: Function[] } = {};

// Then we need a function that will insert callbacks into the listeners object
function addListener(event: string, callback: Function)
{
	// 1. check if listeners has an 'event' array, else create and assign one
	if(!listeners[event])
		listeners[event] = [];

	// 2. add the function/callback to the array
	listeners[event].push(callback);
}


// We also need a function to call the callbacks when something happend
function emit(event: string)
{
	for (let callback of listeners[event])
		callback();
}

// Now we can add event listeners/callbacks to what ever event you want
addListener("click", function () 
{
	console.log("clicked!");
});

addListener("scroll", function () 
{
	console.log("clicked!");
});


// And then when something happend we can emit the event (which will call all the registered functions/callbacks)
emit("click");
emit("scroll");
emit("whatever"); // event 'whatever' does not exists so nothing will execute 



// 5. Classes (accessors, inheritance) and enums

// 6. Generics/Templates