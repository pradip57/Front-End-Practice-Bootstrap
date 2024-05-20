import React, { ReactNode, useEffect, useState } from "react";

import styles from "./landing.page.module.css";
import "./landing.page.css";
type LandingPagePropsType = {
  name: string;
  email: string;
  address: string;
};

const paragraphStyle = {
  backgroundColor: "#cccccc",
  padding: "8px",
  margin: "50px",
};

const LandingPage = ({
  name,
  email,
  address,
}: LandingPagePropsType): ReactNode => {
  //state maintain
  // let [products, setProducts] = useState([]);
  // let [loading, setLoading] = useState();

  // useEffect(() => {
  //   console.log("I am always called if second argument is not send");
  // });

  // useEffect(() => {
  //   console.log("I am only called during loading of components");
  //   setTimeout(() => {
  //     setProducts([{}]);
  //     // setLoading(true)
  //   }, 3000);
  // }, []);

  // useEffect(() => {
  //   console.log(
  //     "I am only called when product state or name props get changed"
  //   );
  // }, [products, name]);

  return (
    <React.Fragment>
      <p
        className={`${styles.landingPageCss} ${styles.font}`}
        style={paragraphStyle}
      >
        <strong>Name :</strong>
        {name}
      </p>
      <p className="font landingPageCss" style={paragraphStyle}>
        <strong>Email :</strong>
        {email}
      </p>
      <p style={paragraphStyle}>
        <strong>Address :</strong>
        {address}
      </p>
    </React.Fragment>
  );
};
export default LandingPage;
