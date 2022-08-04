import React from 'react';
import PropTypes from 'prop-types';
import {
  FaFacebookF,
  FaGithubAlt,
  FaCodepen,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Div } from '../../grids';
import styles from './socialLinks.module.scss';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isHorizontal: PropTypes.bool,
  isDark: PropTypes.bool,
};

const defaultProps = {
  data: [],
  isHorizontal: false,
  isDark: false,
};

const SocialLinks = (props) => {
  const { data, isHorizontal, isDark } = props;

  return (
    <Div classes={styles.social} colorize>
      <SocialLinksRender data={data} />
      <h6>Find me on</h6>
    </Div>
  );
};

SocialLinks.propTypes = propTypes;
SocialLinks.defaultProps = defaultProps;

export default SocialLinks;

const Link = ({ item = {}, index = 0 }) => {
  const iconMapper = {
    LinkedIn: <FaLinkedinIn />,
    Codepen: <FaCodepen />,
    Github: <FaGithubAlt />,
    Facebook: <FaFacebookF />,
  };

  return (
    <div className={styles.social__link} key={index}>
      <a href={item.link}>
        {iconMapper[item.name]}
        <h6>{item.name}</h6>
      </a>
    </div>
  );
};

const SocialLinksRender = ({ data }) => (
  <>
    {data.map((item, index) => (
      <Link item={item} key={index} />
    ))}
    {/* <Link item={item} key={index} />
    <Link item={item} key={index} />
    <Link item={item} key={index} />
    <Link item={item} key={index} /> */}
  </>
);
