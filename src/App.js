import React from "react";
import './App.css';
import Todolist from './Todolist.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <br/>
        <table border="1">
          <thead>
            <tr>
              <th>Nhiệm vụ 1</th>
              <th>Nhiệm vụ 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{verticalAlign: 'top'}}>
              <Todolist name="DANH SÁCH HÀNG HÓA"/>
              </td>
              <td style={{verticalAlign: 'top'}}>
              <Todolist name="DANH SÁCH KHÁCH HÀNG"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
}

export default App;
