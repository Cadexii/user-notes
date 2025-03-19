"use client";

import { useState, useEffect } from "react";
import { auth } from "../../../utils/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import FormSection from "../FormSection/FormSection";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../contexts/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.replace("/my-notes");
    }
  }, [currentUser, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      if (!email || !password) {
        setMessage("Please enter an email and password");
      } else {
        setMessage("Invalid email or password");
        setEmail("");
        setPassword("");
      }
    }
  };

  return (
    <FormSection
      container
      pageWidth
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
      message={message}
      onButtonClick={handleLogin}
    />
  );
};

export default LoginForm;
