let taskcounter: number = 0;

window.addEventListener("load", function (): void {
    document.querySelector(".addButton").addEventListener("click", AddTaskText);
    document.querySelector(".items").addEventListener("click", AddTaskText);
});

function AddTaskText(): void {
    let newtask: string = (<HTMLInputElement>document.querySelector(".newtask")).value;
    console.log(newtask);
    addTaskToList(newtask);
    let element = document.querySelector(".Rahmen");
    let numberofChildren = element.children.length;
    taskcounter = numberofChildren;
    console.log("Die Anzahl der To-Dos lautet:" + numberofChildren);
    document.querySelector(".items").innerHTML = numberofChildren + " in total";
}

function addTaskToList(newTaskValue: string): void {
    let addElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskId" + taskcounter);
    let myHtmlTemplate: string = "";
    myHtmlTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + taskcounter + "\"></button>";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + taskcounter + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".Rahmen").appendChild(addElement);
    console.log("addTasktoList:" + newTaskValue);
}

function DeleteTaskText(ClickedTrash): void {
    console.log("This is deleating the task");
    ClickedTrash.parentElement.remove();
    taskcounter--;
    let element = document.querySelector(".Rahmen");
    let numberofChildren = element.children.length;
    document.querySelector(".items").innerHTML = numberofChildren + " in total";
}

function CheckedButton(ClickedButton): void {
    if (ClickedButton.classList.contains("fa-circle")) {
        ClickedButton.classList.remove("fa-circle");
        ClickedButton.classList.add("fa-check-circle");
    } else {
        ClickedButton.classList.remove("fa-check-circle");
        ClickedButton.classList.add("fa-circle");
    }
}
