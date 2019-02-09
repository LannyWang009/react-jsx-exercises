const Lala = (props) => {
  return (
    <div>
      <h2 className='blog-title' id='blah'>
    This is a {props.name} that I made </h2>
      <p className='blog-body'>{props.children}</p>
    </div>
    // this is a component, need to be named with a capital letter
    // class doesn't work because it is not html,
    // we are writing javascript. What we wrote will become an object,
    // to be called in the js function
    // React.createElement("h1", {className: "my-class", id:"blah"})
  )
}

// his function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

const myElement = (
  <div>
        Hello World! {3 + 4}
    <h1>This is the first page with react</h1>
    <Lala name={'banana'}>
      <span>monkeys</span> </Lala>

    <Lala name={'mango'}><span>mango</span></Lala>
    <Lala name={'apple'}><span>apple</span></Lala>
  </div>
)

ReactDOM.render(myElement, document.getElementById('root'))
