import { use } from "react"
import Customer from "./Customer";

export default function Customers ({fetchCustomers}){

    const customers = use(fetchCustomers);

    return(
        <>
            <h3>List of Customers</h3>
            <h4>No of Customers: {customers.length}</h4>
            <div>
                {
                    customers.map((customer) => <Customer key={customer.id} customer={customer} />)
                }
            </div>
        </>
    )
}