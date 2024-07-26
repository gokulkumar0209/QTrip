import React from "react";

function Adventure({ adt }) {
	return (
		<>
			<div className="shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center bg-white transform transition-transform duration-300 hover:scale-105">
				<div className="h-40 w-full relative">
					<div className="absolute top-0 right-0 bg-black bg-opacity-70 text-white px-2 py-1 m-2 rounded-lg text-xs font-semibold shadow-md">
						{adt.category}
					</div>
					<img className="h-full w-full object-cover" src={adt.image} alt="" />
				</div>

				<div className="p-4 w-full text-center">
					<div className="text-lg font-semibold text-gray-800 h-12">
						{adt.name}
					</div>
					<div className=" flex justify-between">
						<div className="text-md text-gray-600 mt-1">₹{adt.costPerHead}</div>
						<div className="text-md text-gray-500 mt-1">
							{adt.duration} Hours
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Adventure;
