import input from "analiza-sync";



export function showMenu(){

    console.log("1: show existing tasks");
    console.log("2: create new task");
    console.log("3: edit existing task");
    console.log("4: delete task");
    console.log("0: exit");
    let userChoice = input("please choose what do you want to do: ");

    return userChoice
    
}