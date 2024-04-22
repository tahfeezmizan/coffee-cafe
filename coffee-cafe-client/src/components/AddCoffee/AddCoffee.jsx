import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(newCoffee);

        fetch('http://localhost:5000/addcoffee', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    // alert('New Coffee Add Sucessfullly')
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
            <div className="bg-slate-100 rounded-lg p-8">
                <h1 className="text-center pb-4">Add New Coffee</h1>
                {/* <p className="mb-5 text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p> */}

                <form onSubmit={handleAddCoffee}>
                    <div className="pb-5">
                        <div className="flex gap-10">
                            <div className="flex-1">
                                <label htmlFor="" className="">Name</label> <br />
                                <input type="text" name="name" className="w-full" id="" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="" className="">Chef</label> <br />
                                <input type="text" name="chef" className="w-full" id="" />
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex-1">
                                <label htmlFor="" className="">Supplier</label> <br />
                                <input type="text" name="supplier" className="w-full" id="" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="" className="">Taste</label> <br />
                                <input type="text" name="taste" className="w-full" id="" />
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex-1">
                                <label htmlFor="" className="">Category</label> <br />
                                <input type="text" name="category" className="w-full" id="" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="" className="">Details</label> <br />
                                <input type="text" name="details" className="w-full" id="" />
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="">Photo</label> <br />
                            <input type="text" name="photo" className="w-full" id="" />
                        </div>
                    </div>

                    <input type="submit" value="add coffee" className="btn border border-gray-400 w-full bg-gray-400" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;