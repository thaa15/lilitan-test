/* eslint-disable eqeqeq */
import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../../Context";
import { useParams } from "react-router";
import axios from "axios";
import { DetailedContentTemp, CommentSection, CommentPart } from "./style";
import { Link } from "react-router-dom";
import EllipsisText from "react-ellipsis-text";
import {
  AllContentGrid,
  AllContentBorderItem,
  AllContentCreator,
} from "../AllContent/styled";

const DetailedContent = () => {
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const [dataart, setDataart] = useState([]);
  const [dataslice, setDataslice] = useState(0);
  const params = useParams();
  const users = useContext(userContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      setData(response.data);
    };
    fetchData();
    const fetchData2 = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      setComments(response.data);
    };
    fetchData2();
    const fetchData3 = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setDataart(response.data);
    };
    fetchData3();
    setDataslice(Math.floor(Math.random() * dataart.length))
  }, [dataart.length, params.id]);
  return (
    <>
      {data.length !== 0 && users.users.length !== 0 ? (
        <DetailedContentTemp>
          <h3 style={{ marginBottom: "10px" }}>{data.title.toUpperCase()}</h3>
          <h6>{data.body}</h6>
          <p>
            <b>Author:</b>{" "}
            <Link to={`/users/${users.users[data.userId - 1].id}`}>{users.users[data.userId - 1].username}</Link>
          </p>
          <CommentSection>
            <h5 style={{ color: "white" }}>Comment Section</h5>
            {comments
              .filter((it) => it.postId == params.id)
              .map((item, idx) => {
                return (
                  <CommentPart key={idx}>
                    <h6 class="bold">{item.name}</h6>
                    <p>{item.body}</p>
                  </CommentPart>
                );
              })}
          </CommentSection>
          <h5>Artikel Lainnya</h5>
          <AllContentGrid>
            {dataart
              .slice(
                dataslice,
                dataslice + 3
              )
              .map((items) => (
                <AllContentBorderItem to={`/content/${items.id}`}>
                  <h5 style={{ marginBottom: "10px" }}>
                    <EllipsisText text={items.title.toUpperCase()} length={30} />
                  </h5>
                  {users.users.length !== 0 ? (
                    <AllContentCreator>
                      <h6 style={{ fontStyle: "italic" }}>
                        {users.users[items.userId - 1].name}
                      </h6>
                      <h6 style={{ fontStyle: "italic" }}>
                        {users.users[items.userId - 1].company.name}
                      </h6>
                    </AllContentCreator>
                  ) : null}
                  <p>{items.body}</p>
                </AllContentBorderItem>
              ))}
          </AllContentGrid>
        </DetailedContentTemp>
      ) : <p>Loading...</p>}
    </>
  );
};

export default DetailedContent;
