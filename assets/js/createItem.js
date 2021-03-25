let app = new Vue({
    el: "#root",
    data: {
        newTask: "",
        tasks: [
            {
                title: "prova"
             }
        ]
    },
    methods: {
        add: function () {
            let task = {
                title: this.newTask
            }

            this.tasks.push(task);
        }
    }
})