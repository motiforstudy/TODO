import { allTasks } from "./db.js";


export function deleteTask(id){
    for (let task of allTasks){
        if (task["id"] === id){
            return
        };
    };
};