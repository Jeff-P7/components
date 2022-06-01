import React, { FC, useState } from 'react';
import ILayout from './layout';
import LayoutProps from './layout.props';
import { Div } from '../atomicUI/atoms';
import { Header, Footer } from '../atomicUI/organisms';
import classNames from 'classnames';

interface IProps extends ILayout {}

/**
 * Layout for Components
 */
export const Layout: FC<IProps> = (props): JSX.Element => {
  const { children } = props;

  const [isThemeDark, setIsThemeDark] = useState<boolean>(false);

  // useEffect(() => {}, []);

  const cHandleThemeDarkChange: Function = () => {
    setIsThemeDark(!isThemeDark);
  };

  const componentClasses: Array<string> = [
    // 'bg-gray-100 flex flex-col h-full justify-between',
    'bg-gray-100 flex flex-col h-screen justify-between',
  ];
  if (isThemeDark) componentClasses.push('theme-dark');

  return (
    <div className={classNames(componentClasses)}>
      <Header pHandleThemeDarkChange={cHandleThemeDarkChange} />
      {/* <main className="flex-grow">{children}</main> */}
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = LayoutProps.type;
Layout.defaultProps = LayoutProps.default;

export default Layout;
