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
              <span>↑</span>
              <span>↓</span>
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
}
