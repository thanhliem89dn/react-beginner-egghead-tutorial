import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState({
      txt: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />

      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.update} />
      <h1>Hello {props.txt}</h1>
    </div>
  );
}

ReactDom.render(
  <App cat={12} />, document.getElementById('app')
);

// export default App
