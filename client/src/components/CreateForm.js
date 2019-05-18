import React from 'react'

export default () => (
  <form className='create-form'>
    <h2>Question</h2>

    <div className="input-group">
      <input type='text' placeholder='Choose the best Avenger' />
    </div>

    <h2>Choices</h2>

    <div className="input-group">
      <input type='text' placeholder='Iron Man' />
    </div>

    <div className="input-group">
      <input type='text' placeholder='Captain America' />
    </div>

    <div className="input-group">
      <input type='text' placeholder='Thor' />
    </div>

    <input type='submit' value='Create Poll' className='button' />
  </form>
)
