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
        <box>
            <UserForm />
            <UsersTable rows={users} />
        </box> 

    );
}

export default Users;
