
let Header = () => {
  return <div><h1>News Digest</h1></div>
}
let Article = (props) => {
  return <div>
    <p>{props.text}</p>
  </div>
}
let Footer = () => {
  return <div><p4>Please subscribe here</p4></div>
}

let Blog = () => {
  return (
    <div class='container'>
      <Header />
      <Article text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales neque id tempor commodo. Morbi nec risus justo. Vivamus ut turpis sit amet turpis viverra fringilla eu eu leo. Integer non ex sit amet orci tempor malesuada. Morbi finibus odio a sapien rhoncus mattis. Ut aliquam ipsum a diam maximus facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis massa interdum, dignissim lorem sed, ornare odio. Curabitur id metus congue metus tincidunt porttitor in eget erat.

Cras mollis sed nisi sed tempus. Pellentesque hendrerit velit sed enim fringilla, a egestas sem ornare. Fusce sagittis erat commodo, egestas sem ultrices, dictum elit. Praesent dictum aliquam aliquet. Aliquam sit amet pellentesque risus, gravida hendrerit ipsum. Phasellus interdum ut ligula sit amet pellentesque. Phasellus vitae congue lectus, ut tristique ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer blandit lobortis urna, ut porttitor tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla volutpat ligula et nisl vehicula, sed feugiat justo scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed porta massa ut sagittis tempor. Vestibulum sollicitudin vestibulum elit ultricies sollicitudin.

' />
      <Article text='Curabitur orci magna, gravida et risus in, suscipit dictum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ut ultrices mauris, in vestibulum ligula. Nunc porttitor velit nulla, ac sollicitudin lorem commodo nec. In blandit eros quis justo dapibus, at tincidunt dolor pulvinar. Donec a elit ut nulla semper varius. Vestibulum imperdiet erat ac mauris efficitur sollicitudin in eget magna.

Fusce ligula magna, cursus vel urna at, iaculis fermentum mauris. Ut pretium nisi vitae orci eleifend ultrices. In pulvinar eleifend pharetra. Maecenas suscipit tincidunt turpis, at porttitor leo consequat quis. Nunc rhoncus auctor vulputate. Ut pretium pharetra libero, pretium volutpat nisl fringilla eu. Nulla vel eros dictum, blandit massa id, maximus lacus.

Sed ornare ex eu risus fringilla, vel tempor elit porta. Duis at felis nec mauris consequat aliquam nec eget leo. Cras non diam venenatis, condimentum libero eu, sollicitudin odio. Donec porttitor scelerisque mauris, ut malesuada nisl ultricies non. Ut egestas tristique ex non varius. Sed a laoreet sem. Cras viverra, libero porta tincidunt porta, tellus erat porttitor turpis, id sodales neque enim vel quam. Duis gravida ligula ipsum, porta pretium eros ornare sit amet. Nunc purus magna, venenatis in bibendum ac, vehicula eget nisl.' />
      <Article text='Curabitur orci magna, gravida et risus in, suscipit dictum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ut ultrices mauris, in vestibulum ligula. Nunc porttitor velit nulla, ac sollicitudin lorem commodo nec. In blandit eros quis justo dapibus, at tincidunt dolor pulvinar. Donec a elit ut nulla semper varius. Vestibulum imperdiet erat ac mauris efficitur sollicitudin in eget magna.

Fusce ligula magna, cursus vel urna at, iaculis fermentum mauris. Ut pretium nisi vitae orci eleifend ultrices. In pulvinar eleifend pharetra. Maecenas suscipit tincidunt turpis, at porttitor leo consequat quis. Nunc rhoncus auctor vulputate. Ut pretium pharetra libero, pretium volutpat nisl fringilla eu. Nulla vel eros dictum, blandit massa id, maximus lacus.

Sed ornare ex eu risus fringilla, vel tempor elit porta. Duis at felis nec mauris consequat aliquam nec eget leo. Cras non diam venenatis, condimentum libero eu, sollicitudin odio. Donec porttitor scelerisque mauris, ut malesuada nisl ultricies non. Ut egestas tristique ex non varius. Sed a laoreet sem. Cras viverra, libero porta tincidunt porta, tellus erat porttitor turpis, id sodales neque enim vel quam. Duis gravida ligula ipsum, porta pretium eros ornare sit amet. Nunc purus magna, venenatis in bibendum ac, vehicula eget nisl.' />
      <Article text='Curabitur orci magna, gravida et risus in, suscipit dictum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ut ultrices mauris, in vestibulum ligula. Nunc porttitor velit nulla, ac sollicitudin lorem commodo nec. In blandit eros quis justo dapibus, at tincidunt dolor pulvinar. Donec a elit ut nulla semper varius. Vestibulum imperdiet erat ac mauris efficitur sollicitudin in eget magna.

Fusce ligula magna, cursus vel urna at, iaculis fermentum mauris. Ut pretium nisi vitae orci eleifend ultrices. In pulvinar eleifend pharetra. Maecenas suscipit tincidunt turpis, at porttitor leo consequat quis. Nunc rhoncus auctor vulputate. Ut pretium pharetra libero, pretium volutpat nisl fringilla eu. Nulla vel eros dictum, blandit massa id, maximus lacus.

Sed ornare ex eu risus fringilla, vel tempor elit porta. Duis at felis nec mauris consequat aliquam nec eget leo. Cras non diam venenatis, condimentum libero eu, sollicitudin odio. Donec porttitor scelerisque mauris, ut malesuada nisl ultricies non. Ut egestas tristique ex non varius. Sed a laoreet sem. Cras viverra, libero porta tincidunt porta, tellus erat porttitor turpis, id sodales neque enim vel quam. Duis gravida ligula ipsum, porta pretium eros ornare sit amet. Nunc purus magna, venenatis in bibendum ac, vehicula eget nisl.' />
      <Footer />
    </div>

  )
}

ReactDOM.render(<Blog />, document.getElementById('root'))
