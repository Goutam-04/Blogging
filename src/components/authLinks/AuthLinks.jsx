import React from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link'

const AuthLinks = () => {

  const status="authenticated"
  return (
    <>
    {(status==="notauthenticated") ?
      (<Link href="/login" className={styles.Link}>LogIn</Link>):
        (<div>

        <Link href="/write" className={styles.Link}>Write</Link>
          <span className={styles.Link}>LogOut</span>
        </div>)
    }

    </>
  )
}

export default AuthLinks