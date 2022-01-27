/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import { userContext } from "../../Context";
import styled from "styled-components";
import axios from "axios";
import {
  AllContentGrid,
  AllContentBorderItem,
  AllContentCreator,
} from "./styled";
import EllipsisText from "react-ellipsis-text";

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  display: flex;
  margin: 0 auto 2rem;
  flex-direction: row;
  list-style-type: none;
  width: 60%;
  justify-content: center;
  padding: 0 5rem;
  li a {
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 20px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: not-allowed;
  }
`;

const AllContent = () => {
  const [data, setData] = useState([]);
  const users = useContext(userContext);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    };
    fetchData();
    const endOffset = itemOffset + 9;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / 9));
  }, [itemOffset,data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 9) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <AllContentGrid>
        {currentItems &&
          currentItems.map((data) => (
            <AllContentBorderItem to={`/content/${data.id}`}>
              <h5 style={{marginBottom:"10px"}}>
                <EllipsisText text={data.title.toUpperCase()} length={30} />
              </h5>
              {users.users.length !== 0 ? (
                  <AllContentCreator>
                  <h6 style={{fontStyle:"italic"}}>{users.users[data.userId - 1].name}</h6>
                  <h6 style={{fontStyle:"italic"}}>{users.users[data.userId - 1].company.name}</h6>
                </AllContentCreator>
              ) : null}
              <p>
                {data.body}
              </p>
            </AllContentBorderItem>
          ))}
      </AllContentGrid>
      <MyPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default AllContent;
