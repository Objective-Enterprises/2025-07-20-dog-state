import Dog from "./Dog";
import GuestList from "./GuestList";
import Settings from "./Settings";

export default function Home (props) {
  return (
    <>
      <Dog loading={props.loading} image={props.image} />
      <GuestList guestList={props.guestList} />
      <Settings guestList={props.guestList} invite={props.invite} uninvite={props.uninvite} />
    </>
  )
}