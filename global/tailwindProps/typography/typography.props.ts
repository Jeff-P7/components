import PropTypes from 'prop-types';
import { ITypography } from './typography';
import type { IPropDefines } from '../../global';
import { FontProps } from './font';
import { ListStyleProps } from './listStyle';
import { PlaceholderProps } from './placeholder';
import { TextProps } from './text';
import {
  LetterSpacingTypes,
  LineHeightTypes,
  VerticalAlignmentTypes,
  WhitespaceTypes,
  WordBreakTypes,
} from './typography.types';

/**
 * Props interface defines layout types
 *
 * @interface IProps
 * @extends {IPropDefines}
 */
interface IProps extends IPropDefines {
  type: { [key in keyof ITypography]: any };
  default: ITypography;
  argType: { [key in keyof ITypography]: any };
}

const { string, oneOf, oneOfType, number } = PropTypes;

/**
 * Spacing Props
 */
export const SpacingProps: IProps = {
  type: {
    letterSpacing: oneOfType([string, oneOf(LetterSpacingTypes)]),
    lineHeight: oneOfType([string, number, oneOf(LineHeightTypes)]),
    verticalAlign: oneOfType([string, oneOf(VerticalAlignmentTypes)]),
    whitespace: oneOfType([string, oneOf(WhitespaceTypes)]),
    wordBreak: oneOfType([string, oneOf(WordBreakTypes)]),
    ...FontProps.type,
    ...ListStyleProps.type,
    ...PlaceholderProps.type,
    ...TextProps.type,
  },
  default: {
    letterSpacing: '',
    lineHeight: '',
    verticalAlign: '',
    whitespace: '',
    wordBreak: '',
    ...FontProps.default,
    ...ListStyleProps.default,
    ...PlaceholderProps.default,
    ...TextProps.default,
  },
  argType: {
    letterSpacing: LetterSpacingTypes,
    lineHeight: LineHeightTypes,
    verticalAlign: VerticalAlignmentTypes,
    whitespace: WhitespaceTypes,
    wordBreak: WordBreakTypes,
    ...FontProps.argType,
    ...ListStyleProps.argType,
    ...PlaceholderProps.argType,
    ...TextProps.argType,
  },
};

export default SpacingProps;
