import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  let data = useLoaderData();
  //   let [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/masterravi01")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         setData(res);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data?.followers}
      <img src={data?.avatar_url} alt="pic" width={200} />
    </div>
  );
};

export default Github;

export const githubLoader = async () => {
  try {
    const response = await fetch("https://api.github.com/users/masterravi01");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    throw error; // Ensure error is caught by the route error boundary
  }
};
