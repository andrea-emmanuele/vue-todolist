new Vue({
    el: "#root",
    data: {
        newTask: "",
        onEdit: false,
        taskEdited: "",
        tasks: [],
        tasksDone: [],
        emptyTasks: "there aren't tasks to do, let's add one task"
    },
    methods: {
        add: function () {
            if (this.newTask !== "") {
                if (this.onEdit === true) {
                    this.tasks[this.taskEdited].title = this.newTask;
                    this.newTask = "";
                    this.onEdit = false;
                }
                else {
                    let task = {
                        title: this.newTask
                    }

                    this.tasks.push(task);
                    this.newTask = "";
                    document.getElementById("task").focus();
                }
            }
        },
        check: function (task, i) {
            this.tasksDone.push(task);
            this.deleteTask(i);
            console.log(this.tasksDone);
        },
        edit: function (task, i) {
            this.newTask = task;
            this.onEdit = true;
            this.taskEdited = i;
            document.getElementById("task").focus();
        },
        deleteTask: function (i) {
            this.tasks.splice(i, 1);
        },
    }
})