
import Lottie from 'react-lottie';
import animationData from '../../lotties/OrderConfirmed.json';
import './confirm.css';
export default function Confirm(){
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    }
    return(
        <div>
              <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
      <div className='confirm'>
        <h1 className='confirm'>Thank You for Using Ticketaty for all you ticket needs
            <br/>
        </h1>
        </div>
        </div>
    )
}