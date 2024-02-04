import "./Sectionwarpper.css"

const Sectionwarpper = (props) => {
  return (
    <div className="section-wrapper">
      {props.children}
    </div>
  )
}

export default Sectionwarpper
