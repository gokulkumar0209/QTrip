import React from "react";
import { useNavigate } from "react-router-dom";
// import { AdventureIdContext } from "../store/AdventureIdContext";
function Adventure({ adt }) {
	// const { adventureId, setAdventureId } = useContext(AdventureIdContext);
	const navigate = useNavigate();
	// const handleSubmit = () => {
	// 	// setAdventureId(adt.id);
	// 	// localStorage.setItem("adventure_id", adt.id);
	// 	navigate(`/adventure/${adt.name}/${adt.id}`);
	// };
	return (
		<>
			<div
				onClick={() => navigate(`/adventure/${adt.name}/${adt.id}`)}
				className=" m-2  rounded-md group hover:shadow-xl shadow-slate-600 "
			>
				<div className=" group relative  ">
					<div className=" flex justify-center  container h-40 w-full overflow-hidden rounded-t-md  ">
						<img
							className=" w-full h-full object-cover group-hover:scale-110 "
							src={adt.image}
							alt=""
						/>
					</div>
					<div className=" bg-gray-500 text-white absolute right-0 top-0 m-2 rounded-md ">
						<h2 className=" px-2">{adt.category}</h2>
					</div>

					<div className=" container absolute bottom-0 left-0   bg-gray-500 flex justify-center bg-opacity-60 group-hover:bg-gray-700">
						<h1 className=" text-white  text-center ">{adt.name}</h1>
					</div>
				</div>

				<div>
					<div className="  bg-gray-600 text-white flex justify-between px-4 rounded-b-md group-hover:bg-gray-700">
						<div>₹{adt.costPerHead}</div>
						<div>{adt.duration} Hours</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Adventure;
