import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData=async ()=>{
  const data=await fetch(`${process.env.NEXTAUTH_URL}/api/categories`,{cache:"no-store"});

  if(!data.ok){
    throw new Error("Failed");
  }

  return data.json()
}


const CategoryList = async () => {

const data=await getData();


  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>

          

          {data.map((items)=>(

          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[items.slug]}`}
            key={items._id}
          >
            
              <Image
                src={items.img}
                alt={items.slug}
                width={32}
                height={32}
                className={styles.image}
              />
            {items.slug}
           
          </Link>))
          
          }
  
        
      </div>
    </div>
  );
};

export default CategoryList;