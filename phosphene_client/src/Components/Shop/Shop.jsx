import React, { useState, useEffect } from "react";
import style from "./Shop.module.css";
import { SRLWrapper } from "simple-react-lightbox";
import { useParams } from "react-router-dom";

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
    captionFontWeight: "300",
  },
};

function Shop(props) {
  console.log("im rendering");

  const [state, setState] = useState(props.state.shop);

  const { collection } = useParams();

  useEffect(() => {
    return props[collection]();
  }, [collection]);

  let items = state.shopData.map((elem) => {
    return (
      <div className={style.item} key={elem.id}>
        <img
          className={style.image}
          src={"data:image/png;base64," + elem.base64}
          alt={elem.desc}
          width="300"
          height="300"
        />
      </div>
    );
  });
  return (
    <SRLWrapper options={options}>
      <div className={style.shopImage}>{items}</div>
    </SRLWrapper>
  );
}

export default Shop;
