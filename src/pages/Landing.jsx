import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import background from "../assets/images/background.svg";
import Navbar from "../components/Navbar";

const REGISTER = gql`
  mutation Register($input: Register!) {
    register(input: $input)
  }
`;

const Landing = () => {
  const history = useHistory()
  const [form, setform] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const [register] = useMutation(REGISTER, {
    variables: {
      input: {
        username: form.username,
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        password: form.password,
        confirmPassword: form.confirmPassword,
      },
    },
    onCompleted: ({register}) => {
      localStorage.setItem("TOKEN", register)
      history.replace("/movies")
    },
    onError: (error) => {
      alert(error)
    }
  });

  return (
    <div className="w-screen min-h-screen bottom-0 bg-[#9BC3BF]">
      <Navbar button="Login" />
      <div className=" flex flex-wrap justify-center pt-nav">
        <img className="fixed bottom-0 right-0 z-10" src={background} />
        <div className="basis-2/3 z-20">
          <div className="font-dm text-gray-100 m-6">
            <p className="text-3xl text-center my-6">Welcome to Movie app</p>
            <p className="text-justify">
              App to review your movie Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sed, corrupti! Qui ab fugiat facilis vitae
              corporis repellendus dicta, praesentium et aut similique delectus
              inventore accusantium consectetur commodi labore ullam, eos nobis
              fuga nam laboriosam necessitatibus iusto consequatur. Amet veniam,
              error, ad perferendis est ea rerum unde adipisci eum dolore enim
              voluptatem soluta. Inventore exercitationem deserunt facere
              doloremque tenetur, iusto atque expedita fuga commodi in similique
              sit iste veritatis! Quasi possimus aut quos nisi voluptas maxime
              veritatis sed. Omnis itaque ipsa autem nobis quidem tempora qui
              eum? Aliquid deserunt dolore expedita voluptatum accusamus tempora
              magnam voluptates, modi, animi, ipsam perspiciatis culpa.
            </p>
          </div>
        </div>
        <div className="basis-1/3 z-20">
          <div className="bg-gray-100/90 rounded-xl m-3 p-3 h-bg w-96">
            <p className="font-dm text-center text-2xl mb-3">Register</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                register();
              }}
            >
              <div className="mb-5">
                <label className="font-dm">Username</label>
                <input
                  type={"text"}
                  placeholder="Username"
                  value={form.username}
                  onChange={(e) =>
                    setform({ ...form, username: e.target.value })
                  }
                  className="h-8 w-full rounded-lg border-2 border-teal-700 px-3 focus:ring-teal-700 focus:ring-1 focus:outline-none font-md"
                />
              </div>
              <div className="mb-5">
                <label className="font-dm">Email</label>
                <input
                  type={"email"}
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setform({ ...form, email: e.target.value })}
                  className="h-8 w-full rounded-lg border-2 border-teal-700 px-3 focus:ring-teal-700 focus:ring-1 focus:outline-none font-md"
                />
              </div>
              <div className="flex flex-row mb-5">
                <div className="basis-1/2 mr-1">
                  <label className="font-dm">First Name</label>
                  <input
                    type={"text"}
                    placeholder="First name"
                    value={form.firstName}
                    onChange={(e) =>
                      setform({ ...form, firstName: e.target.value })
                    }
                    className="h-8 w-full rounded-lg border-2 border-teal-700 px-3 focus:ring-teal-700 focus:ring-1 focus:outline-none font-md"
                  />
                </div>
                <div className="basis-1/2 ml-1">
                  <label className="font-dm">Last Name</label>
                  <input
                    type={"text"}
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={(e) =>
                      setform({ ...form, lastName: e.target.value })
                    }
                    className="h-8 w-full rounded-lg border-2 border-teal-700 px-3 focus:ring-teal-700 focus:ring-1 focus:outline-none font-md"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="font-dm">Password</label>
                <input
                  type={"password"}
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) =>
                    setform({ ...form, password: e.target.value })
                  }
                  className="h-8 w-full rounded-lg border-2 border-teal-700 px-3 focus:ring-teal-700 focus:ring-1 focus:outline-none font-md"
                />
              </div>
              <div className="mb-5">
                <label className="font-dm">Confirm Password</label>
                <input
                  type={"password"}
                  placeholder="Confirm password"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setform({ ...form, confirmPassword: e.target.value })
                  }
                  className="h-8 w-full rounded-lg border-2 border-teal-700 px-3 focus:ring-teal-700 focus:ring-1 focus:outline-none font-md"
                />
              </div>
              <button
                type="submit"
                className="bg-teal-700 w-28 h-10 rounded-full font-dm text-white hover:bg-teal-900 hover:text-xl transition duration-500 ease-in-out"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
