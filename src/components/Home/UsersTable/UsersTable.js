import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './UserTable.css';
import Pagination from '../../Pagination/Pagination';

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [passVisible, setPassVisible] = useState(false);
    const [clickedPass, setClickedPass] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(4);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`http://localhost:5055/users`)
            setUsers(res.data);

        }
        fetchPost();

    }, [users])

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);




    const handleDelete = (id) => {
        console.log(id);
        if (window.confirm('Do you want to delete this item?')) {


            fetch(`http://localhost:5055/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log('Deleted Successfully');
                })
        }
    }

const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <div className="table-responsive">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr className="bg-dark" >
                            <th className="text-light text-left" scope="col">ID</th>
                            <th className="text-light" scope="col">First Name</th>
                            <th className="text-light" scope="col">Last Name</th>
                            <th className="text-light" scope="col">User Name</th>
                            <th className="text-light" scope="col">Email</th>
                            <th className="text-light" scope="col">Password</th>
                            <th className="text-light" scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentUser.map((data, index) =>

                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data?.firstName}</td>
                                    <td>{data?.lastName}</td>
                                    <td>{data?.userName}</td>
                                    <td>{data?.email}</td>
                                    <td>
                                        {passVisible && clickedPass === data?._id ? data?.password : "******"} <FontAwesomeIcon
                                            style={{ cursor: "pointer", paddingLeft: "10px", fontSize: "25px" }}
                                            icon={passVisible && clickedPass === data?._id ? faEyeSlash : faEye}
                                            onClick={() => {
                                                setPassVisible(!passVisible);
                                                setClickedPass(data._id)
                                            }}
                                        />
                                    </td>

                                    <td>
                                        <Link
                                            to={`/edit/${data?._id}`}
                                            style={{ color: "white", paddingRight: "10px" }}
                                        >
                                            <FontAwesomeIcon
                                                style={{ cursor: "pointer" }}
                                                icon={faUserEdit}
                                            />
                                        </Link>
                                        <FontAwesomeIcon
                                            style={{ cursor: "pointer" }}
                                            icon={faTrash}
                                            onClick={() => handleDelete(data?._id)}
                                        />
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
            <Pagination
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
            >
            </Pagination>
        </div>
    );
};

export default UsersTable;