import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="h-[60vh] flex justify-center items-center">
        <section className="text-center font-bold">
          <h1 className="mb-4 text-5xl font-bold transition-transform duration-500 ease-in-out hover:scale-105">
            Welcome to Local Chat LLM
          </h1>
          <hr className="my-4 border-gray-300" />
          <p className="my-4 text-lg text-gray-700 transition-opacity duration-500 ease-in-out hover:opacity-80">
            Chat with Your Local LLM
          </p>
          <a href="/login">
            <Button className="bg-amber-600 hover:bg-amber-500 py-4 px-6 text-white font-semibold rounded transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
              Get Started
            </Button>
          </a>
        </section>
      </div>
    </>
  );
}

export default Home;
