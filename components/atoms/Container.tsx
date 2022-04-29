import { CommonProps } from '../../utils/interfaces';


  const Container = (props:CommonProps) => { 
      const { children,className } = props
     return <div className={className}> {children} </div>
  };  
    
  export default Container; 