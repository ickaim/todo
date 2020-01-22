import React from "react";
import { Form, Input, Button } from 'reactstrap';

export default class TodoForm extends React.Component {
    state = {
        id: 0,
        text: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: this.state.id + 1,
            text: this.state.text,
            complete: false
        })
        this.setState({
            id: this.state.id + 1,
            text: ""
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h3 className="text-center py-3">What to do</h3>
                    <div className="d-flex">
                        <Input
                            className="inputTask"
                            type="text"
                            name="text"
                            value={this.state.text}
                            onChange={this.handleChange}
                            placeholder="Add task"
                        />
                        <Button color="primary"> Add </Button>
                    </div>
                </Form>
            </div>
        )
    }
}