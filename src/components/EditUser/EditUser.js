import React, { useEffect, useState } from 'react';
import './EditUser.css';
import Nav from '../shared/Nav/Nav';
import { useParams } from 'react-router';
import axios from 'axios';
import Form from '../ReuseableComponent/Form';

const EditUser = () => {

    const [user, setUser] = useState({});
    const { _id } = useParams();


    useEffect(() => {
        const fetchPost = async () => {

            const res = await axios.get(`https://nameless-mountain-90298.herokuapp.com/users`)
            setUser(res.data.find((pd) => (pd._id) === (_id)));

        }
        fetchPost();

    }, [user])

    return (
        <div className="editUser">
            <Nav />
            <div className="container d-flex justify-content-center">
                <Form
                    firstName={user?.firstName}
                    lastName={user?.lastName}
                    userName={user?.userName}
                    email={user?.email}
                    password={user?.password}
                    buttonName={"UPDATE"}
                    id={_id}

                />
            </div>
        </div>
    );
};

export default EditUser;