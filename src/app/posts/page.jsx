import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

// const getData = async ()=>{
//   const data = await fetch("http://localhost:3000/api/posts",{cache:"no-store"})
//   if (!data.ok) {
//     throw new Error("Failed");
//   }

//   return data.json();
// }


const SinglePage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            aerya are taer tare taera reaer taae t
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/culture.png" alt="" fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>Goutam</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src="/culture.png" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} />
          Have you met the ultimate movers and packers of the tech world? If
          not, say hello to Docker & Kubernetes. Docker efficiently packs your
          daily apps into super-portable containers, just like those magic boxes
          movers use to keep everything snug. On the other hand, Kubernetes
          relocates these containers, ensuring your apps land precisely where
          required. Ready to trade chaos for calm and become a pro at building
          top-tier apps with Docker & Kubernetes? Join this Scaler Masterclass
          with Naman Bhalla on Tuesday, January 9th at 7:30 PM to understand the
          fundamentals of containerisation and learn how to deploy, test as well
          as build apps using containers.
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
