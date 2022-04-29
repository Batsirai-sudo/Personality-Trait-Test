import Subtitle from '../atoms/Subtitle'; 
import Title from '../atoms/Subtitle';
import { CommonProps } from '../../utils/interfaces';


function Hero(props: CommonProps){
    const { children,styles } = props;

    return ( 
    <div className={styles.hero}>  
       <span className={styles.hero__overlay}></span>
           <div className={styles.hero__wrapper}>    
              <div className={styles.hero__heading}> 
                <div>   
                    <Title className={styles.hero__title}>Personality Trait Test!</Title>  
                    <Subtitle className={styles.hero__subtitle}>Are you an introvert or an extrovert?</Subtitle>
                </div>
            </div>      
        </div> 
    </div>  
    )
}

export default Hero;