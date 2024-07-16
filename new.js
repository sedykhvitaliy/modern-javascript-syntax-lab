const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']




// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here


const nums2 = nums.map((currentElement) => {
    return currentElement *2;
  });

  console.log(nums2)



const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstPizzaTopping, secondPizzaTopping] = pizzaToppings
console.log(pizzaToppings[0]);
console.log(pizzaToppings[1]);

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here

const { make, model } = car

console.log(make); 
console.log(model);



// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings];


console.log(controversialPizzaToppings);



// Duplicate the following object and spread its values into a new variable `myCar`.

  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  

  const myCar = {...car};

  myCar.model = "q7";

console.log(car)
console.log(myCar);




const userProfile = {
    username: 'sonsic',

}
const selectedUsername = 'username'
const selectedUserProfileName = userProfile[selectedUsername];;

console.log(selectedUserProfileName)


function describeAnimal(noun = 'cat', adjective = 'white') {
    return (`The ${noun} is ${adjective}.`);
  }
  console.log(describeAnimal());
  //second example
  function describeAnimal(noun = 'cat', adjective = 'white') {
    return (`The ${noun} is ${adjective}.`);
  }
  console.log(describeAnimal());



  // Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
let food = pizza === 'tasty' ? 'yum' : 'yuck';
console.log(food)



//exercise 10
  // SET LANGUAGE
  const localLangCofig = null;
  const LANG = localLangCofig || 'en';
  console.log('localLangCofig', LANG);
    // SET WEBSITE THEME
  const userSavedTheme = null;
  const  USER_THEME = 'light'|| userSavedTheme;
  console.log('User theme setting:', USER_THEME);


  //Exercise 11
const adventurer = {
    name: 'Alice',
  };
  let cat = adventurer.cat?.name;
  console.log(cat);