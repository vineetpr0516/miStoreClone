import React from 'react'

import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"


const Slider = ({start}) => {
  return (
    <Carousel fade>
        {start.map((item)=>(

            <Carousel.Item style={{ transitionDuration: "800ms", transition: "1% 1000ms ease" }}>
                <img
                    className="d-block w-100"
                    src={item}
                    alt="First slide"
        />
            </Carousel.Item>            

        ))
        
        }
    </Carousel>

  )
}

export default Slider
