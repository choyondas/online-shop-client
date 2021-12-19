import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // handle delete function
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");

            const remainProduct = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainProduct);
          }
        });
    }
  };

  return (
    <div className="allProducts">
      <div className="container mt-5">
        <h1
          style={{
            color: "#c46212",
            fontSize: "60px",
            padding: "10px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {" "}
          All Products
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div className="col-lg-4 col-md-6 col-12">
              <div class="container">
                <div class="card">
                  <div class="imgBx">
                    <img className="w-50" src={product.img} />
                  </div>
                  <div class="contentBx">
                    <h2
                      style={{
                        color: "#c46212",
                        fontWeight: "bold",
                        fontSize: "30px",
                      }}
                    >
                      {product.name}
                    </h2>
                    <div class="size">
                      <h3>{product.description}</h3>
                    </div>
                    <div className="size">
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "#fc890a",
                        }}
                      >
                        ${product.price}
                      </h3>
                    </div>
                    <div>
                      <Rating
                        initialRating={product.rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color "
                        readonly
                      />
                    </div>
                    {/* <br />
                                    <Link to={`/placeorder/${product._id}`}> <button class="button-29 pt-2" role="button">Purches</button></Link> */}
                  </div>
                </div>

                <center>
                  {" "}
                  <button
                    className="btn btn-primary"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </center>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-5">
          <NavLink to="/home">
            <button class="button-82-pushable" role="button">
              <span class="button-82-shadow"></span>
              <span class="button-82-edge"></span>
              <span class="button-82-front text">Go Home Page</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
