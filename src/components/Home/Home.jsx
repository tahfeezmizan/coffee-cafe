import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../AddCoffee/CoffeeCard";

const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees)

    return (
        <div className="w-full md:w-9/12 mx-auto ">
            <h1>coffe data length {coffees.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
            }
            </div>
        </div>
    );
};

export default Home;