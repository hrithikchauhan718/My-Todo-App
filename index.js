const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const list = document.querySelector('#tasks');

form.addEventListener('submit', (e) => {

    if (input.value.trim() != 0) {

        let localItems = JSON.parse(localStorage.getItem('localItem'));
        if (localItems === null) {
            taskList = [];
        }
        else {
            taskList = localItems;
        }
        taskList.push(input.value);
        localStorage.setItem('localItem', JSON.stringify(taskList));
    }
    showList();

    input.value = "";
})

function showList() {

    let localItems = JSON.parse(localStorage.getItem('localItem'));
    if (localItems === null) {
        taskList = [];
    }

    else {
        taskList = localItems;
    }

    let html = '';
    let itemShow = document.querySelector('#tasks');
    taskList.forEach((data, index) => {
        html += `
                <div class = "task">
                    <div class = "content">
                    <input type = "text"
                    class = "text"
                    value = "${data}"
                    readonly >
                    <button class="delete" onClick = "deleteItem(${index})"> DELETE </button>
                    </div>
                </div>
            `
    });

    if (taskList.length != 0) {
        itemShow.innerHTML = html;
    }
    else {
        itemShow.innerHTML = `<p>Nothing to show here!</p>`;
    }


}
showList();

function deleteItem(index) {
    console.log("delete");
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    taskList.splice(index, 1);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showList();
}  