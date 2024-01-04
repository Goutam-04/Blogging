
import styles from "./loginPage.module.css";

const LoginPage = () => {
  const status="authenticated";


  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} >
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
