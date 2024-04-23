import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
    const { singInUser } = useContext(AuthContext);
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
                const user = {
                    email,
                    lastLoginAT: result.user?.metadata?.lastSignInTime
                }
                fetch('https://coffee-cafe-server-6mvyz9uz5-tahfeez-mizans-projects.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                       console.log(data)
                    //    alert(data)
                        // if () {
                        //     alert('login sucessfully')
                        // }
                    })


            })
            .catch(error => {
                console.log(error.message);
            })
    }

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