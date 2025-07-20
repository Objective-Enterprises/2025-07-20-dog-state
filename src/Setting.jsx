export default function Setting (props) {
  const invited = props.guestList.includes(props.name)
  if (invited) {
    function handleClick () {
      props.uninvite(props.name)
    }
    return <button onClick={handleClick}>{props.name}: Invited</button>
  }
  function handleClick () {
    props.invite(props.name)
  }
  return <button onClick={handleClick}>{props.name}: Uninvited</button>
}