import React from "react";

const index = () => {
  return (
    <>
      <footer className="bg-light text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © {new Date().getFullYear()} Copyright:
          <a className="text-dark" href="#">
            React Shop
          </a>
        </div>
      </footer>
    </>
  );
};

export default index;
