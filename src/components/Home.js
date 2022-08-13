import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../css/styles.css";


//TERMINAL COMMANDS:
// git push heroku main
// heroku open

//useEffect keeps track of every re-render.
//You want to run axios everytime the page loads, so useEffect takes care of that.

const Home = () => {
  const [products, setProducts] = useState([]);
  //You can never modify any state without using its setter
  //If I want to save a value to products, it must be passed as an argument to the setter

  //Add a promise that throws an error if the page has to refresh
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      console.log(res.data);
      setProducts(res.data); //products = res.data
    });
  }, []);

  //Put all dependencies (variables) into the empty array.
  //If I want it to run only once irrespective of the situation, just leave empty array.

  return (
    <>
      <div className="sale">
        <h1>10% Off on sign up (Today Only!)</h1>
      </div>
      <input type="text" id="search" placeholder="Fjallraven, Casual, Mens " />
      <div className="categories">
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Accessories</li>
          <li>Electronics</li>
        </ul>
      </div>
      <div className="container">
        {/* We can write JSX within the return statement through the map function */}
        {products.map((product) => {
          return (
            <div className="card" key={product.id}>
              {/* Always apply a key to parent when bringing new info from axios */}
              {/* Create a card design, add to cart button, cart page where we list cart itesm. Will need
              another state variable for saving data in the cart. Once we click on cart, we can have a handler
              on it that pushes it to cart array and then transfers it to a different component.
              
              Search for cart designs online.*/}
              <div className="img-box">
                <img src={product.image} alt="all the items as practice" />
              </div>
              <div className="content">
                <div className="clothing-title-div">
                  <h3 className="clothing-title">{product.title}</h3>
                </div>
                <div className="clothing-price-div">
                  <p className="clothing-price">${product.price.toFixed(2)}</p>
                  <p className="clothing-count">
                    {product.rating.count} in stock
                  </p>
                  <p className="clothing-count">
                    {product.rating.rate}/5 Stars
                  </p>
                  <div className="button-div">
                    <button className="btn-1">Add to Cart</button>
                    <button className="btn-2">Details</button>
                  </div>
                </div>
                <div className="clothing-desc-div">
                  <p className="clothing-description">{product.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;