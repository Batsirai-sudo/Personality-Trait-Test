import { CommonProps } from '../../utils/interfaces';

    
  const Subtitle = (props:CommonProps) => {  
      const { children,className,onClick } = props;

     return <p className={className}> {children} </p>
  };
  
  export default Subtitle;