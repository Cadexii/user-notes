"use client";

import { useState } from "react";
import auth from "../../../utils/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import FormSection from "../FormSection/FormSection";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully");
    } catch {
      if (!email || !password) {
        setMessage("Please enter an email and password");
      } else {
        setMessage("Invalid email or password");
      }
    }
  };

  return (
    <FormSection
      title="Welcome to UserNotes!"
      inputs={[
        {
          type: "email",
          placeholder: "Email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
        },
        {
          type: "password",
          placeholder: "Password",
          value: password,
          onChange: (e) => setPassword(e.target.value),
        },
      ]}
      button="Login"
      link={{
        title: "Don't have an account? Sign up here",
        href: "#",
      }}
      message={message}
      onButtonClick={handleLogin}
    />
  );
};

export default LoginForm;
