import { CommonProps } from '../../utils/interfaces';

  const Title = (props:CommonProps) => {
      const { children,className } = props
     return <h1 className={className}> {children} </h1>
  };
  
  export default Title;