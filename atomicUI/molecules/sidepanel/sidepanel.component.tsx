import React, { FC } from 'react';
import ISidepanel from './sidepanel';
import SidepanelProps from './sidepanel.props';
import classNames from 'classnames';
import { classesToString, purgeEmptyProps, textToSlug } from '../../../global';
import { Div, Text, Link, Button, Card } from '../../atoms';
import PagePath from '../../../../utilities/pagePath';
import { useRouter } from 'next/router';
import { ButtonIcon, LinkButton, LinkButtonIcon } from '../../molecules';

interface IProps extends ISidepanel {}

/**
 * Sidepanel Component
 */
export const Sidepanel: FC<IProps> = (props): JSX.Element => {
  const { children, classes, styles, value, isIcon, title, backgroundColor } =
    props;

  // const componentClasses: Array<string> = [];
  // if (classes?.length) componentClasses.push(classesToString(classes));

  // const componentStyles: Record<string, any> = { ...styles };
  // const attr: Record<string, any> | null = purgeEmptyProps(properties);

  // const cardProps: Record<string, {}> = {
  //   borderRadius: 'lg',
  // };

  const router = useRouter();
  const route: string = router.pathname;
  // const linkActive: string = 'bg-gray bg-opacity-10';

  let renderIconComponentList: Array<any> = [];

  value.forEach((item: any, index: number) => {
    const { itemValue, itemIcon } = item;
    const key: string = itemValue + index;

    if (itemIcon) {
      renderIconComponentList.push(
        <LinkButtonIcon
          value={itemValue}
          icon={itemIcon}
          href={PagePath[itemValue]}
          key={key}
          classes="capitalize"
          fullWidth
        />
      );
    } else {
      renderIconComponentList.push(
        <LinkButton
          value={itemValue}
          href={PagePath[itemValue]}
          key={key}
          classes="text-left font-medium"
          fullWidth
        />
      );
    }
    // const { itemIcon, itemValue } = item; //NOSONAR

    // renderIconComponentList.push(
    //   <LinkButtonIcon
    //     value={itemValue}
    //     icon={itemIcon}
    //     href={PagePath[itemValue]}
    //     key={index}
    //   />
    // );
  });

  // if (value.includes('')) {
  //   value.forEach((item: any, index: number) => {
  //     const { itemIcon, itemValue } = item; //NOSONAR

  //     renderIconComponentList.push(
  //       <LinkButtonIcon
  //         value={itemValue}
  //         icon={itemIcon}
  //         href={PagePath[itemValue]}
  //         key={index}
  //       />
  //     );
  //   });
  // } else {
  //   value.forEach((item: any, index: number) => {
  //     renderIconComponentList.push(
  //       <LinkButton value={item} href={PagePath[item]} key={index} />
  //     );
  //   });
  // }

  return (
    <Card
      padding={5}
      borderRadius="2xl"
      height={96}
      backgroundColor={backgroundColor}
    >
      <Text value={title!} tag="h5" padding="b-3" weight="semibold" />
      <div className="flex flex-col justify-between">
        {renderIconComponentList}
        {/* <ul>
          {renderIconComponentList.map((item: any, index: number) => {
          })}
        </ul> */}
      </div>
    </Card>
  );
};

Sidepanel.propTypes = SidepanelProps.type;
Sidepanel.defaultProps = SidepanelProps.default;

export default Sidepanel;
