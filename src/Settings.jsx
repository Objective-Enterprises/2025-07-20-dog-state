import Setting from "./Setting"

export default function Settings (props) {
  console.log(props)
  return (
    <>
      <h2>Settings</h2>
      <Setting
        name='Zelda'
        guestList={props.guestList}
        uninvite={props.uninvite}
        invite={props.invite}
      />
      <Setting
        name='Dorothy'
        guestList={props.guestList}
        uninvite={props.uninvite}
        invite={props.invite}
      />
      <Setting
        name='Tallulah'
        guestList={props.guestList}
        uninvite={props.uninvite}
        invite={props.invite}
      />
    </>
  )
}