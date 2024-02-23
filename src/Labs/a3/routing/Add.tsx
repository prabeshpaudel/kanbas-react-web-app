import React from "react";
import { useParams } from "react-router-dom";

function Add() {
  const { arg1, arg2, arg3 } = useParams();
  return (
    <div> <h2>Add Path Parameters</h2>
      {arg1} + {arg2} = {parseInt(arg1 as string) + parseInt(arg2 as string)}
    </div>
  );
}
export default Add;