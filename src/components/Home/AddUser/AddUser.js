import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './AddUser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const AddUser = () => {
    const { register, handleSubmit, errors } = useForm();



    const onSubmit = (data,e) => {
       
        const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            userName: data.userName,
            email: data.email,
            password: data.password

        };

        const url = `http://localhost:5055/addUser`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then((res) => swal("Congratulations!", "Successfully Created!", "success"));

        e.target.reset();
    };

    return (
        <div className="addUser">
            <form className="mt-5 user addBook" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center pb-2"><FontAwesomeIcon icon={faUsers} /> User Management</h2>
                <div className="user-input-field">

                    <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        ref={register({ required: true })}
                        

                    />
                    {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                </div>
                

                <div className="user-input-field">

                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        ref={register({ required: true })}

                    />
                    {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                </div>
              
                <div className="user-input-field">

                    <input
                        name="userName"
                        type="text"
                        placeholder="User Name"
                        ref={register({ required: true })}

                    />
                    {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                </div>
              
                <div className="user-input-field">

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        ref={register({ required: true })}

                    />
                    {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                </div>
              
                <div className="user-input-field">

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        ref={register({ required: true,maxLength: 6 })}
                        

                    />
                    {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                </div>

                <button className="userBtn">Create User</button>

            </form>
        </div>
    );
};

export default AddUser;