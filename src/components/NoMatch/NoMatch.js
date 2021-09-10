import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const NoMatch = () => {

    return (
        <div className="text-center ">

            <div className="d-flex align-items-center justify-content-center flex-column">
                <img src="https://i.ibb.co/5n478qb/moja.gif" alt="dinka chika" />
                <h3>coming soon</h3>
                <h4> Thanks For Your Patience</h4>
                <Link to="/home" className="text-dark">
                    <FontAwesomeIcon
                        style={{ cursor: "pointer", fontSize: "25px" }}
                        icon={faArrowAltCircleLeft}
                    />
                    </Link>
            </div>

        </div>
    );
};

export default NoMatch;