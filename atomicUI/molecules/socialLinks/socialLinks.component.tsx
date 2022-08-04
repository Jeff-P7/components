import React, { FC } from 'react';
import ISocialLinks from './socialLinks.d';
import SocialLinksProps from './socialLinks.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps } from '../../../global';
import { Div, Text } from '../../../atomicUI/atoms';
import {
  FaFacebookF,
  FaGithubAlt,
  FaCodepen,
  FaLinkedinIn,
} from 'react-icons/fa';

interface IProps extends ISocialLinks {}

/**
 * SocialLinks Component
 */
export const SocialLinks: FC<IProps> = (props): JSX.Element => {
  const { data } = props;
  // const componentClasses: Array<string> = [];
  // if (classes?.length) componentClasses.push(classesToString(classes));

  // const componentStyles: Record<string, any> = { ...styles };
  // const attr: Record<string, any> | null = purgeEmptyProps(properties);
  return (
    <Div classes="block h-80 w-14" colorize>
      <Text size="8xl" align="center">
        WHy, hellO theRe 
      </Text>
    </Div>
  );
};

SocialLinks.propTypes = SocialLinksProps.type;
SocialLinks.defaultProps = SocialLinksProps.default;

export default SocialLinks;
