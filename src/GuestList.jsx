import { Link } from 'react-router-dom'

export default function GuestList (props) {
  const items = props.guestList.map((guest, index) => {
    const url = `/guest/${guest}`
    return (
      <li key={index}>
        <Link to={url}>{guest}</Link>
      </li>
    )
  })
  return (
    <>
      <h2>Guest List</h2>
      <ul>
        {items}
      </ul>
    </>
  )
}