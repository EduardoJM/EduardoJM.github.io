import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from '@docusaurus/Link';
import OutlineButton from '../outline-button';
import styles from './homepage-portfolio.module.css';

export interface HomepagePortfolioItemProps {
  image: string;
  tag: string;
  title: string;
  link: string;
}

const HomepagePortfolioItem = (props: HomepagePortfolioItemProps) => {
  const { image, link, tag, title } = props;

  return (
    <div className={styles.item}>
      <div
        className={styles.thumb}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <span className={styles.tag}>{tag}</span>
      </div>

      <h3>{title}</h3>

      <Link to={link} className={styles.seeRow}>
        <OutlineButton className={styles.button}>
          See Full Project
          <AiOutlineArrowRight size={16} />
        </OutlineButton>
      </Link>
    </div>
  );
};

export default HomepagePortfolioItem;
