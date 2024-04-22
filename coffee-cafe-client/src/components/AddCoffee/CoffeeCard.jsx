import { FaEye, FaTrash } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addcoffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remening = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remening)
                        }

                    })
            }
        });
    }

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
                <Link to={`/updatecoffee/${_id}`}>
                    <button className="bg-slate-900 p-2 text-white rounded-md" ><IoPencil /></button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="bg-slate-900 p-2 text-white rounded-md hover:bg-red-600" ><FaTrash /></button>
            </div>

        </div>
    );
};

export default CoffeeCard;