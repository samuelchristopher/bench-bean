import React from "react"
import { Link } from "gatsby"
import styles from './nav.module.css'

const Nav = () => (
    <div>
        <div className={styles.logo} />
        <div className={styles.links__container}>
            <Link
                className={styles.link}
                to="/"
                activeClassName="active"
            >
                Beverages
            </Link>
            <Link
                className={styles.link}
                to="/about"
                activeClassName="active"
            >
                About
            </Link>
        </div>
    </div>
)

export default Nav