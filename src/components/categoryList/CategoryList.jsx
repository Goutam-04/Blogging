import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";


const CategoryList = async () => {


  //TESTING ONLY

  // const getData = async () => {
  //   const res = await fetch("http://localhost:3000/api/categories");
  //   return res.json();
  // };
  // console.log(getData);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
       
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            style
           
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.food}`}
          >
            
              <Image
                src="/food.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            food
           
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            style
           
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            style
           
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            style
           
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            
              <Image
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            style
           
          </Link>
  
        
      </div>
    </div>
  );
};

export default CategoryList;