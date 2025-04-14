
import "../App.css";

export default function Customer ({customer}){

    console.log(customer);

    // {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}
    

    const {name, email, address} = customer;
    const {city, geo, street, suite, zipcode} = address;
    const {lat, lng} = geo;

    return (
        <div className="singer">
            <h3>Customer Details</h3>
            <p>{name}</p>
            <p>{email}</p>
            <div>
                <p> {lat}, {lng}, {suite}, {street}, {city} {zipcode}</p> 
            </div>
        </div>
    )
}