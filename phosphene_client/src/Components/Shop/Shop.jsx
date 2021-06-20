import React, { useState, useEffect } from "react";
import style from "./Shop.module.css";
import { SRLWrapper } from "simple-react-lightbox";
import { useParams } from "react-router-dom";
import loader from "../../images/loader.gif";

const options = {
  settings: {
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    showDownloadButton: false,
    showFullscreenButton: false,
    showAutoplayButton: false,
  },
  caption: {
    captionColor: "#ffffff",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "200",
  },
};

function Shop(props) {
  console.log("im rendering");

  let [state, setState] = useState(props.state.shop);
  let [fetching, setFetching] = useState(props.state.shop.isFetching);
  let { collection } = useParams();
  if (
    collection !== "earrings" &&
    collection !== "brooches" &&
    collection !== "pendants"
  ) {
    collection = "brooches";
  }
  useEffect(() => {
    return props[collection]();
  }, [collection]);

  useEffect(() => {
    setState(props.state.shop);
    setFetching(props.state.shop.isFetching);
  }, [props.state.shop]);
  let items = state.shopData.map((elem) => {
    return (
      <div className={style.item} key={elem.id}>
        <img
          className={style.image}
          src={"data:image/png;base64," + elem.base64}
          alt={elem.description}
          width="300"
          height="300"
        />
      </div>
    );
  });
  return (
    <SRLWrapper options={options}>
      <div className={style.shopImage}>
        {fetching ? <img src={loader} alt="loader" /> : items}
      </div>
    </SRLWrapper>
  );
}

export default Shop;
