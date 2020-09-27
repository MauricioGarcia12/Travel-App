import React from 'react'
import { Button } from '../Button'
function InputAreas() {
    return (
        <div className='input-areas'>
        <form>
          <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Your Email'
          />
          <Button buttonStyle='btn--outline'>Subscribe</Button>
        </form>
      </div>
    )
}

export default InputAreas
