import React from "react";
export default props => (
    <div
        className={props.task.complete ? "task taskDone" : "task"}
        onClick={props.toggleComplete}>
        {props.task.text}
    </div>
)