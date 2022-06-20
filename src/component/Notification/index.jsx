import { useEffect } from 'react';

import * as N from './styled';


export const Notification = ({ props }) => {
  // console.log(props)


  useEffect(() => {
    setTimeout(() => {
      // console.log("OK")
    }, 2000)
  }, [])

  return (
    <N.Container >
      5
    </N.Container>
  )
}