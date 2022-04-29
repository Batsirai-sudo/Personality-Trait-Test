import Title from '../atoms/Title';
import { CommonProps } from '../../utils/interfaces';

function Question(props: CommonProps){ 
    const { children,className } = props;

    return ( 
        <div>
            <Title className={className}>{children}</Title>
        </div>
    )
}

export default Question