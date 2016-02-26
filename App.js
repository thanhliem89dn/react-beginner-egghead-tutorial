import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {data: [
      {id: 1, name: "Simon Bailey1"},
      {id: 2, name: "Simon Bailey2"},
      {id: 3, name: "Simon Bailey3"},
      {id: 4, name: "Simon Bailey4"},
      {id: 5, name: "Simon Bailey5"},
      {id: 6, name: "Simon Bailey6"},
      {id: 7, name: "Simon Bailey7"},
      {id: 8, name: "Simon Bailey8"},
      {id: 9, name: "Simon Bailey9"},
      {id: 10, name: "Simon Bailey10"},
    ]}
    this.update = this.update.bind(this)
  }
  update(e) {
  }
  render() {
    let rows = this.state.data.map ( person => {
      return <PersonRow key={person.id} data={person} />
    });
    return (
      <table>
      <tbody>{rows}</tbody>
      </table>
    );
  }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}
export default App
