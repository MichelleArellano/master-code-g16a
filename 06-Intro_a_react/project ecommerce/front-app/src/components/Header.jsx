import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../css/header.css";

const Header = () => {
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
              <form className="d-flex justify-content-center">
                <input
                  id="search-name"
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button
                  id="search-name-btn"
                  className="btn btn-success"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modalLogin"
                  disabled
                >
                  Search
                </button>
              </form>
              <div>
                <button
                  id="search-name-btn"
                  className="btn btn-primary me-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modalLogin"
                  onClick={<Navigate replace to="/Home"></Navigate>}
                >
                  Sign In
                </button>
                <button
                  id="search-name-btn"
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modalLogin"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
