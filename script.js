// Select the input field and button elements
let add = document.querySelector('button');
let task = document.querySelector('input');

// Create an array to store tasks from the user
const arr = [];

// Create a container element that will appear if the array is empty
let containerr = document.createElement("div");

containerr.classList = "container-2";
let p = document.createElement("p");
p.style = "font-size: 20px; font-weight: bold; color: white;";
let content = document.createTextNode("-There is no tasks.");
p.appendChild(content);
containerr.appendChild(p);
document.body.appendChild(containerr);

task.addEventListener('input', ()=> {
    if (task.value.trim() !== '') {
        add.disabled = false;
        add.style.opacity = '1';
        containerr.remove();
        
    } else {
        add.disabled = true;
        add.style.opacity = '0.5';
        document.body.appendChild(containerr);
    }
});


// Function to check if the array is not empty and remove the container if necessary
    function checkArrLength() {
        if (arr.length > 0){
            containerr.remove();
        } 
    }

// Declare and initialize a static variable for differentiating task
let i = 0;

// Add an event listener to the button to add tasks when clicked
add.addEventListener("click", ()=>{

    // Create necessary elements and assign classes, append them to the DOM
    let container = document.createElement("div");
    container.classList = "container-2";
    let tasks = document.createElement("div");
    tasks.classList = "tasks";

    // Add the user input task to the array
    arr.push(task.value);
    // Call checkArrLength function
    checkArrLength();

    // Create a new task element
    let new_task = document.createElement("div");
    new_task.classList = "task";
    new_task.classList.add(String(i));

    // Create a paragraph element for the task name and set its content
    let task_name = document.createElement("p");
    task_name.style.textTransform = 'capitalize';
    task_name.textContent = arr[i];
    new_task.appendChild(task_name);

    // Create delete and done icons
    let del = document.createElement("i");
    let done = document.createElement("i");

    done.classList = "fa-solid fa-circle-check";
    del.classList = "fa-solid fa-trash-can";
    del.classList.add(String(i));
    done.classList.add(String(i));
    // Increase variable i by 1
    i = i+1;
    // Append the icons to the new task element
    new_task.appendChild(done);
    new_task.appendChild(del);
    // Append the new task element to the tasks container
    tasks.appendChild(new_task);
    // Append the new task element to the tasks container
    container.appendChild(tasks)
    // Append the main container to the document body
    document.body.appendChild(container);
    // Clear the input field value
    task.value = "";

    // Add event listener to delete the task
    del.addEventListener("click", (e)=>{
        for (let i = 0; i < arr.length; i++) {
            if(e.target.classList.contains(i)){
                    new_task.classList.contains(i)? new_task.remove() : null ;
                }
            };
    })
    // Add event listener to mark the task as done
    done.addEventListener("click", (e)=>{
        for (let i = 0; i < arr.length; i++) {
            if(e.target.classList.contains(i)){
                    new_task.classList.contains(i)?  new_task.style = "text-decoration: line-through;" : null ;
                }
            };
    
    })
})


