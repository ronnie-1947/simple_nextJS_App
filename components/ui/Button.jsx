import React, { Children } from 'react'
import Link from 'next/link'

import styles from './Button.module.css'

const Button = ({ link, action, children }) => {
    if (link) {
        return (
            <React.Fragment>
                <Link href={link}>
                    <a className={styles.btn}>{children}</a>
                </Link>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <button onClick={action} className={styles.btn}>{children}</button>
        </React.Fragment>
    )
}

export default Button
