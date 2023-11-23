"use client";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import axios from "axios";
import { useEffect, useState } from "react";
const useCurrentUser = () => {
  const [data,setdata]=useState([])
  const {  error, isLoading, mutate } = useSWR(
    "/api/users/currentuser",
    fetcher
  );
  // const response =  axios.get('/api/users/currentuser');
  //console.log(!isLoading && data);

  const getdata = async () => {
    const response = await axios.get("/api/users/currentuser");
    setdata(response.data)
    console.log(response.data);
  };
  useEffect(() => {
    getdata();
  }, [mutate]);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
