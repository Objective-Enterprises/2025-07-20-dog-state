import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import GuestList from './GuestList'
import Settings from './Settings'
import Home from './Home'
import Guest from './Guest'
import axios from 'axios'
import Dog from './Dog'
import Indicator from './Indicator'

export default function App () {
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState()
  const [guestList, setGuestList] = useState(['Zelda', 'Dorothy', 'Tallulah'])
  function invite (name) {
    const invited = [...guestList, name]
    setGuestList(invited)
  }
  function uninvite (name) {
    const uninvited = guestList.filter(guest => guest !== name)
    setGuestList(uninvited)
  }
  async function fetchImage () {
    setLoading(true)
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    setImage(response.data.message)
    setLoading(false)
  }

  return (
    <BrowserRouter>
      <h1>Dog Party App</h1>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/guest-list'>Guest List</Link>
      </div>
      <div>
        <Link to='/settings'>Settings</Link>
      </div>
      <div>
        <Link to='/dog'>Dog</Link>
      </div>
      <Indicator loading={loading} fetchImage={fetchImage} />
      <Routes>
        <Route
          path='/dog'
          element={<Dog loading={loading} image={image} />}
        />
        <Route
          path='/'
          element={
            <Home
              guestList={guestList}
              invite={invite}
              uninvite={uninvite}
              loading={loading}
              image={image}
            />
          }
        />
        <Route
          path='/guest-list'
          element={<GuestList guestList={guestList} />}
        />
        <Route
          path='/settings'
          element={<Settings guestList={guestList} invite={invite} uninvite={uninvite} />}
        />
        <Route
          path='/guest/:name'
          element={<Guest guestList={guestList} invite={invite} uninvite={uninvite} />}
        />
      </Routes>
    </BrowserRouter>
  )
}