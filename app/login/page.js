"use client";
import React, { useState } from "react";
import { app } from "@/db.config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
const page = () => {
  const [value, setValue] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const changeInput = (e) => {
    const inputValue = { [e.target.name]: e.target.value };

    setValue({
      ...value,
      ...inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((res) => console.log(res.user))
      .catch((err) => alert(err.message));
  };

  const GoogleHandler = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
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
          Sign In
        </button>
        <button onClick={GoogleHandler}>Sign in with google</button>
      </form>
    </>
  );
};

export default page;
