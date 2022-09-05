import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../css/header.css";

const HeaderHome = ({ searchData }) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="../src/img/logo.png" alt="logo" />
              Little Foot Print
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex justify-content-center position-class">
                <input
                  id="search-name"
                  className="form-control me-2"
                  type="search"
                  placeholder="Search by product"
                  aria-label="Search"
                  onChange={(event) => searchData(event)}
                ></input>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderHome;
