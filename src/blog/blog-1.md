<!-- Blog--> 1  -->
<!-- The significance of union and intersection types in Typescript. -->

<!-- ANS -->
--> One of the popular types among typescripts is Union type.what Typescript's union and intersection types mean.
Union and Intersection are two of Typescript's most potent and practical features. They guarantee code security, give flexibility, and offer expressive type definitions that can be quite beneficial. 
Understanding the direction of the code is made easier by these Union and Intersection types.

## Terminologies and Application
To put it simply, the Union type is one that allows a variable to hold one outcome among the many possible possibilities. The Union type, which is declared with the symbol |, indicates that only one value is valid; if not, the function will choose the second value, as in string | number. Conversely, the intersection type is one that records every value. It confirms that every value should be used; if not, no results will be obtained. Value A & value B are examples of how it is defined using the & symbol. 

## Let's observe some code in operation.

## Union Type
const handleInput = (input: string | string[]): string => {
  if (typeof input === 'string') {
    return `Single item: ${input}`;
  } else {
    return `Multiple items: ${input.join(', ')}`;
  }
};

console.log(handleInput("apple"));        
console.log(handleInput(["apple", "banana", "cherry"])); 
interface BasicInfo {
  name: string;
  age: number;
}

interface ContactInfo {
  email: string;
  phone: string;
}

type FullProfile = BasicInfo & ContactInfo;

const getUserProfile = (profile: FullProfile): string => {
  return `Name: ${profile.name}, Age: ${profile.age}, Email: ${profile.email}, Phone: ${profile.phone}`;
};

const user: FullProfile = {
  name: 'Anik',
  age: 21,
  email: 'shariarrahmananik@gmail.com',
  phone: '17418',
};

console.log(getUserProfile(user)); 
