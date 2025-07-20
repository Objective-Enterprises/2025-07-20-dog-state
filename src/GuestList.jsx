export default function GuestList (props) {
  const items = props.guestList.map((guest, index) => {
    return <li key={index}>{guest}</li>
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