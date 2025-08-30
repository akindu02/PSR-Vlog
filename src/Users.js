import UserForm from "./UserForm";
import UsersTable from "./UsersTable";    

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
        <box sx={{
            width:'calc(100% - 100px)',
            margin:'auto',
            marginTop:'100px',
        }}>
            <UserForm />
            <UsersTable rows={users} />
        </box> 

    );
}

export default Users;
