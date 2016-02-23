import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {increasing: false};
  }
  update() {
    ReactDom.render(
      <App val={this.props.val + 1} />,
      document.getElementById('app')
    )
  }
  componentWillMount() {
    console.log('mounting')
  }
  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val })
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0
  }
  render() {
    console.log(this.state.increasing)
    return (
      <button onClick={this.update}>
       {this.props.val}
      </button>
    )
  }
  componentDidMount() {
    console.log('mounted')
  }
  componentWillUnmount() {
    console.log('will unmount')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
  }
}

App.defaultProps = { val: 0 }

export default App
