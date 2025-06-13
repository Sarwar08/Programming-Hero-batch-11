import React from "react";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {


  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        // start deleting the coffee 
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              // remove the coffee from the state
              const remainingCoffee = coffees.filter(coffee => coffee._id !== id);
              setCoffees(remainingCoffee);
            }
          })

      }
    });


  };

  return (
    <div>
      <div className="bg-base-300 shadow-sm flex justify-around items-center p-4 rounded-2xl">
        <div className="">
          <figure>
            <img className="w-full max-h-48" src={coffee.photo} alt="Coffee" />
          </figure>
        </div>
        <div className="text-3xl">
          <h2 className="">Name: {coffee.name}</h2>
          <p>Supplier: {coffee.supplier}</p>
          <p>Price: {coffee.price}</p>
        </div>
        <div className="flex flex-col gap-5">
          <Link to={`/coffeeDetails/${coffee._id}`}>
            <button className="btn bg-amber-200 text-cyan-500">
              <FaEye size={16} />
            </button>
          </Link>

          <Link to={`/updateCoffee/${coffee._id}`}>
            <button className="btn bg-amber-500 text-gray-950">
              <MdEdit size={16} />
            </button>
          </Link>

          <Link> <button onClick={() => handleDelete(coffee._id)}
            className="btn bg-red-600 text-amber-300"
          >
            <MdDelete size={16} />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
