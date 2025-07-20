import { useState } from 'react'
import Setting from './Setting'

export default function App () {
  const [guestList, setGuestList] = useState(['Zelda', 'Dorothy', 'Tallulah'])
  function uninvite (name) {
    const uninvited = guestList.filter(guest => guest !== name)
    setGuestList(uninvited)
  }
  const items = guestList.map((guest, index) => {
    return <li key={index}>{guest}</li>
  })
  const settings = guestList.map((guest, index) => {
    return <Setting key={index} name={guest} uninvite={uninvite} />
  })
  return (
    <>
      <h1>Dog Party App</h1>
      <h2>Guest List</h2>
      <ul>
        {items}
      </ul>
      <h2>Settings</h2>
      {settings}
    </>
  )
}