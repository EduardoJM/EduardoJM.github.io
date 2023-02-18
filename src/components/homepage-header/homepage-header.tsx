import React from 'react';
import clsx from 'clsx';
import styles from './homepage-header.module.css';


const HomepageHeader = () => {

    return (
        <header className={clsx({"hero hero--primary": true, [styles.pageHeader]: true })}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <h1>Eduardo Oliveira</h1>
                        <h2>Software Engineer</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum, erat vel aliquet feugiat, neque dui rutrum risus, at mattis magna lectus at felis. Proin eu felis non orci lobortis fermentum facilisis sit amet neque. Curabitur finibus libero eu facilisis pretium. Ut facilisis tristique velit, eget rutrum nulla pretium ac.</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomepageHeader;
