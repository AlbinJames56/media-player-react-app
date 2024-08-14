import React from "react";
import Add from "../Componets/Add";
import View from "../Componets/View";
import Category from "../Componets/Category";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="container mt-3 mb-3 d-flex justify-content-between">
        <div className="add-videos">
          <Add />
        </div>
        <Link
          to={"/watch-history"}
          style={{ textDecoration: "none", color: "blueviolet" }}
        >
          Watch History{" "}
          <i class="fa-solid fa-arrow-right-bracket fa-beat-fade"></i>
        </Link>
      </div>
      <div className="container-fluid m-5 mb-1 row">
        <div className="all-vedios col-lg-9">
          <h2>All Videos</h2>
          <View />
        </div>
        <div className="category col-lg-3">
          <Category />
        </div>
      </div>
    </>
  );
}

export default HomePage;
