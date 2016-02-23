import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { val:0 };
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({val: this.state.val + 1})
  }
  componentWillMount() {
    console.log('mounting')
  }
  render() {
    console.log('rendering')
    return <Button update={this.update}> I <Heart/> you {this.state.val} </Button>
  }
  componentDidMount() {
    console.log('mounted')
  }
  componentWillUnmount() {
    console.log('will unmount')
  }
}

class Button extends React.Component {
  render() {
    return <button onClick={this.props.update}> {this.props.children}  </button>
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDom.render(<App />, document.getElementById('a'));
  }
  unmount() {
    ReactDom.unmountComponentAtNode(document.getElementById('a'));
  }
  render () {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id='a'></div>
      </div>
    )
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"> </span>

export default Wrapper
