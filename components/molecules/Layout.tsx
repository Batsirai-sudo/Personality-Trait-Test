import Header from '../atoms/Header';
import { CommonProps } from '../../utils/interfaces';


export default function Layout({ children }:CommonProps) {
  return (
    <>
      <Header />
         <main>{children}</main>
    </>
  ) 
}