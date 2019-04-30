import React from 'react'

export default () => (
  <div className='choose'>
    <div className='container'>
      <p className='question'>Who's your favorite Avenger?</p>

      <div className='choices'>
        <div className='choice'>Captain America</div>
        <div className='choice'>Dr. Strange</div>
        <div className='choice'>Iron Man</div>
      </div>

      <div className='text-center'>
        <a className='button'>Submit</a>
      </div>
    </div>

    <div className='button back-button'>Back</div>
    <div className='button create-button'>Create Your Own</div>
  </div>
)
