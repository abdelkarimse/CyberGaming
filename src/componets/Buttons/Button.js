import './Buttons.css'

const PrimaryButton = (props) => {
  return (
    <div className='Button p'>
    <a className='h' href="/#">{props.children}</a>
      
    </div>
  )
}
const SecondButton = (props) => {
    return (
      <div className="Button s">
        <a className='h' href="/#">{props.children}</a>
      </div>
    )
  }
export default PrimaryButton;
export {SecondButton};
