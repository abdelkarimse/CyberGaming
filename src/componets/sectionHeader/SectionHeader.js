import "./SectionHeader.css"
const SectionHeader = (props) => {
  return (
    <div className="section">
    <div className="section-header">

    <h4>{props.children}</h4>
  </div>                            
      
    </div>
  )
}

export default SectionHeader
