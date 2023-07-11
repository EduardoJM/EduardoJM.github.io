import React, { FC, ReactNode } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './article-item.module.css';

interface CardContainerProps {
  href: string;
  children: ReactNode;
}

const CardContainer: FC<CardContainerProps> = ({ href, children }) => (
  <Link
    href={href}
    target='_blank'
    className={clsx('card', styles.cardContainer)}
  >
    {children}
  </Link>
);

interface CardThumbProps {
  image: string;
}

const CardThumb: FC<CardThumbProps> = ({ image }) => (
  <img className={styles.cardThumb} src={image} loading='lazy' />
);

export interface ArticleItemProps {
  title: string;
  host: string;
  date: string;
  image?: string;
  link: string;
}

const ArticleItem: FC<ArticleItemProps> = ({
  title,
  host,
  image,
  date,
  link,
}) => (
  <CardContainer href={link}>
    {image && <CardThumb image={image} />}
    <div className='padding--lg'>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>
        Pubicado no {host} em {date}
      </p>
    </div>
  </CardContainer>
);

export default ArticleItem;
