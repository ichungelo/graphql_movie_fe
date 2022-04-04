import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import background from "../assets/images/background.svg";
import Navbar from "../components/Navbar";

const LOGIN = gql`
  mutation Login($input: Login!) {
    login(input: $input)
  }
`;

const Login = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [login] = useMutation(LOGIN, {
    variables: {
      input: {
        username: form.username,
        password: form.password,
      },
    },
    onCompleted: ({ login }) => {
      localStorage.setItem("TOKEN", login);
      history.replace("/movies");
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <div className="min-h-screen w-screen bg-[#9BC3BF]">
      <Navbar button="Register" />
      <div className="flex flex-wrap justify-center pt-nav">
        <img className="fixed bottom-0 right-0 z-10" src={background} />
        <div className="z-20 bg-gray-100/90 rounded-xl m-20 p-3 h-72 w-bg">
          <div>
            <p className="font-dm text-center text-2xl mb-3">Login</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                login();
              }}
            >
              <div className="mb-5">
                <label className="font-dm">Username</label>
                <input
                  type={"text"}
                  placeholder="Username"
                  value={form.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                  className="h-8 w-full rounded-lg border-2 border-teal-700 px-3 focus:ring-teal-700 focus:ring-1 focus:outline-none font-md"
                />
              </div>
              <div className="mb-5">
                <label className="font-dm">Password</label>
                <input
                  type={"password"}
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="h-8 w-full rounded-lg border-2 border-teal-700 px-3 focus:ring-teal-700 focus:ring-1 focus:outline-none font-md"
                />
              </div>
              <button
                type="submit"
                className="bg-teal-700 w-28 h-10 rounded-full font-dm text-white hover:bg-teal-900 hover:text-xl transition duration-500 ease-in-out"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
