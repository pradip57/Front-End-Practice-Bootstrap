import React, { ReactNode } from "react";



type LandingPagePropsType = {
  name: string;
  email: string;
  address: string;
};

const paragraphStyle = {backgroundColor:"#cccccc", textAlign:"center", padding:"8px"}

const LandingPage = ({ name, email,address }: LandingPagePropsType): ReactNode => {
  return (<React.Fragment>
    <p style={paragraphStyle}><strong>Name :</strong>{name}</p>
    <p><strong>Email :</strong>{email}</p>
    <p><strong>Address :</strong>{address}</p>
  </React.Fragment>);
};
export default LandingPage;
