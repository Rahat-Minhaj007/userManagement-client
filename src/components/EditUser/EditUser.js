import React, { useEffect, useState } from 'react';
import './EditUser.css';
import Nav from '../shared/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import axios from 'axios';

const EditUser = () => {

    const { register, handleSubmit, errors } = useForm();
    const [user, setUser] = useState({});
    const { _id } = useParams();
    console.log(user);

    useEffect(() => {
        const fetchPost = async () => {

            const res = await axios.get(`http://localhost:5055/users`)
            setUser(res.data.find((pd) => (pd._id) === (_id)));

        }
        fetchPost();

    }, [user])



    const onSubmit = (data, e) => {

        const userUpdateData = {
            firstName: data.firstName,
            lastName: data.lastName,
            userName: data.userName,
            email: data.email,
            password: data.password

        };
        console.log(userUpdateData);

        fetch(`http://localhost:5055/update/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userUpdateData),
        })
            .then((res) => alert("Successfully Updated"))

            e.target.reset();
    };

    return (
        <div className="addUser">
            <Nav />
            <div className="container d-flex justify-content-center">

                <form className="mt-5 user addBook" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center pb-2"><FontAwesomeIcon icon={faUsers} /> User Management</h2>
                    <div className="user-input-field">

                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            ref={register({ required: true })}
                            defaultValue={user?.firstName}



                        />
                        {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                    </div>


                    <div className="user-input-field">

                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            ref={register({ required: true })}
                            defaultValue={user?.lastName}
                        />
                        {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                    </div>

                    <div className="user-input-field">

                        <input
                            name="userName"
                            type="text"
                            placeholder="User Name"
                            ref={register({ required: true })}
                            defaultValue={user?.userName}
                        />
                        {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                    </div>

                    <div className="user-input-field">

                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            ref={register({ required: true })}
                            defaultValue={user?.email}
                        />
                        {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                    </div>

                    <div className="user-input-field">

                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            ref={register({ required: true, maxLength: 6 })}
                            defaultValue={user?.password}


                        />
                        {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                    </div>

                    <button className="userBtn">Update</button>

                </form>
            </div>
        </div>
    );
};

export default EditUser;