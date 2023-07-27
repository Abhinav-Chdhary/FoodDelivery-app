import React from "react";

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);

  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        className="card-img-top"
        src={props.imagelink}
        alt="Card cap"
        style={{ height: "140px", objectFit: "fill" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {/* <p className="card-text fs-6">{props.description}</p> */}
        <div className="container w-100">
          <select className="m-2 h-100 bg-success rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className="d-inline fs-5">Price</div>
        </div>
      </div>
    </div>
  );
}
