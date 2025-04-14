import { use } from "react";

export default function Users ({fetchUsers}) {
    console.log(fetchUsers);
    
    const users = use(fetchUsers);
    
    console.log(users);
    
    return (
        <>
            <div>
                {   
                    users.map((user) => {
                        return (
                            <div key={user.id}>
                                <p>{user.name} {user.id}</p>
                                
                            
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}