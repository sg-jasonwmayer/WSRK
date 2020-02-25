/* eslint-disable no-unused-vars */
import React from 'react';
import Loader from 'react-loader-spinner'
import Fade from '@material-ui/core/Fade';
import WRlogo from '../WRLogo'

import './WRLoader.scss'

const WRLoader = () => {
  const checked = React.useState(false);


   
  return(
    <div 
    className="wrlogo-container"  
    >

    <Loader
      className="loader-dots"
      type="Grid"
      color="#ff8200"
      height={40}
      width={40}
      timeout={3000}
      />
  
      </div>
     );
    }
 

export default WRLoader;


