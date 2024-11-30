import CarListing from "./Components/CarListingParent";
export default function Home() {
  return (
    <div>
      <div className="text-2xl font-bold">
        <h1>Class Assignment 9</h1>
      </div>
      <div>
        <p>
          1. Make an array of objects (Min 4 objects). carImage, carName,
          carPrice, carReviews
        </p>
        <p>2. Make a child Component and pass the value through props</p>
        <p>
          3. Using the map function render child component once and get the
          values 4 times
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-8">
          This solution implements all the requirements:
        </h1>
        <p>
          I have created an array of car objects (carsData) with 4 objects, each
          containing carImage, carName, carPrice, and carReviews properties.
        </p>
        <p>
          I have created a child component (CarCardChild) that receives these
          values through props.
        </p>
        <p>
          In the parent component (CarListingParent), I am using the map function
          to render the CarCard component four times with different data.
        </p>
      </div>
      <CarListing />
    </div>
  );
}
