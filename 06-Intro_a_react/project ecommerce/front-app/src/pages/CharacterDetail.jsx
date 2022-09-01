import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import HeaderCharacterDetail from "../components/HeaderCharacterDetail";
import { getItemsById } from "../calls/actions.js";
import "../css/characterdetail.css";

const CharacterDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  console.log("location", location);

  const [infoCharacter, setInfoCharacter] = useState({});

  useEffect(() => {
    getItemsById(params.id).then((res) => {
      console.log("Items");
      console.log(res);
      setInfoCharacter(res);
      console.log(`character array ${infoCharacter}`);
    });
  }, [params.id]);

  return (
    <>
      <HeaderCharacterDetail></HeaderCharacterDetail>
      <main>
        <section className="d-flex justify-content-around">
          <div className="pt-sm-4 card">
            <h1 className="mb-3 font-weight-normal text-center">
              {infoCharacter.product_name}
            </h1>
            <p className="p-class font-weight-bold">Product id: </p>
            <p className="p-class-ids">{infoCharacter._id}</p>
            <p className="p-class font-weight-bold">Sku: </p>
            <p className="p-class-ids">{infoCharacter.sku}</p>
            <div>
              <div className="text-center">
                <img
                  className="mt-3 shadow-lg p-3 mb-4 bg-body rounded"
                  src={infoCharacter.image}
                  alt="logoProduct"
                  height="200"
                />
              </div>
            </div>
          </div>
          <div className="pt-sm-4 card">
            <h3 className="mb-3 font-weight-normal text-center">
              Product details:
            </h3>
            <p className="p-class-ids mb-4">{infoCharacter.description}</p>
            <p className="p-class font-weight-bold">Price: </p>
            <p className="p-class font-weight-bold">$ {infoCharacter.price}</p>
            <p className="p-class">Brand: </p>
            <p className="p-class-ids font-weight-bold">
              {infoCharacter.brand}
            </p>

            <p className="p-class">Category: </p>
            <p className="p-class-ids font-weight-bold">
              {infoCharacter.category}
            </p>
            <p className="p-class font-weight-bold">Created at: </p>
            <p className="p-class-ids">{infoCharacter.updatedAt}</p>
          </div>
        </section>
      </main>
      <div class="float-button">
        <button onClick={() => navigate(-1)} class="button-mark" target="_blank">
          <span class="material-icons-outlined">arrow_back</span>
        </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CharacterDetail;
