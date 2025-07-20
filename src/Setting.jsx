export default function Setting (props) {
  function handleClick () {
    props.uninvite(props.name)
  }
  return <button onClick={handleClick}>{props.name}: Invited</button>
}