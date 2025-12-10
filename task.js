import { allTasks } from "./db.js"



export function createTask(details){

    let task = {id: id, date: date, details: details, status: status};
    allTasks.push(task);

    return task;

};