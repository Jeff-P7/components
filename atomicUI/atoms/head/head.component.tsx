import React, { FC } from 'react';
import IHead from './head';
import HeadProps from './head.props';
import { default as NextHead } from 'next/head';

interface IProps extends IHead {}

/**
 * Head Component
 */
export const Head: FC<IProps> = (props): JSX.Element => {
  const { description, title, icon } = props;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={icon} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />

      {/* Sources for better SEO practices 
        - Search Engine Optimization with Next.js | https://birtony.medium.com/search-engine-optimization-with-next-js-7cf0ac6e8f45
        - 
      */}

      {/* <title>{title} - My Clothing Store</title> */}
      {/* <meta name="description" content={`Learn more about ${title}`} /> */}
      {/* <meta property="og:title" content={`${title} - My Clothing Store`} /> */}
      {/* <meta property="og:description" content={`Learn more about ${title}`} /> */}
      {/* <meta
        property="og:url"
        content={`https://myclothingstore.com/products/${productId}`}
      /> */}
      {/* <meta property="og:type" content="website" /> */}
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </NextHead>
  );
};

Head.propTypes = HeadProps.type;
Head.defaultProps = HeadProps.default;

export default Head;
