import { Header } from '../Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Header title={'Whatya Watching?'} />
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
