import React from "react";
import Card from "./Card";

const Userdetails = () => {
  const userDetails = {
    no: 1,
    marks: [1, 2, 3, 4],
    name: "rsp",
  };
  const subs = ["a", "d", "c"];
  return (
    <>
      <Card name="ravii" btnName="FindMe" user={userDetails} subjects={subs} />
      <Card />
    </>
  );
};

export default Userdetails;
