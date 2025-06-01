import {
  FacebookIcon,
  GoogleIcon,
  MacOsIcon,
  SpotifyIcon,
} from "@/public/spotify-auth";
import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Replicate Part 01 - Spotify Auth",
  description: "Alimnfl make replicate design for Content Tiktok.",
};

interface LOGIN_BUTTON {
  title: string;
  icon?: string | StaticImageData;
}

export default function Page() {
  const DATA_LOGIN: LOGIN_BUTTON[] = [
    { title: "Continue with Google", icon: GoogleIcon },
    { title: "Continue with Facebook", icon: FacebookIcon },
    { title: "Continue with Apple", icon: MacOsIcon },
    { title: "Continue with phone number" },
  ];

  return (
    <>
      <div className=" min-w-screen min-h-screen items-center relative w-full md:bg-black bg-[#121212] p-16 md:p-10 flex flex-col">
        <div
          className="hidden md:flex absolute min-w-screen min-h-screen -top-10"
          style={{
            background: "linear-gradient(to bottom, #303030 0%, #000000 90%)",
          }}
        ></div>
        <div className="flex flex-col items-center w-full gap-4 bg-[#121212] rounded-xl md:py-8 md:pb-14 relative max-w-[734px]">
          <div className="flex flex-col items-center gap-2 justify-center">
            <div className="md:w-[40px] w-[24px]">
              <Image src={SpotifyIcon} alt="test" />
            </div>
            <h2 className="font-[900] text-3xl">Log in to Spotify</h2>
          </div>
          <div className="flex flex-col max-w-[640px] md:max-w-[350px] w-full items-center gap-2 justify-center mt-3">
            {DATA_LOGIN.map((data, index) => (
              <button
                key={index}
                className="flex flex-row w-full duration-300 justify-center cursor-pointer border hover:border-gray-300 border-gray-500 font-semibold rounded-3xl p-3 relative"
              >
                {data.icon && (
                  <Image
                    src={data.icon}
                    alt="image sportify alimnfl reduplicate"
                    width={data.title === "Continue with Google" ? 25 : 20}
                    className="absolute left-4 md:left-6"
                  />
                )}
                <span>{data.title}</span>
              </button>
            ))}
          </div>
          <div
            className="border border-gray-500 max-w-[400px] md:max-w-[500px] justify-center text-center flex flex-col hover:border-gray-300 w-full my-6"
            style={{ height: "1px", transform: "scaleY(0.2)" }}
          ></div>
          <div className="flex flex-col gap-2 w-full text-sm max-w-[640px] md:max-w-[350px]">
            <h2 className="font-semibold ">Email or username</h2>
            <input
              placeholder="Email or username"
              className="p-3 border rounded-xs focus:outline-none focus:ring-0 border-gray-400 focus:border-gray-200 duration-300 hover:border-gray-200"
            />
          </div>
          <button className="max-w-[640px] md:max-w-[350px] rounded-3xl p-3 bg-[#1ED760] hover:scale-105 cursor-pointer font-semibold mb-[30px] text-black w-full">
            Continue
          </button>
          <div className="flex md:flex-row flex-col justify-center items-center w-full gap-2">
            <h3 className="text-gray-400 font-medium">
              Don't have an account?
            </h3>
            <p className="underline font-semibold hover:text-green-500 cursor-pointer">
              Sign up for Spotify
            </p>
          </div>
        </div>
        <div className="fixed w-full bottom-0 text-gray-300 p-8 text-xs items-center text-center justify-center flex bg-[#121212]">
          This site is protected by reCAPTCHA and the Google&nbsp;
          <span className="underline">Privacy Policy</span>&nbsp;and&nbsp;
          <span className="underline">Terms of Service</span>
          &nbsp;apply.
        </div>
      </div>
    </>
  );
}
