import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;


    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(updatedCoffee);

        fetch(`https://coffee-cafe-server.vercel.app/addcoffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Coffee Add Sucessfullly',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset()
            })

    }

    return (
        <div className="w-full md:w-9/12 mx-auto">
            <Helmet>
                <title>Update Coffee - coffee cafe | React Resturent Template</title>
            </Helmet>
            <div className="bg-slate-100 rounded-lg p-8">
                <h1 className="text-center pb-4">Update Coffee</h1>
                {/* <p className="mb-5 text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p> */}

                <form onSubmit={handleUpdateCoffee}>
                    <div className="pb-5 space-y-2">
                        <div className="flex gap-10">
                            <div className="flex-1">
                                <label htmlFor="" className="">Name</label> <br />
                                <input type="text" name="name" defaultValue={name} className="w-full" id="" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="" className="">Chef</label> <br />
                                <input type="text" name="chef" defaultValue={chef} className="w-full" id="" />
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex-1">
                                <label htmlFor="" className="">Supplier</label> <br />
                                <input type="text" name="supplier" defaultValue={supplier} className="w-full" id="" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="" className="">Taste</label> <br />
                                <input type="text" name="taste" defaultValue={taste} className="w-full" id="" />
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex-1">
                                <label htmlFor="" className="">Category</label> <br />
                                <input type="text" name="category" defaultValue={category} className="w-full" id="" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="" className="">Details</label> <br />
                                <input type="text" name="details" defaultValue={details} className="w-full" id="" />
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="">Photo</label> <br />
                            <input type="text" name="photo" defaultValue={photo} className="w-full" id="" />
                        </div>
                    </div>

                    <input type="submit" value="update coffee" className="btn border border-gray-400 w-full bg-gray-400" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;