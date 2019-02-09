let ComponentSquare = (props) => {
  return (
    <div className='square' style={{ backgroundColor: props.color }}>Square {props.color}</div>
  )
}

let myElement = (
  <div className='container'>
    <div className='row'>
      <div className='col'>
        <ComponentSquare color={'red'} />
      </div>
      <div className='col'>
        <ComponentSquare color={'green'} />
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <ComponentSquare color={'blue'} />
      </div>
      <div className='col'>
        <ComponentSquare color={'yellow'} />
      </div>
    </div>
  </div>
)

ReactDOM.render(myElement, document.getElementById('root'))
