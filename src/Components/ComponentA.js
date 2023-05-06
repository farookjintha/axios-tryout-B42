import { useState, useEffect } from 'react';
import { addNewUser, deleteUser, getAllUsers, updateUser } from '../services/fetchAPI';
const ComponentA = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersList();
    }, []);



    const getUsersList = async () => {
        const usersList = await getAllUsers();
        setUsers(usersList);
    };

    const addUser = async () => {
        const payload = {
            "id": 11,
            "name": "Farook",
            "username": "fj",
            "email": "fj@xyz.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-990-736-8931 x56442",
            "website": "xyz.org",
            "company": {
              "name": "ZA-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          };

          const response = await addNewUser(payload);
          console.log(response);
          setUsers([...users, response]);

    }

    const updateExistingUser = async () => {
        const payload = {

            "name": "Farook",
            "username": "fj",
            "email": "fj@xyz.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-990-736-8931 x56442",
            "website": "xyz.org",
            "company": {
              "name": "ZA-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          };

          const response = await updateUser(2, payload);
          console.log('User Updated: ', response);
    }

    const deleteExistingUser = async () => {
        const response = await deleteUser(2);
        console.log('User Deleted: ', response);
    }

    return (
        <div>
            <h1>Getting users using Fetch</h1>

            <button onClick={addUser}>Add a new User</button>
            <button onClick={updateExistingUser}>Update User</button>
            <button onClick={deleteExistingUser}>Delete User</button>
            

            {
                users.length ? (
                    <div>
                        {users.map((user, i) => (
                            <div key={i}>
                                <h1>Name: {user.name}</h1>
                                <h2>Email: {user.email}</h2>
                                <h2>Phone: {user.phone}</h2>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        No Users Found
                    </div>
                )
            }
        </div>
    )
}

export default ComponentA;


// using FETCH
// GET = /users
// GET = /users/1
// POST = /users -> req.body
// PUT = /users/1 -> req.body
// DELETE = /users/4 