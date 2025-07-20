import { useParams } from 'react-router-dom'
import Setting from './Setting'

export default function Guest (props) {
  const params = useParams()

  return (
    <>
      <h2>{params.name}</h2>
      <Setting
        name={params.name}
        guestList={props.guestList}
        invite={props.invite}
        uninvite={props.uninvite}
      />
    </>
  )
}