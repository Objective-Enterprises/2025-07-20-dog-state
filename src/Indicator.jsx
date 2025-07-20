import { useEffect } from 'react'

export default function Indicator (props) {
  useEffect(() => {
    props.fetchImage()
  }, [])
  if (props.loading) {
    return <p>Dog loading...</p>
  }
  return <p>Dog ready!</p>
}