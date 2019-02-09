let TextInput = () => {
  return <div>
    <span>First name:</span><br />
    <input type='text' name='firstname' /><br />
    <span>Last name:</span><br />
    <input type='text' name='lastname' /><br />
  </div>
}

let YesNoRadio = () => {
  return <span>
    <input type='radio' name='gender' value='male' checked /> Male<br />
    <input type='radio' name='gender' value='female' /> Female<br />
    <input type='radio' name='gender' value='other' /> Other
  </span>
}

let SubmitButton = () => {
  return <span><br /><input type='submit' value='submit' /></span>
}

let Form = () => {
  return (<form className='container'>
    <TextInput />
    <YesNoRadio />
    <SubmitButton />
  </form>)
}

ReactDOM.render(<Form />, document.getElementById('root'))
