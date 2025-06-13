import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);

  const { _id, name, quantity, supplier, taste, price, details, photo } =
    coffee;

  const handleUpdataCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    console.log(updatedCoffee);

    // send updated coffee to the db
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-5xl text-amber-600 text-shadow-rose-800 text-shadow-lg text-center my-10">
        Updata a Coffee
      </h2>
      <div>
        <form onSubmit={handleUpdataCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                defaultValue={name}
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                name="quantity"
                className="input w-full"
                placeholder="Enter coffee quantity"
                defaultValue={quantity}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full"
                placeholder="Enter coffee supplier"
                defaultValue={supplier}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full"
                placeholder="Enter coffee taste"
                defaultValue={taste}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Price</label>
              <input
                type="text"
                name="price"
                className="input w-full"
                placeholder="Enter coffee price"
                defaultValue={price}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                name="details"
                className="input w-full"
                placeholder="Enter coffee details"
                defaultValue={details}
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter photo URL"
              defaultValue={photo}
            />
          </fieldset>
          <input
            type="submit"
            value="Update Coffee"
            className="btn w-full text-amber-500 text-xl btn-outline"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
