import './destination.css'

import { Component } from 'react'

class Destinationdata extends Component{
    render(){
        return(
            <div className={this.props.cname}>
            <div className='dest-text'>
              <h2>{this.props.heading}</h2>
              <p>
                  {this.props.text}
              </p>
            </div>
      
      <div className='dest-image'>
          <img alt='' src={this.props.img1}/>
          <img alt='' src={this.props.img2}/>
      </div>
      
            </div>
        )
    }
}

export default Destinationdata;