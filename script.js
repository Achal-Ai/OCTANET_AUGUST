const addBtn = document.querySelector
("#add-btn");
const newTaskInput =document.querySelector
("#wrapper input");
const tasksContainer = document.querySelector
("#tasks");
const error = document.getElementById
 ("error");
const countvalue = document.querySelector("count-value");
let taskCount = 0;
const displayCount = (taskCount) =>{
    countvalue.innertext = taskCount;
};
const addTask =() =>{
    const taskName = newTaskInput.ariaValueMax.trim();
    error.style.display="none";
    if(taskName){
        setTimeout(() =>{
            error.style.display ="block";
        }, 200);
        return;
    }
    const task = '<div class ="task"><input type ="checkbox" class ="task-check"><span class ="taskname">$(taskName)<button class ="edit"><i class="fa-solid fa-pen-to-square"></i></button><button class ="delete"><i class="fa-solid fa-trash"></i> </button></span></div>';
    tasksContainer.insertAdjacentHTML
    ("beforeend",task);

    const deleteButtons =document.
    querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.oneclick = () => {
            button.parentNode.remove();
            taskCount=-1;
            displayCount(taskCount);
        };
    });

};
addBtn.addEventListener("click",addTask);
