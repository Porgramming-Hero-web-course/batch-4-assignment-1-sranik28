{
  // Problem--> 7
  // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

  class Car {
    // public make: string;
    // public model: string;
    // public year: number;

    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {
      //   this.make = make;
      //   this.model = model;
      //   this.year = year;
    }

    getCarAge(): number {
      const thePresentYear = new Date().getFullYear();
      const printRemainingYear = thePresentYear - this.year;
      return printRemainingYear;
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  const result = car.getCarAge();
  console.log(result);

  //
}
