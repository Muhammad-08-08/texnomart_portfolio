import React from "react";
import Fire02Icon from "../../../assets/fire-02-stroke-rounded";
import EnergyEllipseIcon from "../../../assets/energy-ellipse-stroke-rounded";

function HeaderBottom() {
  const takliflar = [
    "Havo sovutgichlar",
    "Isitgichlar",
    "Smartfonlar",
    "Muzlatgichlar",
    "Changyutgichlar",
    "Noutbuklar",
    "Televizorlar",
    "Barcha kategoriyalar",
  ];
  return (
    <div className="container mx-auto mt-6 px-10 flex justify-between">
      <h4 className="flex gap-2">
        <Fire02Icon /> Aksiyalar
      </h4>
      <h4 className="flex gap-2">
        <EnergyEllipseIcon /> 1+1
      </h4>
      {takliflar.map((item, index) => {
        return (
          <div key={index}>
            <p className="font-medium cursor-pointer hover:text-gray-500 transition-all duration-700">
              {item}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default HeaderBottom;
