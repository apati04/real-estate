import React from "react";

const background = "/img/kulula.jpg";

const style = {
  background: `url(${background}) no-repeat`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  height: "50px"
}

const PageHeader = ({ title }) => {
  return (
    <div className="text-center text-light" style={style}>
      <h1>{title}</h1>
    </div>
  );
}

export default PageHeader;
