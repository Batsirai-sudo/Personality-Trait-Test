import { CounterProps } from '../../utils/interfaces';

 function Counter({ total, current }:CounterProps) { 
  return (
    <div className="counter">
      <div className="counter__container">
        <div className="counter__wrapper">
          <div className="counter__wrapper2">
            <div className="counter__section">
              <p>{total}</p>
            </div>
            <div className="counter__separator"></div> 
            <div className="counter__section">
              <p>{current || 0}</p>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}
export default Counter;
