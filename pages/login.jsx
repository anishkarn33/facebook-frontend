import Head from "next/head";
import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("coming soon, veryyy sooooon");
  };
  return (
    <>
    <Head>
        <title>Login</title>
    </Head>
      <div className="h-full flex flex-col items-center justify-center">
        <form
          className="w-96 h-96 border rounded-xl p-6 flex flex-col justify-between"
          onSubmit={onSubmit}
        >
          <h1 className="text-3xl self-center pb-4 text-gray-700">Login</h1>
          <Input type="text" placeholder="user@example.com" />
          <Input type="password" placeholder="Password" className="-mt-2" />
          <Button className="mt-4" type="submit">
            Login
          </Button>
          <p className="text-center mt-2 text-gray-700 hover:text-blue-500">
            Don't have an account yet?{" "}
            <Link href="/signup">
              <a href="/signup">Sign Up</a>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
