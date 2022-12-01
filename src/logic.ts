// Code logic and syntax

// 1. Variables and functions

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
// 2. Loops and arrays
// humans:   	 1 2 3 4 5 6 7 8 9 10
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "asd", {}, true];
// pc: offset    0 

const arr2: string[] = ["asdas", "asdsd", "Asdsd"];

// off by one errors
for (let offset = 0; offset < arr.length; offset++)
{
	// give me the value where the offset points to from the arr Array
	let val = arr[offset];
}

// in
for (let offset in arr)
{
	let val = arr[offset];
}

// of
for (let value of arr)
{
	let val = value;
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
	// do something
	if (i++ > 100)
		isDone = true;
}

// 3. Scope and Namespaces
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
			new Core();
			new Renderer();
		}
	};

	export class Engine { };

	class Core { };
	class Renderer { };
	class Physics { };

}


// 4. Callbacks and Async code (Promises)

window.addEventListener("click", function ()
{

});

window.addEventListener("click", function () {});




const listeners: { [event: string]: Function[] } = {};

function addListener(event: string, callback: Function)
{
	listeners[event].push(callback);
}

addListener("click", function () 
{
	console.log("clicked!");
});

addListener("scroll", function () 
{
	console.log("clicked!");
});

function click()
{
	for (let callback of listeners["click"])
	{
		callback();
	}
}


function scroll()
{
	for (let callback of listeners["scroll"])
	{
		callback();
	}
}

click();




// 5. Classes (accessors, inheritance) and enums

// 6. Generics/Templates