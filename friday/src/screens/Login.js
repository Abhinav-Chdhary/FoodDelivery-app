import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) alert("Enter Valid Credentials");
    else {
      localStorage.setItem("authToken", json.authToken);
      //console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };
  const onChangeHandler = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChangeHandler}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={onChangeHandler}
            id="exampleInputPassword1"
            placeholder="password@123"
          />
        </div>

        <hr />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <Link to="/signup" className="m-3 btn btn-danger">
          Sign up
        </Link>
      </form>
    </div>
  );
}
