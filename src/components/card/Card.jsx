import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({key,item}) => {
  return (
    <div className={styles.container} key={key}>
     
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            11.02.2023
          </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>Have you met the ultimate movers and packers of the tech world? If not, say hello to Docker & Kubernetes. Docker efficiently packs your daily apps into super-portable containers, just like those magic boxes movers use to keep everything snug. On the other hand, Kubernetes relocates these containers, ensuring your apps land precisely where required.</p>
       
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;