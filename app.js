const tasks = [
    {
        _id: '5d2ca9e2e03d40b326596aa7',
        completed: true,
        body:
            'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
        title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
        _id: '5d2ca9e29c8a94095c1288e0',
        completed: false,
        body:
            'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
        title:
            'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
    {
        _id: '5d2ca9e2e03d40b3232496aa7',
        completed: true,
        body:
            'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
        title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
        _id: '5d2ca9e29c8a94095564788e0',
        completed: false,
        body:
            'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
        title:
            'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
];

(function (arrOfTasks) {
    // * js variables
    const themes = {
        default: {
            '--base-text-color': '#212529',
            '--header-bg': '#007bff',
            '--header-text-color': '#fff',
            '--default-btn-bg': '#007bff',
            '--default-btn-text-color': '#fff',
            '--default-btn-hover-bg': '#0069d9',
            '--default-btn-border-color': '#0069d9',
            '--danger-btn-bg': '#dc3545',
            '--card-bg-color': '#fff',
            '--danger-btn-text-color': '#fff',
            '--bg-color-main': '#fff7f4',
            '--danger-btn-hover-bg': '#bd2130',
            '--danger-btn-border-color': '#dc3545',
            '--input-border-color': '#ced4da',
            '--input-bg-color': '#fff',
            '--input-text-color': '#495057',
            '--input-focus-bg-color': '#fff',
            '--input-focus-text-color': '#495057',
            '--input-focus-border-color': '#80bdff',
            '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
        },
        dark: {
            '--base-text-color': '#212529',
            '--header-bg': '#343a40',
            '--header-text-color': '#fff',
            '--default-btn-bg': '#58616b',
            '--default-btn-text-color': '#fff',
            '--card-bg-color': '#343a40',
            '--default-btn-hover-bg': '#292d31',
            '--bg-color-main': 'rgba(87,96,106,0.98)',
            '--default-btn-border-color': '#343a40',
            '--default-btn-focus-box-shadow':
                '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
            '--danger-btn-bg': '#b52d3a',
            '--danger-btn-text-color': '#fff',
            '--danger-btn-hover-bg': '#88222c',
            '--danger-btn-border-color': '#88222c',
            '--input-border-color': '#ced4da',
            '--input-bg-color': '#fff',
            '--input-text-color': '#495057',
            '--input-focus-bg-color': '#fff',
            '--input-focus-text-color': '#495057',
            '--input-focus-border-color': '#78818a',
            '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
        },
        light: {
            '--base-text-color': '#212529',
            '--header-bg': '#fff',
            '--header-text-color': '#212529',
            '--default-btn-bg': '#fff',
            '--default-btn-text-color': '#212529',
            '--bg-color-main': '#fff7f4',
            '--card-bg-color': '#fff',
            '--default-btn-hover-bg': '#e8e7e7',
            '--default-btn-border-color': '#343a40',
            '--default-btn-focus-box-shadow':
                '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
            '--danger-btn-bg': '#f1b5bb',
            '--danger-btn-text-color': '#212529',
            '--danger-btn-hover-bg': '#ef808a',
            '--danger-btn-border-color': '#e2818a',
            '--input-border-color': '#ced4da',
            '--input-bg-color': '#fff',
            '--input-text-color': '#495057',
            '--input-focus-bg-color': '#fff',
            '--input-focus-text-color': '#495057',
            '--input-focus-border-color': '#78818a',
            '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
        },
    };
    const themesLS = localStorage.getItem("theme") === null ? 'default' : localStorage.getItem("theme");

    console.log(localStorage.getItem("theme") === null );
    const objOfTasks = arrOfTasks.reduce((acc, element) => {
        acc[element._id] = element;
        return acc;
    }, {});
    const notDoneTasks = arrOfTasks.reduce((acc, element) => {
        if (!element.completed) acc[element._id] = element;
        return acc;
    }, {});


    // * html elements
    const listOfItems = document.querySelector(".list-group");

    const form = document.forms["addTask"];
    const inputTitle = form.elements["title"];
    const inputBody = form.elements["body"];

    const allTasksBtn = document.querySelector("#allTasks");
    const notCompletedTasksBtn = document.querySelector("#notComplited");

    const themeSelect = document.querySelector("#themeSelect");
    // * calls
    render(objOfTasks);
    setTheme(themesLS);

    form.addEventListener("submit", submitEventHandler);

    listOfItems.addEventListener("click", deleteHandler);
    listOfItems.addEventListener("click", doneHandler);

    allTasksBtn.addEventListener("click", allTasksHandler);
    notCompletedTasksBtn.addEventListener("click", notCompletedTasksHandler);

    themeSelect.addEventListener('change', onThemeSelectHandler);


    // * functions
    function render(obj, isFirst = true) {
        if (!obj) {
            console.error("NO OBJ");
            return;
        }

        const frag = document.createDocumentFragment();

        Object.values(obj).forEach(task => {
            const li = createListItem(task);

            frag.appendChild(li)
        });

        listOfItems.innerHTML = "";

        listOfItems.appendChild(frag);

        if (listOfItems.childElementCount === 0 && isFirst) {
            alertInit(objOfTasks);
            console.log("alertINIT")
        }


    }

    function createListItem({_id, body, title, completed} = {}) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex align-items-center flex-wrap mt-2";
        if (completed) li.classList.add("bg-warning");

        const elementTitle = document.createElement("h3");
        elementTitle.textContent = title;
        elementTitle.style.fontWeight = "700";

        const btnDel = document.createElement("button");
        btnDel.className = "btn btn-danger ml-auto delete-btn";
        btnDel.textContent = "Delete";

        const text = document.createElement("p");
        text.textContent = body;
        text.className = "w-100 mt-2";

        const btnCompleted = document.createElement("button");
        btnCompleted.textContent = "Complite Task";
        btnCompleted.className = "btn btn-success done-btn";

        li.insertAdjacentElement("beforeend", elementTitle);
        li.insertAdjacentElement("beforeend", text);
        li.insertAdjacentElement("beforeend", btnDel);
        li.insertAdjacentElement("beforeend", btnCompleted);

        li.dataset.taskId = _id;
        return li
    }

    function submitEventHandler(e) {
        e.preventDefault();

        if (listOfItems.classList.contains("notDoneTasks")) {
            alertRemover(notDoneTasks);
        } else
            alertRemover(objOfTasks);

        const textTitle = inputTitle.value;
        const textBody = inputBody.value;

        if (!textBody || !textTitle) {
            alert("Заполните форму");
            return;
        }

        const task = taskCreator(textTitle, textBody);
        const listItem = createListItem(task);
        listOfItems.insertAdjacentElement("afterbegin", listItem);

        notDoneTasks[task._id] = task;

        form.reset();

    }

    function taskCreator(body, title, isCompleted = false) {
        const task = {
            _id: `task-${Math.random()}`,
            completed: isCompleted,
            body,
            title
        };

        objOfTasks[task._id] = task;

        return {...task}
    }


    function alertRemover(obj) {
        if (Object.values(obj).length === 0) {
            const alert = document.querySelector(".alert");
            alert.remove();
        }
    }

    function alertCreator() {
        const alertMess = document.createElement("div");
        alertMess.className = "alert alert-danger mt-3";

        const alertTitle = document.createElement("h4");
        alertTitle.textContent = "У вас нет никаких задачь";

        const hr = document.createElement("hr");

        const alertText = document.createElement("p");
        alertText.textContent = "Добавьте пожалуйста задачи";

        alertMess.appendChild(alertTitle);
        alertMess.appendChild(hr);
        alertMess.appendChild(alertText);


        return alertMess;
    }

    function alertInit(obj) {
        if (!Object.values(obj).length) {
            const allertMessage = alertCreator();
            listOfItems.insertAdjacentElement("beforeend", allertMessage);
            console.log(!Object.values(obj).length);
        }
    }

    function deleteHandler({target}) {
        if (target.classList.contains("delete-btn")) {
            const parent = target.parentElement;

            delete objOfTasks[parent.dataset.taskId];
            delete notDoneTasks[parent.dataset.taskId];

            parent.remove();

            if (listOfItems.classList.contains("notDoneTasks")) {
                alertInit(notDoneTasks);
            } else
                alertInit(objOfTasks);

        }
    }

    function doneHandler({target}) {
        if (target.classList.contains("done-btn")) {
            const parent = target.parentElement;

            const bodyText = parent.querySelector("p").textContent;
            const titleText = parent.querySelector("h3").textContent;
            const id = parent.dataset.taskId;

            delete notDoneTasks[id];

            if (listOfItems.classList.contains("notDoneTasks")) {
                parent.remove();
                alertInit(notDoneTasks);
            }

            objOfTasks[id].completed = true;
            parent.classList.add("bg-warning");

        }
    }

    function allTasksHandler() {
        listOfItems.classList.remove("notDoneTasks");

        render(objOfTasks, false);

        alertInit(objOfTasks);
        console.log(objOfTasks);
    }

    function notCompletedTasksHandler() {
        listOfItems.innerHTML = "";
        listOfItems.classList.add("notDoneTasks");

        render(notDoneTasks, false);
        console.log(notDoneTasks);
        alertInit(notDoneTasks);
    }

    function onThemeSelectHandler(e) {
        const selectedTheme = themeSelect.value;


        setTheme(selectedTheme);
    }

    function setTheme(name) {
        const selectedThemObj = themes[name];
        console.log(selectedThemObj);
        Object.entries(selectedThemObj).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });

        themeSelect.value = name;
        localStorage.setItem("theme", name);
    }
})(tasks);
