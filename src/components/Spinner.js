import React, { Component } from 'react'
import loading from './loading.png'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={{
            height:'30px',
            width:'30px',
        }} />
      </div>
    )
  }
}

export default Spinner