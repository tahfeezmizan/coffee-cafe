import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../Provider/AuthProvider';


// user 
// cuzulaw@mailinator.com
// Pa$$w0rd!

const SingUp = () => {
    const { createUser, loading } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photourl = form.photourl.value;
        const password = form.password.value;
        console.log(name, email, photourl, password);

        createUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className='w-full md:w-9/12 mx-auto py-3'>
            <Helmet>
                <title>Sing Up | React Resturent Template</title>
            </Helmet>

            <div className="w-96 mx-auto bg-white shadow-xl p-14 rounded-xl ">
                <form onSubmit={handleRegister}>
                    <h1 className="text-2xl py-2 text-center font-bold">Sing Up</h1>
                    <div className="pb-4">
                        {/* <div className="">
                            <label htmlFor="">Name</label> <br />
                            <input type="text" name="name" className="w-full my-2 border rounded-md pl-2 p-1" placeholder='Enter Your Name' id="" />
                        </div> */}
                        <div className="">
                            <label htmlFor="">Email</label> <br />
                            <input type="email" name="email" className="w-full my-2 border rounded-md pl-2 p-1" placeholder='Enter Your Email' id="" />
                        </div>
                        {/* <div className="">
                            <label htmlFor="">Photo Url</label> <br />
                            <input type="text" name="photourl" className="w-full my-2 border rounded-md pl-2 p-1" placeholder='Enter Your Photo URL' id="" />
                        </div> */}
                        <div className="">
                            <label htmlFor="">Password</label> <br />
                            <input type="password" name="password" className="w-full my-2 border rounded-md pl-2 p-1" placeholder='Set Your Password' id="" />
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="btn w-full bg-green-600 text-white rounded-md" />
                </form>
            </div>
        </div>
    );
};

export default SingUp;