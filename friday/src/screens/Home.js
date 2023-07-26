import { React, useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";

export default function Home() {
  const [search, setsearch] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    //console.log(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel id="CaroCaro" />
      </div>
      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem !== [] ? (
                  foodItem
                    .filter((item) => item.CategoryName === data.CategoryName)
                    .map((filterItems) => {
                      return (
                        <div
                          className="col-12 col-md-6 col-lg-3"
                          key={filterItems._id}
                        >
                          <Card
                            name={filterItems.name}
                            imagelink={filterItems.img}
                            description={filterItems.description}
                            options={filterItems.options[0]}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>No such data</div>
                )}
              </div>
            );
          })
        ) : (
          <div>.....</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
