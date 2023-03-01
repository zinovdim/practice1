import React from 'react';

type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}


type PropsType = {
    title: string
    tasks: Array<TaskType>
    students: Array<string>
}

type TASKSPropsType = {
    task: PropsType
}

function TASKS(props: TASKSPropsType) {
    return (
        <div>
            <h3>{props.task.title}</h3>
            <ol>
                {props.task.students.map(el => {
                    return (
                        <li><span>{el} <input type="checkbox"
                                              checked={props.task.tasks[0].isDone}/>{props.task.tasks[0].title}
                            <input type="checkbox" checked={props.task.tasks[1].isDone}/>
                            {props.task.tasks[1].title}</span></li>
                    )
                })}
                </ol>
                </div>
                );
                }


                export default TASKS;