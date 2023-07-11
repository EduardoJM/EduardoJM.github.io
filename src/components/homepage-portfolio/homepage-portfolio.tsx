import Link from '@docusaurus/Link';
import React from 'react';
import Button from '../button';
import HomepagePortfolioItem from './homepage-portfolio-item';
import styles from './homepage-portfolio.module.css';

const HomepagePortfolio = () => {
  return (
    <section>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.titleBar}>
            <div className={styles.text}>
              <h2>Portfolio</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                enim quis lectus varius pulvinar. Curabitur luctus sit amet nunc
                id rhoncus.
              </p>
            </div>
          </div>

          <div className={styles.grid}>
            <HomepagePortfolioItem
              image='https://raw.githubusercontent.com/inventare/django-image-uploader-widget/main/docs/static/img/beautiful.gif'
              link='/portfolio/image-uploader-widget'
              tag='Django-Admin'
              title='Image Uploader Widget'
            />
          </div>

          <Link to='/portfolio' className={styles.allRow}>
            <Button>View All</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepagePortfolio;
