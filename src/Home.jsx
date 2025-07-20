import GuestList from "./GuestList";
import Settings from "./Settings";

export default function Home (props) {
  return (
    <>
      <GuestList guestList={props.guestList} />
      <Settings guestList={props.guestList} invite={props.invite} uninvite={props.uninvite} />
    </>
  )
}