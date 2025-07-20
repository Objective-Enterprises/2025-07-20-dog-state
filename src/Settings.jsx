import Setting from "./Setting"

export default function Settings (props) {
  const settings = props.guestList.map((guest, index) => {
    return <Setting key={index} name={guest} uninvite={props.uninvite} />
  })

  return (
    <>
      <h2>Settings</h2>
      {settings}
    </>
  )
}