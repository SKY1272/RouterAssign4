import React from "react";
import styled from "./Section.module.css";
const Section = () => {
  return (
    <div>
      <img
        className={styled.homeImage}
        src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="img_not_found"
      />
    </div>
  );
};
export default Section;
