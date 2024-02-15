"use client";
import React, { useState } from "react";
import { app, db } from "@/db.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const page = () => {
  const [value, setValue] = useState({});
  const auth = getAuth();
  const collections = collection(db, "users");

  const changeInput = (e) => {
    const inputValue = { [e.target.name]: e.target.value };
    console.log(inputValue);
    setValue({
      ...value,
      ...inputValue,
    });
  };

  const addPostHandler = (e) => {
    e.preventDefault();

    addDoc(collections, {
      email: value.email,
      password: value.password,
      name: value.name,
      age: value.age,
    })
      .then((res) => alert("new user added"))
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
        <input
          name="name"
          placeholder="Name"
          type="text"
          onChange={(e) => changeInput(e)}
        />
        <input
          name="age"
          placeholder="Age"
          type="text"
          onChange={(e) => changeInput(e)}
        />
        <button type="submit" onClick={addPostHandler}>
          Add Post
        </button>
      </form>
    </>
  );
};

export default page;
