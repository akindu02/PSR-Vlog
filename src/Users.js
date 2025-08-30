import UserForm from "./UserForm";
import UsersTable from "./Userstable";
import { Box } from "@mui/material";    

const users = [
    {
        id: 1,
        name:"Prasad",
    },
    {
        id: 2,
        name: "Prasadi",
    }
];

const Users = () => {
    return(
        <box>
            <UserForm />
            <UsersTable rows={users} />
        </box> 

    );
}

export default Users;
