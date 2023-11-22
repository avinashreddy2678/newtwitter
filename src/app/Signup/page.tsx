"use client";
import Link from "next/link";
import Image from "next/image";
import "@uploadthing/react/styles.css";
import axios from "axios";
import React from "react";
import { UploadButton } from "../../utils/uploadthing";
import { useRouter } from "next/navigation";
const Page = () => {
  const [disable, setdisable] = React.useState(true);
  const [userdata, setuserdata] = React.useState({
    email: "",
    password: "",
    name: "",
    imageurl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAgQMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABAUGAQIDB//EADgQAAICAAMDCQUGBwAAAAAAAAABAgMEBREhMUEGEiJRUmFxwdETIzJCkRQVgaGx8CQzNVNicoL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEpKMXKTSSWrb4AckfFYzD4Ve/tjF9ne3+BT5jncpN14N6R42cX4FNJuTcpNtve3xAvruUEF/Iocu+ctPyIss+xb+GFK/5b8yqJdOW4y6KlCiXNfGXR/UolRz7GLfGl93NfqSKeUO33+H0XXCXkV9uVY2uPOdDa/xal+hDaaejTTXBga/C5hhsVsqsXOfyy2MlGF8N5a5fnNtDVeJbsr7XzR9SDSg6VWQurjOuSlGW5o7gAAAAAAAAHuMznOZPFTdNL9xF7WvnfoWOf4x0UexrfTtW3uiZoAAScupV+Opre5y1fgtpUXWS5bGquOIujrbLbFP5V6luARQrs1y2GLrc4JK9bU183cyxAGF002PeusE/PKVTmE9FoppTX78SAVE7K8fLBWpPbTJ9KPV3o1UJRnCMoNOMlqmuKMOXvJ3F687Cze7bDzXmRV6AAAAAAHlirPZYa2xb4wb/IDKZpf9px1s9einzY+CIoBUCxyHT7zhr2ZafQriTltyox1NknpHnaPwezzA2IAIoAAM7yl0+1U9fM8ynLHPbldmElF7K0oev6lcVA9MPdLD313R3wep5gDcwkpwjKL1TWqZyQ8os9pltDb10jzfpsJhFAAAIua6/d2J0/tslHjjYe0wd8FvlW0voBiwAVAAAaXJsxjfXGi5pXR2LX5l6lqYiNdj0cK5vqaiyfTj8zpiopWyS7dbZFaggZpmEMHS1Fp3SXRj1d7KezMc0si1zbIp9mrQgTrubcrIWave5RYHRtybcm23tbfE4AKgAANTyf8A6bD/AGlp9SxIWSw5mWUrrTl9WTSKAAAAAMbjqHhsXbU1olLZ4cCOaDlFhHOEcVBbYdGfhwZCyXL1irHbavdQ4dp9RR1y7KbcWlZY3XV18ZeBf4bL8Lhl7umOvaltZJS0Wi3I5IAAAAACPiMFhsStLqYyfXpo1+JR5jk1lCdmGbsr4xfxR9TSADCnequVtka4fFN6Its9y5VfxVK0i304rh3jk9hHO14ma6MNkO98f33lRf1QVdca4/DFJI7AEUAAAAAcSipxcZJOLWjT4nnhqIYamNVS0jHceoAAAAAAAAAAADpbXG2uVc1rGS0aOKKYUUxqrWkYrRI9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=",
  });
  const router = useRouter();
  const handlesubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("api/users/Signup", userdata);
    if (res.data.status === 201) {
      alert("Sign up Sucess");
      router.push("/Login");
    }
  };
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 mt-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight">
            Join Now
          </h1>
        </div>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handlesubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  className="block w-full rounded-md border-0 py-1  shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  onChange={(e) => {
                    !disable
                      ? userdata.name
                      : setuserdata({ ...userdata, name: e.target.value });
                  }}
                />
              </div>
            </div>

            {/* DP */}
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 "
              >
                Cover photo (optional)
              </label>
              <div className="mt-1 flex justify-center rounded-lg border border-dashed  px-6 py-4">
                <div className="text-center">
                  <div className="mt-1 flex text-sm leading-6 ">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md  font-semibold text-indigo-600 outline-none focus-within:outline-none  focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <div className="flex align-middle flex-col items-center w-100">
                        <UploadButton
                          appearance={{
                            button:
                              "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-blue-500 bg-none after:bg-blue-600",
                            container:
                              "w-max flex-row rounded-md border-cyan-300",
                            allowedContent:
                              "flex h-8 flex-col items-center justify-center bg-white px-2 text-black",
                          }}
                          endpoint="imageUploader"
                          onClientUploadComplete={(res: any) => {
                            setuserdata({
                              ...userdata,
                              imageurl: res[0].url,
                            });
                            console.log(res[0].url)
                            alert("Upload Completed");
                            setdisable(true);
                          }}
                          onUploadError={(error: Error) => {
                            alert(`ERROR! ${error.message}`);
                          }}
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => {
                    setuserdata({ ...userdata, email: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 "
                >
                  Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => {
                    setuserdata({ ...userdata, password: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Had an account?{" "}
            <Link
              href="/Login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
