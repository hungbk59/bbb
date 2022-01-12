import React from "react";
import './Todolist.css';
import Todo from './Todo.js';

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        listName: this.props.name,
        taskname: '',
        tasks: [],
    };
  }
  myChangeHandler = (event) => {
    this.setState({taskname: event.target.value});
  }
  addtask=() => {
    console.log(this.state.taskname);
    if (this.state.taskname){
      this.setState({tasks: this.state.tasks.concat(this.state.taskname) })
    }
    else{
      return;
    }
  }
  deleteTask=(event) => {
    const listTask = this.state.tasks;
    listTask.splice(event, 1);
    this.setState({ listTask });
  }
  render() {
    return (
      <div className="Todolist">
        <br/>
          {this.state.listName}
        <br/>
        <div className="aligned">
          <img 
            style={{cursor: "pointer"}} 
            title="add"
            src={
                prosess.env.PUBLIC_URL +
                "./assets/plus.png"} 
            width="20px" 
            alt="Add Task"
            onClick={() => this.addtask()}/>
          <input 
            type='text' 
            value={this.state.taskname}
            onChange={this.myChangeHandler}/>
        </div>
        <ul style={{paddingLeft: '0px'}}>
          {this.state.tasks.map((value, index) =>{
            return <Todo 
                    id={index} 
                    key={index} 
                    value={value}
                    deleteTask={this.deleteTask}/>
          })}
        </ul>
      </div>
    );
  };
}

export default Todolist;
