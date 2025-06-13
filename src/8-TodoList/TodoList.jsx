import React, { Component } from "react";
import "./todolist.css";

export default class TodoList extends Component {
  state = {
    tasks: ["学习Javascript", "学习HTML", "学习CSS", "学习JAVA"],
    // tasks: [],
  };
  textBtn = React.createRef();
  render() {
    return (
      <div className="className">
        <div className={"clear"}>
          <input type="text" ref={this.textBtn} />
          <button
            className={"add-btn"}
            onClick={() => {
              this.addTask();
            }}
          >
            添加
          </button>
        </div>
        <ul>
          {this.state.tasks.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <span
                onClick={() => {
                  this.delTask(index);
                }}
              >
                {" "}
                删除{" "}
              </span>
              <span
                onClick={() => {
                  this.moveUp(index);
                }}
              >
                {" "}
                ↑{" "}
              </span>
              <span
                onClick={() => {
                  this.moveDown(index);
                }}
              >
                {" "}
                ↓{" "}
              </span>
            </li>
          ))}
          {/* 基于逻辑运算实现判断效果 */}
          {this.state.tasks.length === 0 && (
            <li className={"no-tasks"}>
              <span>暂时没有任何计划</span>
            </li>
          )}
        </ul>
      </div>
    );
  }

  addTask() {
    this.setState({
      tasks: [...this.state.tasks, this.textBtn.current.value],
    });
  }

  delTask(index) {
    const tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({
      //   tasks: this.state.tasks.filter((item, i) => i !== index),
      tasks,
    });
  }

  moveUp(index) {
    console.log(index);
    console.log(index > 0);
    console.log(typeof index);
    if (index <= 0) {
      return;
    }
    console.log(index);
    const tasks = this.state.tasks;
    const temp = tasks[index];
    tasks[index] = tasks[index - 1];
    tasks[index - 1] = temp;
    this.setState({
      tasks,
    });
  }

  moveDown(index) {
    console.log(index);
    console.log(index < this.state.tasks.length - 1);
    console.log(typeof index);
    if (index >= this.state.tasks.length - 1) {
      return;
    }
    console.log(index);
    const tasks = this.state.tasks;
    const temp = tasks[index];
    tasks[index] = tasks[index + 1];
    tasks[index + 1] = temp;
    this.setState({ tasks });
  }
}
