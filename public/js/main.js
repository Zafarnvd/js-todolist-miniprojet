let input = document.querySelector('.todo_input')
let MainTodo = document.getElementById('part-3');
let addBtn = document.querySelector('.add-item')
let deleteAllBtn = document.querySelector(('.deleteBtn'))
let done = document.querySelector('.done')
let all = document.querySelector('.all')
let toDo = document.querySelector('.to-do')

let createDiv = () => {
    if (input.value.trim()) {
        // Create Ul
        let ul = document.createElement("ul");
        ul.classList.add('todo-list-container');
        // create DIV
        let toDoList = document.createElement("div");
        toDoList.classList.add('todo-list');
        // Create LI
        let li = document.createElement("li");
        li.innerHTML = input.value;
        li.classList.add('todo-item');
        // Create Div
        let btnDiv = document.createElement("div");
        btnDiv.classList.add('button');

        // Bouton Add
        let completeBtn = document.createElement("button");
        completeBtn.classList.add('completed')
        completeBtn.innerHTML = '<i class="far fa-check-square"></i>'
        completeBtn.addEventListener('click', () => {
            if (li.style.color == "green") {
                li.style.color = "red"
            } else {
                li.style.color = "green"
            }
            // completeBtn.style.backgroundColor = "green"
            // li.style.color = "green"

        })

        // Bouton Edit
        let editBtn = document.createElement("button");
        editBtn.classList.add('edit')
        editBtn.innerHTML = '<i class="fas fa-edit"></i>'
        editBtn.onclick = function () {
            edit(li);
        }

        // Bouton Pbl
        let pblBtn = document.createElement("button");
        pblBtn.classList.add('pbl')
        pblBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'

        ul.appendChild(toDoList);
        toDoList.appendChild(li);
        toDoList.appendChild(btnDiv);
        btnDiv.appendChild(completeBtn);
        btnDiv.appendChild(editBtn);
        btnDiv.appendChild(pblBtn);
        MainTodo.appendChild(ul)

        toDoList.addEventListener('click', function (e) {
            let items = e.target;
            // Complete
            if (items.classList[0] === 'completed') {
                let todo = items.parentElement;
                let todo2 = todo.parentElement;
                todo2.classList.add('lock')
                // Delete
            }
            if (items.classList[0] === 'pbl') {
                let todo = items.parentElement;
                let todo2 = todo.parentElement;
                todo2.remove();
            }
        })
        input.value = ""
    }
}

addBtn.addEventListener('click', function (e) {
    createDiv()
})

// Edit
function edit(e) {
    let editValue = prompt('changez le nom', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue
}

// Delete All
function deleteAllEllement() {
    let allUl = document.querySelectorAll('.todo-list-container');
    for (let i = 0; i < allUl.length; i++) {
        allUl[i].remove();
    }
}

// done.addEventListener("click", () => {
//     let allitems = document.querySelectorAll(".todo-item");
//     allitems.forEach((e) => {
//         e.style.display = "";
//     });
//     allitems.forEach((e) => {
//         if (e.allitems.style.color !== "green") {
//             e.style.display = "none";
//         }
//     });
// });
// toDo.addEventListener("click", () => {
//     let allitems = document.querySelectorAll(".todo-item");
//     allitems.forEach((e) => {
//         e.style.display = "";
//     });
//     allitems.forEach((e) => {
//         if (e.allitems.style.color === "green") {
//             e.style.display = "none";
//         }
//     });
// });
// all.addEventListener("click", () => {
//     let allitems = document.querySelectorAll(".todo-item");
//     console.log(allitems);
//     allitems.forEach((e) => {
//         e.style.display = "";
//     });
// });


done.addEventListener("click", () => {
    let allitems = document.querySelectorAll(".todo-list");
    allitems.forEach((e) => {
        e.style.display = "";
    });
    allitems.forEach((e) => {
        if (e.children[0].style.color !== "green") {
            e.style.display = "none";
        }
    });
});
toDo.addEventListener("click", () => {
    let allitems = document.querySelectorAll(".todo-list");
    allitems.forEach((e) => {
        e.style.display = "";
    });
    allitems.forEach((e) => {
        if (e.children[0].style.color === "green") {
            e.style.display = "none";
        }
    });
});
all.addEventListener("click", () => {
    let allitems = document.querySelectorAll(".todo-list");
    allitems.forEach((e) => {
        e.style.display = "";
    });
});

input.addEventListener("keypress", (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
        createDiv()
    }
});