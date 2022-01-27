/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { DetailedContentTemp } from "../DetailedContent/style";
import axios from "axios";
import { useParams } from "react-router";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const DetailedPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      setPhotos(response.data);
    };
    fetchData();
  }, []);
  return (
    <DetailedContentTemp>
      {photos
        .filter((it) => it.id == params.id)
        .map((item, idx) => {
          return (
            <>
              <h3 style={{ textAlign: "center" }} key={idx}>
                {item.title.toUpperCase()}
              </h3>
              <div style={{ margin: "0 auto" }}>
                <Zoom style={{ margin: "0 auto !important", position:"static" }}>
                  <img
                    alt="that wanaka tree"
                    src={item.url}
                    style={{
                      display: "block",
                      margin: "50px auto",
                      textAlign: "center",
                      width: "90%",
                    }}
                  />
                </Zoom>
              </div>
            </>
          );
        })}
    </DetailedContentTemp>
  );
};

export default DetailedPhotos;
