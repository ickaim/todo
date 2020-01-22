import React from "react";
import TodoForm from "./todoForm";
import Task from "./task";

import { Container, Row, Col} from 'reactstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default class TodoList extends React.Component {
    state = {
        tasks: []
    }

    addTask = (task) => {
        const newTask = [task, ...this.state.tasks];
        this.setState({
            tasks: newTask
        })
    }

    toggleComplete = (id) => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        complete: !task.complete
                    };
                } else {
                    return task;
                }
                }
            )
            }
        )
    }

    handleDeleteTask(id) {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        });
    }

    render() {
        return (
            <Row className="justify-content-md-center ">
                <Col xs={12} lg={6} className="form my-3" >
                    <TodoForm onSubmit={this.addTask} />
                    <Tabs defaultActiveKey="todo" id="uncontrolled-tab-example"  className="mt-3">
                        <Tab eventKey="todo" title="To Do">
                            <div className="tasks">
                                {this.state.tasks.map(task => {
                                    if(task.complete === false)
                                    return <Task
                                        toggleComplete={() => this.toggleComplete(task.id)}
                                        onDelete={() => this.handleDeleteTask(task.id)}
                                        key={task.id}
                                        task={task} />
                                })}
                            </div>
                        </Tab>
                        <Tab eventKey="done" title="Done">
                            {this.state.tasks.map(task => {
                                if(task.complete === true)
                                    return <Task
                                        toggleComplete={() => this.toggleComplete(task.id)}
                                        onDelete={() => this.handleDeleteTask(task.id)}
                                        key={task.id}
                                        task={task} />
                            })}
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        )
    }
}