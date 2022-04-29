import React from "react";  
import styles from '../../styles/Loader.module.scss';
import { CommonProps } from '../../utils/interfaces';

 function Loader(props:CommonProps) {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__spinner}>
         <span className={styles.loader__text}>{props.children}...</span> 
      </div>     
    </div>  
  ); 
}
export default Loader; 