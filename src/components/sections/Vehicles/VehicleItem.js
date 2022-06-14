import React from "react";

export default function VehicleItem({ vehicle }) {
  return (
    <div>
      <div className="px-2 my-3 border divide-y rounded-md divide-alt bg-inputMain border-alt">
        {Object.entries(vehicle).map(([key, val]) => (
          <div
            key={key}
            className="flex items-center justify-between py-3 text-xs"
          >
            {key === "Trim" ? (
              <p className="mr-4 text-gray-300 text-semibold">Trim</p>
            ) : (
              <p className="text-gray-300 text-semibold">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </p>
            )}
            {key === "Trim" ? (
              <p className="text-gray-500 truncate ">{`${val[0].name} | ${val[0].trim}`}</p>
            ) : (
              <p className="text-gray-500">{val}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
