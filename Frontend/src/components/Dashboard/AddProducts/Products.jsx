import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../Auth/AuthContext";
import { Helmet } from 'react-helmet';

const Product = () => {
  const { isAuthenticated } = useAuth();
  const [formMode, setFormMode] = useState("add");

  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    totalPrice: "",
    totalDays: "",
    monthlyPay: "",
    weeklyPay: "",
    dailyPay: "",
    moreDetails: [],
  });

  // Add the missing state and functions
  const [productId, setProductId] = useState(null);

  const handleMoreDetailsChange = (index, key, value) => {
    const updatedDetails = [...newProduct.moreDetails];
    updatedDetails[index][key] = value;
    setNewProduct({ ...newProduct, moreDetails: updatedDetails });
  };

  const handleRemoveDetail = (index) => {
    const updatedDetails = [...newProduct.moreDetails];
    updatedDetails.splice(index, 1);
    setNewProduct({ ...newProduct, moreDetails: updatedDetails });
  };

  const handleAddDetail = () => {
    setNewProduct({
      ...newProduct,
      moreDetails: [...newProduct.moreDetails, { columnName: "", value: "" }],
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/products/get");
        setProducts(response.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const addProduct = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3002/products/add",
        newProduct
      );

      if (response.status === 201) {
        setProducts((prevProducts) => [...prevProducts, response.data]);
        setNewProduct({
          name: "",
          totalPrice: "",
          totalDays: "",
          monthlyPay: "",
          weeklyPay: "",
          dailyPay: "",
          moreDetails: [],
        });
      } else {
        console.error(
          "Failed to add product. Unexpected status code:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error adding product:", error);

      if (error.response) {
        console.error("Error response from server:", error.response.data);
        console.error("Status code:", error.response.status);
      } else if (error.request) {
        console.error("No response received from server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  const handleEdit = (productId) => {
    const productToEdit = products.find((product) => product._id === productId);

    setNewProduct({
      name: productToEdit.name,
      totalPrice: productToEdit.totalPrice,
      totalDays: productToEdit.totalDays,
      monthlyPay: productToEdit.monthlyPay,
      weeklyPay: productToEdit.weeklyPay,
      dailyPay: productToEdit.dailyPay,
      moreDetails: productToEdit.moreDetails,
    });

    setProductId(productId); // Set productId state
    setFormMode("edit");
  };

  const handleUpdate = async () => {
    try {
      if (formMode === "edit") {
        // Update existing product
        const response = await axios.put(
          `http://localhost:3002/products/update/${productId}`,
          newProduct
        );

        if (response.status === 200) {
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product._id === productId
                ? { ...product, ...newProduct }
                : product
            )
          );
          setNewProduct({
            name: "",
            totalPrice: "",
            totalDays: "",
            monthlyPay: "",
            weeklyPay: "",
            dailyPay: "",
            moreDetails: [],
          });
          setProductId(null); // Reset productId state
          setFormMode("add"); // Reset formMode state to 'add'
        } else {
          console.error(
            "Failed to update product. Unexpected status code:",
            response.status
          );
        }
      } else {
        // Add new product
        const response = await axios.post(
          "http://localhost:3002/products/add",
          newProduct
        );

        if (response.status === 201) {
          setProducts((prevProducts) => [...prevProducts, response.data]);
          setNewProduct({
            name: "",
            totalPrice: "",
            totalDays: "",
            monthlyPay: "",
            weeklyPay: "",
            dailyPay: "",
            moreDetails: [],
          });
        } else {
          console.error(
            "Failed to add product. Unexpected status code:",
            response.status
          );
        }
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3002/products/delete/${productId}`
      );

      if (response.status === 200) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
      } else {
        console.error("Failed to delete product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
     <Helmet>
        <title>Vanmoh | Add Scheme</title>
      </Helmet>
    <div className="p-6 mx-auto my-8 bg-white rounded-md shadow-md">
      <div className="mx-4 mt-10 border-2 border-blue-400 rounded-lg md:mx-14">
        <div className="mt-6 font-bold text-center md:mt-10"> Add Your</div>
        <div className="mt-3 text-4xl font-bold text-center">
          Scheme for 304 Days
        </div>
        <div className="p-4 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              name="name"
              className="block w-full px-3 py-4 mt-1 bg-white border rounded-md shadow-sm md:w-1/2 border-slate-300 placeholder-slate-400 placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Scheme Name *"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <input
              type="number"
              name="totalPrice"
              className="block w-full px-3 py-4 mt-1 bg-white border rounded-md shadow-sm md:w-1/2 border-slate-300 placeholder-slate-400 placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Scheme Total Price *"
              value={newProduct.totalPrice}
              onChange={(e) =>
                setNewProduct({ ...newProduct, totalPrice: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-4 mt-5 mb-5 md:flex-row">
            <input
              type="number"
              name="totalDays"
              className="block w-full px-3 py-4 font-semibold text-gray-500 bg-white border rounded-md shadow-sm border-slate-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Scheme Total Days *"
              value={newProduct.totalDays}
              onChange={(e) =>
                setNewProduct({ ...newProduct, totalDays: e.target.value })
              }
            />
            <input
              type="number"
              name="monthlyPay"
              className="block w-full px-3 py-4 font-semibold text-gray-500 bg-white border rounded-md shadow-sm border-slate-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Monthly Pay *"
              value={newProduct.monthlyPay}
              onChange={(e) =>
                setNewProduct({ ...newProduct, monthlyPay: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="number"
              name="weeklyPay"
              className="block w-full px-3 py-4 mt-1 font-semibold text-gray-500 bg-white border rounded-md shadow-sm md:w-1/2 border-slate-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Weekly Pay *"
              value={newProduct.weeklyPay}
              onChange={(e) =>
                setNewProduct({ ...newProduct, weeklyPay: e.target.value })
              }
            />
            <input
              type="number"
              name="dailyPay"
              className="block w-full px-3 py-4 mt-1 font-semibold text-gray-500 bg-white border rounded-md shadow-sm md:w-1/2 border-slate-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Daily Pay *"
              value={newProduct.dailyPay}
              onChange={(e) =>
                setNewProduct({ ...newProduct, dailyPay: e.target.value })
              }
            />
          </div>
          <div className="my-4 md:my-6 md:flex md:flex-col md:gap-4">
            {/* More details input fields */}
            {newProduct.moreDetails.map((detail, index) => (
              <div key={index} className="flex gap-4">
                <input
                  type="text"
                  name={`columnName-${index}`}
                  className="block w-1/2 px-3 py-4 font-semibold text-gray-500 bg-white border rounded-md shadow-sm border-slate-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Column Name *"
                  value={detail.columnName}
                  onChange={(e) =>
                    handleMoreDetailsChange(index, "columnName", e.target.value)
                  }
                />
                <input
                  type="text"
                  name={`value-${index}`}
                  className="block w-1/2 px-3 py-4 font-semibold text-gray-500 bg-white border rounded-md shadow-sm border-slate-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Value *"
                  value={detail.value}
                  onChange={(e) =>
                    handleMoreDetailsChange(index, "value", e.target.value)
                  }
                />
                <button
                  type="button"
                  className="px-4 py-2 ml-2 font-medium text-white transition duration-150 ease-in-out bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600"
                  onClick={() => handleRemoveDetail(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="px-4 py-2 mt-2 font-medium text-white transition duration-150 ease-in-out bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600"
              onClick={handleAddDetail}
            >
              Add More Details
            </button>
          </div>
          <div className="text-center">
            {formMode === "add" ? (
              <button
                className="w-full px-4 py-3 text-sm font-semibold text-white bg-blue-700 rounded-lg cursor-pointer md:px-8 md:py-5 md:w-auto"
                type="button"
                onClick={addProduct}
              >
                Add Scheme
              </button>
            ) : (
              <button
                className="w-full px-4 py-3 text-sm font-semibold text-white bg-green-500 rounded-lg cursor-pointer md:px-8 md:py-5 md:w-auto"
                type="button"
                onClick={handleUpdate}
              >
                Update Scheme
              </button>
            )}
          </div>
        </div>
      </div>
      {products.length === 0 ? (
        <div>No Record</div>
      ) : (
        <div className="max-w-full mt-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  Product Name
                </th>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  Total Price
                </th>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  Total Days
                </th>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  Monthly Pay
                </th>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  Weekly Pay
                </th>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  Daily Pay
                </th>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  More Details
                </th>
                <th className="px-6 py-3 font-bold tracking-wider text-center text-gray-900 uppercase text-l">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products
                .slice()
                .reverse()
                .map((product) => (
                  <tr key={product._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.totalPrice}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.totalDays}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.monthlyPay}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.weeklyPay}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.dailyPay}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.moreDetails.slice(0, 3).map((detail, index) => (
                        <span key={index}>
                          {detail.value}
                          {index <
                            Math.min(2, product.moreDetails.length - 1) && ", "}
                        </span>
                      ))}
                      {product.moreDetails.length > 3 &&
                        `, ...( ${product.moreDetails.length} )`}
                    </td>

                    <td className="px-6 py-4 space-x-2 whitespace-nowrap">
                      <button
                        className="px-4 py-2 font-medium text-white transition duration-150 ease-in-out bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600"
                        onClick={() => handleEdit(product._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-4 py-2 ml-2 font-medium text-white transition duration-150 ease-in-out bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>
  );
};

export default Product;
