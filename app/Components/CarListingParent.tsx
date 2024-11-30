import { CarCard } from "./CarCardChild"

const carsData = [
  {
    carImage: "/Corolla-banner.jpg",
    carName: "Toyota Corolla",
    carPrice:  75,
    carReviews: 458
    
  },
  {
        carImage: "/Honda_City_banner.jpg",
        carName: "Honda City",
        carPrice: 46,
        carReviews: 275
      },
      {
        carImage: "/honda_civic_banner.jpg",
        carName: "Honda Civic",
        carPrice: 85,
        carReviews: 186
      },
      {
        carImage: "/Suzuki_banner.jpg",
        carName: "Suzuki Alto",
        carPrice: 25,
        carReviews: 312
      }
  
]

export default function CarListing() {
  return (
    <div className="mx-auto p-4">
      <div className=" grid grid-cols-4  h-auto gap-4 text-center ">
        {carsData.map((car, index) => (
          <CarCard
            key={index}
            carImage={car.carImage}
            carName={car.carName}
            carPrice={car.carPrice}
            carReviews={car.carReviews}
          />
        ))}
      </div>
      </div>
      
    
  )
}
