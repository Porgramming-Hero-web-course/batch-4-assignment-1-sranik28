<!-- Blog--> 1  -->
<!-- The significance of union and intersection types in Typescript. -->

<!-- ANS -->
--> One of the popular types among typescripts is Union type.The significance of union and intersection types in Typescript.
Union and Intersection are one of the most powerful and useful features in typescript which ensures the safety of the code, offers flexibility and provides expressive type definitions which can be very much helpful. 
These Union and Intersection types help to understand where the code is leading.

Definitions and Usage
If we talk about the definition of Union and Intersection, we can simply say that the Union type is a type that lets a variable hold an outcome among the many outcomes. The Union type which is defined with | which means one value would be valid otherwise the function will go for the second value for example: string | number. On the other hand the intersection type is a type which captures all the values. It validates that all the values should be in use otherwise it will provide no result. It is defined with & for example: value A & value B. 

Let's see some code in action.

Union Type
const getType = (sample: string | number) =>{
  if(typeof sample === 'string'){
     console.log('I am string')
} else if (typeof sample === 'number') {
     console.log('I am a number')
} else {
     console.log('I am ERROR 🥴')
}
  return sample;
};

console.log(getType())


Intersection Type
 interface Type1 {
    name: string;
    age: number;
  }

  interface Type2 {
    email: string;
    contactNo: number;
  }

  type AllType = Type1 & Type2;

  const getPersonDetails = (person: AllType): AllType => {
    return person;
  };

  const person = {
    name: 'Alamin',
    age: 23,
    email: 'alamin@gmail.com',
    contactNo: 1121,
  };

  console.log(getPersonDetails(person));
