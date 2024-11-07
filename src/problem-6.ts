{
  // Problem -->6
  // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

  
  interface Profile {
    name: string;
    age: string | number;
    email: string;
  }

  const updateProfile = (
    mainProfile: Profile,
    Updates: Partial<Profile>
  ): Profile => {
    return { ...mainProfile, ...Updates };
  };

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  const result = updateProfile(myProfile, { age: 26 });
  console.log(result);

  //
}
