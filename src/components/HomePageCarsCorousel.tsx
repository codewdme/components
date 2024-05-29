import React from "react";
import CarCard from "./CarCard";

function HomePageCarsCorousel() {
  const cars = [
    {
      modelName: "2022 BMW 330 LI GRAM M SPORT",
      regYear: 2022,
      kms: 28000,
      fuelType: "Petrol",
    },
    {
      modelName: "2022 BMW 330 LI GRAM M SPORT",
      regYear: 2022,
      kms: 28000,
      fuelType: "Petrol",
    },
    {
      modelName: "2022 BMW 330 LI GRAM M SPORT",
      regYear: 2022,
      kms: 28000,
      fuelType: "Petrol",
    },
  ];
  return (
    <div className="flex gap-4 items-center">
      {cars.map((car) => (
        <CarCard car={car} key={car.modelName} />
      ))}
    </div>
  );
}

export default HomePageCarsCorousel;
