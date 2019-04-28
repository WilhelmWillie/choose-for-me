import React from 'react'

export default () => (
  <div>
    <form>
      <div>
        <label>Title</label>

        <input type='text' placeholder='Choose the best Avenger' />
      </div>

      <h2>Choices</h2>

      <div>
        <label>Choice A</label>

        <input type='text' placeholder='Iron Man' />
      </div>

      <div>
        <label>Choice B</label>

        <input type='text' placeholder='Captain America' />
      </div>

      <div>
        <label>Choice C</label>

        <input type='text' placeholder='Thor' />
      </div>

      <div>
        <label>Enable multi-select?</label>

        <input type='checkbox' />
      </div>

      <input type='submit' value='Create Poll' />
    </form>
  </div>
)
