import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import GuestList from './GuestList'
import Settings from './Settings'

export default function App () {
  const [guestList, setGuestList] = useState(['Zelda', 'Dorothy', 'Tallulah'])
  function uninvite (name) {
    const uninvited = guestList.filter(guest => guest !== name)
    setGuestList(uninvited)
  }

  return (
    <BrowserRouter>
      <h1>Dog Party App</h1>
      <div>
        <Link to='/guest-list'>Guest List</Link>
      </div>
      <div>
        <Link to='/settings'>Settings</Link>
      </div>
      <Routes>
        <Route
          path='/guest-list'
          element={<GuestList guestList={guestList} />}
        />
        <Route
          path='/settings'
          element={<Settings guestList={guestList} uninvite={uninvite} />}
        />
      </Routes>
    </BrowserRouter>
  )
}