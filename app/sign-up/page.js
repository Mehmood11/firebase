"use client";
import React, { useState } from "react";
import { app } from "@/db.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const page = () => {
  const [value, setValue] = useState({});
  const auth = getAuth();

  const changeInput = (e) => {
    const inputValue = { [e.target.name]: e.target.value };
    console.log(inputValue);
    setValue({
      ...value,
      ...inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((res) => console.log(res.user))
      .catch((err) => alert(err.message));
  };
  return (
    <>
      <form>
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={(e) => changeInput(e)}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => changeInput(e)}
        />
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default page;
