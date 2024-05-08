import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../../UseAuth/UseAuth';

const SingIn = () => {
    const { singInUser } = UseAuth()
    const navigate = useNavigate()

    const handleSingIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singInUser(email, password)
            .then(result => {
                console.log(result);
                navigate('/')
                alert("user Login Sucessfully")
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // User
    // lewoc@mailinator.com
    // Pa$$w0rd!

    return (
        <div className='w-full md:w-9/12 mx-auto py-3'>
            <Helmet>
                <title>Sing In | React Resturent Template</title>
            </Helmet>

            <div className="w-96 mx-auto bg-white shadow-xl p-14 rounded-xl ">
                <form onSubmit={handleSingIn}>
                    <h1 className="text-2xl py-2 text-center font-bold">Sing In</h1>
                    <div className="pb-4">
                        <div className="">
                            <label htmlFor="">Email</label> <br />
                            <input type="email" name="email" className="w-full my-2 border rounded-md pl-2 p-1" placeholder='Enter Your Email' id="" />
                        </div>
                        <div className="">
                            <label htmlFor="">Password</label> <br />
                            <input type="password" name="password" className="w-full my-2 border rounded-md pl-2 p-1" placeholder='Enter Your Name' id="" />
                        </div>
                    </div>
                    <input type="submit" value="Login" className="btn w-full bg-green-600 text-white rounded-md p-1 " />
                </form>
            </div>
        </div>
    );
};

export default SingIn;