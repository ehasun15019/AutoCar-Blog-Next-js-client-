"use client";
import { useState, useEffect, useCallback, useContext } from "react";
import { AuthContext } from "@/Context/AuthContext";
import useAxios from "@/Components/Axios/useAxios";
import Swal from "sweetalert2";
import Image from "next/image";
import { BsFillEyeFill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Link from "next/link";
import PrivateRoute from "@/Components/Routes/PrivateRoutes";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const [cars, setCars] = useState([]);

  const fetchCars = useCallback(() => {
    if (!user?.email) return;

    axios
      .get("/car-selling")
      .then((res) => {
        const myCars = res.data.filter((car) => car.email === user.email);
        setCars(myCars);
      })
      .catch((err) => console.log(err));
  }, [axios, user]);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this car!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/car-selling/${id}`)
          .then(() => {
            fetchCars();
            Swal.fire("Deleted!", "Car removed successfully.", "success");
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete.", "error");
          });
      }
    });
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm sm:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Car Type</th>
              <th className="p-3 text-left">Registration</th>
              <th className="p-3 text-left">Condition</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.length > 0 ? (
              cars.map((car, idx) => (
                <tr
                  key={car._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3">{idx + 1}</td>
                  <td className="p-3">
                    <div className="h-12 w-12 rounded-md overflow-hidden">
                      <Image
                        src={car.image || "/default-car.png"}
                        width={50}
                        height={50}
                        alt="car"
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="p-3">{car.carTypes}</td>
                  <td className="p-3">{car.registration}</td>
                  <td className="p-3">{car.condition}</td>
                  <td className="p-3 flex flex-wrap gap-2">
                    <label htmlFor={`modal-${car._id}`} className="btn btn-sm">
                      <TbEdit />
                    </label>
                    <button
                      className="btn btn-sm"
                      onClick={() => handleDelete(car._id)}
                    >
                      <RiDeleteBin5Fill />
                    </button>

                    <input
                      type="checkbox"
                      id={`modal-${car._id}`}
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg mb-2">
                          Update Car Details
                        </h3>
                        <UpdateForm car={car} fetchCars={fetchCars} />
                        <div className="modal-action">
                          <label htmlFor={`modal-${car._id}`} className="btn">
                            Close
                          </label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-8 text-gray-500 text-lg"
                >
                  No data found 😄
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {cars.length > 0 ? (
          cars.map((car, idx) => (
            <div
              key={car._id}
              className="border rounded-md p-4 shadow-sm flex flex-col gap-2 bg-white"
            >
              <div className="flex justify-between items-center">
                <div className="font-semibold">
                  {idx + 1}. {car.carTypes}
                </div>
                <div className="h-12 w-12 rounded-md overflow-hidden">
                  <Image
                    src={car.image || "/default-car.png"}
                    width={50}
                    height={50}
                    alt="car"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <strong>Registration:</strong> {car.registration}
              </div>
              <div>
                <strong>Condition:</strong> {car.condition}
              </div>
              <div className="flex gap-2 flex-wrap mt-2">
                <label htmlFor={`modal-${car._id}`} className="btn btn-sm">
                  <TbEdit />
                </label>
                <button
                  className="btn btn-sm"
                  onClick={() => handleDelete(car._id)}
                >
                  <RiDeleteBin5Fill />
                </button>

                <input
                  type="checkbox"
                  id={`modal-${car._id}`}
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg mb-2">
                      Update Car Details
                    </h3>
                    <UpdateForm car={car} fetchCars={fetchCars} />
                    <div className="modal-action">
                      <label htmlFor={`modal-${car._id}`} className="btn">
                        Close
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-800 text-lg">
            No data found 😄
          </div>
        )}
      </div>
    </div>
  );
};

const UpdateForm = ({ car, fetchCars }) => {
  const axios = useAxios();

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = {
      carTypes: e.target.carTypes.value,
      registration: e.target.registration.value,
      condition: e.target.condition.value,
      image: e.target.image.value,
      address: e.target.address.value,
      description: e.target.description.value,
    };

    axios
      .put(`/car-selling/${car._id}`, updatedData)
      .then(() => {
        Swal.fire({ title: "Updated Successfully!", icon: "success" });
        fetchCars();
      })
      .catch(() =>
        Swal.fire({ icon: "error", title: "Failed!", text: "Update failed!" })
      );
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        name="carTypes"
        defaultValue={car.carTypes}
        placeholder="Car Type"
        className="input input-bordered w-full my-2"
      />
      <input
        name="registration"
        defaultValue={car.registration}
        placeholder="Registration"
        className="input input-bordered w-full my-2"
      />
      <input
        name="condition"
        defaultValue={car.condition}
        placeholder="Condition"
        className="input input-bordered w-full my-2"
      />
      <input
        name="image"
        defaultValue={car.image}
        placeholder="Image URL"
        className="input input-bordered w-full my-2"
      />
      <input
        name="address"
        defaultValue={car.address}
        placeholder="Address"
        className="input input-bordered w-full my-2"
      />
      <textarea
        name="description"
        defaultValue={car.description}
        placeholder="Description"
        className="input input-bordered w-full my-2"
      />
      <button className="btn btn-primary btn-sm w-full mt-2">Update</button>
    </form>
  );
};

export default function PageWrapper() {
  return (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  );
}
