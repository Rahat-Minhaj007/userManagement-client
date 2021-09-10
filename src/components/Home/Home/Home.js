import React from 'react';
import Nav from '../../shared/Nav/Nav';
import AddUser from '../AddUser/AddUser';
import UsersTable from '../UsersTable/UsersTable';

const Home = () => {
    return (
        <div>
            <>
                <Nav />
            </>
            <div className="pt-2 container">

                <div className="d-flex justify-content-center">
                    <AddUser />
                </div>

                <div className="pt-4 text-center">
                    <UsersTable />
                </div>

            </div>


        </div>
    );
};

export default Home;