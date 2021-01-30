import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import '../styles.css'

export default function Spinner({ message }) {
  // return <p>{message}</p>;
  return <Loader className="Spinner" type="TailSpin" color="#3f51b5" height={600} width={600} />;
}
