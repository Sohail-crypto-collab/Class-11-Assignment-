import Image from "next/image";

interface CarCardProps {
  carImage: string;
  carName: string;
  carPrice: number;
  carReviews: number;
}

export function CarCard({
  carImage,
  carName,
  carPrice,
  carReviews,
}: CarCardProps) {
  return (
    <div className="overflow-hidden  rounded-md shadow-2xl  transition duration-300 transform hover:scale-105">
      <Image src={carImage} alt={carName} width={300} height={75} />
      <div className="p-4">
        <h2 className="text-xl  font-sans font-bold  text-sky-700">
          {carName}
        </h2>
        <p className="text-2xl font-sans font-bold text-green-500 ">
          PKR {carPrice} Lacs
        </p>
        <div className="flex justify-center">
          <div className="flex justify-center fas fa-star text-yellow-500 text-lg ">
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>☆</p>
            <p>☆</p>
          </div>
          <div>
            <p className="text-lg font-sans font-bold text-gray-500 ml-1 ">
              {carReviews} Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
