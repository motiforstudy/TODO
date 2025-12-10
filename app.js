import input from "analiza-sync";

import { createTask } from "./task.js";
import { allTasks } from "./db.js";
import { showMenu } from "./show_menu.js";
import { deleteTask } from "./deleteTask.js";



let wantToContinu = true;

while (wantToContinu){

    let userInput = showMenu();

    switch(userInput){

        case "1":
            for (let task of allTasks){
                console.log(task);
            };
            break

        case "2":
            let getDetails = input("please write your task details: ");
            createTask(getDetails);
            break

        case "3":
            let taskId = input("please write the task id: ");
            
            break

        case "4":
            let getTaskId = input("please write the task id: ");
            deleteTask(getDetails)
            break

        case "0":

            wantToContinu = false
            break
    };

};