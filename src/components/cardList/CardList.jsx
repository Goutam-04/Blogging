import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async (page) => {
  const data = await fetch(
    `http://localhost:3000/api/posts?page=${page}`,
    {
      cache: "no-store",
    }
  );

  if (!data.ok) {
    throw new Error("Failed");
  }

  return data.json();
};

const CardList = async (page) => {

  const {posts,count} = await getData(page);

  const postPerPage = 2;

  const hasPrev = postPerPage * (page - 1) > 0;
  const hasNext = postPerPage * (page - 1) + postPerPage < count;


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;