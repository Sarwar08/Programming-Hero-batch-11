
export default function User ({user}){

    console.log(user);

    const {name, company, address} = user;
    
    return (
        <div className="bordered">
            <h2>User Details</h2>
            <p>Name: {name}</p>
            <p>Company Name: {company.name}</p>
            <p>City: {address.city}</p>
        </div>
    )
}