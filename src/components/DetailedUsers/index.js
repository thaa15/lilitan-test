/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable eqeqeq */
import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../../Context";
import { useParams } from "react-router";
import axios from "axios";
import { DetailedContentTemp } from "../DetailedContent/style";
import { DetailedUserPhotos } from "./style";
import { Link } from "react-router-dom";

const DetailedUsers = () => {
  const [data, setData] = useState([]);
  const [photos, setPhotos] = useState([]);
  const params = useParams();
  const users = useContext(userContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/albums`
      );
      setData(response.data);
    };
    fetchData();
    const fetchData2 = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      setPhotos(response.data);
    };
    fetchData2();
  }, []);
  return (
    <>
      {users.users.length !== 0 && data.length !== 0 ? (
        <DetailedContentTemp>
          <h2>{users.users[params.id - 1].name}</h2>
          <h6>Email: {users.users[params.id - 1].email}</h6>
          <h6>
            Address:
            {users.users[params.id - 1].address.street}{" "}
            {users.users[params.id - 1].address.suite}{" "}
            {users.users[params.id - 1].address.city}{" "}
          </h6>
          <h6>Company: {users.users[params.id - 1].company.name}</h6>
          {data
            .filter((it) => it.userId == params.id)
            .map((item, idx) => {
              return (
                <>
                  <h5
                    style={{ textAlign: "center", margin: "20px auto" }}
                    key={idx}
                  >
                    {item.title}
                  </h5>
                  <DetailedUserPhotos>
                    {photos
                      .filter((dats) => dats.albumId == item.id)
                      .map((items) => {
                        return (
                          <Link to={`/photos/${items.id}`} style={{ display: "block" }}>
                            <img
                              src={items.thumbnailUrl}
                              alt={`photo ${items.id}`}
                              style={{width:"fit-content"}}
                            />
                          </Link>
                        );
                      })}
                  </DetailedUserPhotos>
                </>
              );
            })}
        </DetailedContentTemp>
      ) : <p>Loading...</p>}
    </>
  );
};

export default DetailedUsers;
