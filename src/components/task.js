import React from "react";
export default props => (
    <div className="task d-flex">
        <div
            className={props.task.complete ? "taskDone" : ""}
            onClick={props.toggleComplete}>
            {props.task.text}
        </div>
        <button onClick={props.onDelete} className="close"><div>x</div></button>
    </div>
)