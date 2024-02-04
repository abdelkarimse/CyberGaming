import "./GamingLibrayCard.css"

const GamingLibrayCard = (props) => {
  return (
    <div className="gaming-libary-card">
      <ul>
    <li><img src={props.img} alt="hello world"></img></li>
  <li><h4>{props.name}</h4>   <span>{props.sand}</span></li>
    <li><h4>Date add</h4><span>{props.ex1}</span></li>
    <li><h4>Hours Played</h4><span>{props.ex2}</span></li>
    <li><h4>currently</h4><span>{props.ex3}</span></li>
      <div className=".main-button"> <a href="/#">Download</a></div>
    </ul>
    </div>
  )
}

export default GamingLibrayCard
