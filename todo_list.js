function todoList() {
    const tasks = [];
    function add(task, dueDate = null) {
        tasks.push({ task, completed: false, dueDate });
    }
    function markAsCompleted(task) {
        tasks.forEach(t => {
            if (t.task === task) t.completed = true;
        });
    }
    function dueDate(date) {
        return tasks.filter(t => t.dueDate === date);
    }
    function dueToday(today) {
        return tasks.filter(t => t.dueDate === today && !t.completed);
    }
    function dueLater(today) {
        return tasks.filter(t => t.dueDate && t.dueDate > today);
    }
    function overdue(today) {
        return tasks.filter(t => t.dueDate && t.dueDate < today && !t.completed);
    }

    function displayTodos() {
        let output = "My Todo-list\n";

        const overdueTasks = overdue("2024-12-13");
        output += "\nOverdue\n";
        output += overdueTasks.length === 0 ? "[] No overdue tasks\n" : overdueTasks
            .map(todo => `[ ] ${todo.task} ${todo.dueDate ? todo.dueDate : ''}`)
            .join("\n");

        const dueTodayTasks = dueToday("2024-12-15");
        output += "\n\nDue Today\n";
        output += dueTodayTasks.length === 0 ? "[] No tasks due today\n" : dueTodayTasks
            .map(todo => `[${todo.completed ? 'x' : ' '}] ${todo.task} ${todo.dueDate ? todo.dueDate : ''}`)
            .join("\n");

        const dueLaterTasks = dueLater("2024-12-17");
        output += "\n\nDue Later\n";
        output += dueLaterTasks.length === 0 ? "[] No tasks due later\n" : dueLaterTasks
            .map(todo => `[ ] ${todo.task} ${todo.dueDate ? todo.dueDate : ''}`)
            .join("\n");

        return output;
    }

    return {
        add,
        markAsCompleted,
        dueDate,
        dueToday,
        dueLater,
        overdue,
        displayTodos
    };
}

const myTodoList = todoList();
myTodoList.add("Go for a walk", "2024-12-18");
myTodoList.add("Buy groceries", "2024-12-12");
myTodoList.add("Shopping", "2024-12-16");
myTodoList.add("Doctor Appointment", "2024-12-13");
myTodoList.markAsCompleted("Buy groceries");
myTodoList.markAsCompleted("Doctor Appointment");

console.log(myTodoList.displayTodos());