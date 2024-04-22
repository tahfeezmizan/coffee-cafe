import { FaEye, FaTrash } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";

const CoffeeCard = ({ coffee }) => {

    const { name, chef, supplier, taste, category, details, photo } = coffee;

    return (
        <div className="flex items-center justify-around bg-[#d2b48c1c] rounded-xl py-6 pr-10">
            <img src={photo} className="w-40 h-48" alt="" />
            <div className="">
                <p className="">Name: {name}</p>
                <p className="">Chef: {chef}</p>
                <p className="">Price: 280</p>
            </div>
            <div className="flex flex-col gap-5">
                <button className="bg-slate-900 p-2 text-white rounded-md" ><FaEye /></button>
                <button className="bg-slate-900 p-2 text-white rounded-md" ><IoPencil /></button>
                <button className="bg-slate-900 p-2 text-white rounded-md" ><FaTrash /></button>
            </div>

        </div>
    );
};

export default CoffeeCard;