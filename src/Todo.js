import React from "react";
import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state={done: false};
  }
  completeTask=(event) => {
    this.setState({done: true});
  }
  render() {
    let checkDone='';
    if(this.state.done === false) {
      checkDone=(
        <img 
            src={
              process.env.PUBLIC_URL +
              "./assets/clipboard.png"} 
            width="20px"
            style={{cursor: "pointer"}} 
            title="choose"
            alt="correct"
            onClick={() => this.completeTask(this.props.id)}/>
      );
    }
    return (
      <div>
        {checkDone}
        <img className={this.state.done ? 'noCheckDone':''}
            src={
              process.env.PUBLIC_URL +
              "./assets/bin.png"}
            width="20px"
            style={{cursor: "pointer"}}
            title="delete"
            alt="delete"
            onClick={() => this.props.deleteTask(this.props.id)} />
        &nbsp;&nbsp;
        <span className={this.state.done ? "done" : ""}>{this.props.value}</span>
      </div>
    );
  };
}

export default Todo;