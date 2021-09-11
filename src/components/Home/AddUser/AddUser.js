import './AddUser.css';
import Form from '../../ReuseableComponent/Form';

const AddUser = () => {

    return (
        <div className="addUser">
            <Form
                firstName={""}
                lastName={""}
                userName={""}
                email={""}
                password={""}
                buttonName={"Create User"}
            />
         
        </div>
    );
};

export default AddUser;