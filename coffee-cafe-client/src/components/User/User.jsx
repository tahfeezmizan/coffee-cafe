import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    const loadedUser = useLoaderData();
    const [user, setUser] = useState(loadedUser);

    const handleDelete = () => {
        
    }

    return (
        <div className="w-full md:w-9/12 mx-auto ">
            <div className="w-4/5 mx-auto text-center">
                <h2 className="text-xl font-bold mb-4">User Details</h2>
                <table className="min-w-full divide-y table-auto bg-gray-100">
                    <thead >
                        <tr className='border p-1'>
                            <th className='border p-1'>Id</th>
                            <th className='border p-1'>Email</th>
                            <th className='border p-1'>create time</th>
                            <th className='border p-1'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user.map(user => <>
                                <tr key={user._id} className='border p-1 bg-gray-100 hover:bg-gray-200'>
                                    <td className='border p-1'>1</td>
                                    <td className='border p-1'>{user.email}</td>
                                    <td className='border p-1'>{user.createdAT}</td>
                                    <th className='border p-1'>
                                        <button 
                                        onClick={() => handleDelete(_id)}
                                        className='btn'>X</button>
                                        </th>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
