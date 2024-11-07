{
  // Problem-5
  // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

  type PersonType = {
    name: string;
    age: number;
  };

  const getProperty = <T extends keyof PersonType>(
    PersonObject: PersonType,
    ValueKey: T
  ): PersonType[T] => {
    const printResult = PersonObject[ValueKey];
    return printResult;
  };

  const person = { name: "Alice", age: 30 };
  const result = getProperty(person, "name");
  console.log(result);

  //
}
