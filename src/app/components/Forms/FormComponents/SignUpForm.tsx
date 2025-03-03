"use client";

import { useState, useEffect } from "react";
import auth from "../../../utils/firebaseConfig";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import FormSection from "../FormSection/FormSection";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../contexts/AuthContext";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.replace("/my-notes");
    }
  }, [currentUser, router]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setSuccess(false);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signOut(auth);
      setSuccess(true);
      setMessage(
        "Account created successfully! Go back to the log in page to log in."
      );
    } catch {
      if (!email || !password) {
        setMessage("Please enter an email and password");
      } else {
        setMessage("Error creating account, please try again");
      }
    }
  };

  return (
    <FormSection
      title="Sign up to UserNotes"
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
      button="Sign Up"
      link={{
        title: "Already have an account? Log in here",
        href: "/",
      }}
      message={message}
      success={success}
      onButtonClick={handleSignUp}
    />
  );
};

export default SignUpForm;
