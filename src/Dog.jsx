export default function Dog (props) {
  if (props.loading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <img src={props.image} height='200' />
    </div>
  )
}