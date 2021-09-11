import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Form.css';

const Form = ({ firstName, lastName, email, password, userName, buttonName, id }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {

        const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            userName: data.userName,
            email: data.email,
            password: data.password

        };

        if (firstName !== "") {

            fetch(`https://nameless-mountain-90298.herokuapp.com/update/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            })
                .then((res) => swal("Congratulations!", "Updated Successfully!", "success"));

            e.target.reset();


        } else if (firstName === "") {
            const url = `https://nameless-mountain-90298.herokuapp.com/addUser`;

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            }).then((res) => swal("Congratulations!", "Successfully Created!", "success"));

            e.target.reset();
        }
    };
    return (
        <div>
            <form className="mt-5 user addBook" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center pb-2"><FontAwesomeIcon icon={faUsers} /> User Management</h2>
                <div className="user-input-field">

                    <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        ref={register({ required: true })}
                        defaultValue={firstName}

                    />
                    {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                </div>


                <div className="user-input-field">

                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        ref={register({ required: true })}
                        defaultValue={lastName}
                    />
                    {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                </div>

                <div className="user-input-field">

                    <input
                        name="userName"
                        type="text"
                        placeholder="User Name"
                        ref={register({ required: true })}
                        defaultValue={userName}
                    />
                    {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                </div>

                <div className="user-input-field">

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        ref={register({ required: true })}
                        defaultValue={email}
                    />
                    {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                </div>

                <div className="user-input-field">

                    <input
                        name="password"
                        type="text"
                        placeholder="Password"
                        ref={register({ required: true, maxLength: 6 })}
                        defaultValue={password}


                    />
                    {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                </div>

                <button className="userBtn">{buttonName}</button>
            </form>
        </div>
    );
};

export default Form;