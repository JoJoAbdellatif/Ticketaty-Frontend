
import Lottie from 'react-lottie';
import animationData from '../../lotties/Error.json';
export default function TooMany(){
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
        <h1 className='confirm'>Too Many Requests Error 429 Please, Try Again Later
            <br/>
        </h1>
        </div>
        </div>
    )
}