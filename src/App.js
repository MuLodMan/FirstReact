import React, { Component } from 'react';
import './reset.css'
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import {save,load} from './localStorage'
import UserLog from './UserDialog'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: '',
      todoList: load('todoList')
    }
  }
  render() {
    let todos = this.state.todoList
      .filter((item)=> !item.deleted)
      .map((item,index)=>{
      return (
        <li key={index} >
          <TodoItem todo={item} onToggle={this.toggle.bind(this)} 
            onDelete={this.delete.bind(this)}/>
        </li>
      )
    })

    return (
      <div className="App">
        <UserLog/>
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} 
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)} />
        </div>
        <ol className="todoList">
          {todos}
        </ol>
      </div>
    )
  }
  toggle(e, todo){
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state) 
  }
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      // todoList: this.state.todoList
    })
  }
  addTodo(event){
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    save('todoList',this.state.todoList)
    this.setState({
      // newTodo: '',
      todoList: this.state.todoList
    })
  }
  delete(event, todo){
    debugger
    todo.deleted = true
    this.setState(this.state) 
  }
}

export default App;

let id = 0
save("todoList",[])
function idMaker(){
  id += 1
  return id
}