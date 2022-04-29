import { CommonProps } from '../../utils/interfaces';
    
  const Button = (props:CommonProps) => { 
      const { children,className,onClick } = props
     return(
        <button className={className} onClick={onClick}>
             {children}
        </button> 
    )
  };
  
  export default Button;