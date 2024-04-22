import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../AddCoffee/CoffeeCard";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
    const loadedcoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedcoffees)

    return (
        <div className="w-full md:w-9/12 mx-auto ">
            <Helmet>
                <title>Home - coffee cafe | React Resturent Template</title>
            </Helmet>
            <h1>coffe data length {coffees.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    coffees.map(coffee => <CoffeeCard 
                        key={coffee._id} 
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;