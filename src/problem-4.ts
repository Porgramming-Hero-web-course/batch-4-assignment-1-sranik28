{
  // Problem -->4
  // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type CircleType = {
    shape: "circle";
    radius: number;
  };

  type RectangleType = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type AllShape = CircleType | RectangleType;
  type stringNum = string | number;

  const calculateShapeArea=(shape: AllShape): stringNum =>{
    if ("radius" in shape) {
      const multiplyCircle = Math.PI * shape.radius * shape.radius;
      const AreaOfCircle = parseFloat(multiplyCircle.toFixed(2));
      return AreaOfCircle;
    } else if ("width" in shape && "height" in shape) {
      const AreaOfRectangle = shape.width * shape.height;
      return AreaOfRectangle;
    } else {
      return "Something Went Wrong";
    }
  }

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea);

  //
}
