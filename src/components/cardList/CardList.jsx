import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async () => {
  const data = await fetch(
    `http://localhost:3000/api/posts`,
    {
      cache: "no-store",
    }
  );

  if (!data.ok) {
    throw new Error("Failed");
  }

  return data.json();
};

const CardList = async () => {

  const posts = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
        <Pagination/>
    </div>
  );
};

export default CardList;