import { TaskService } from "./tasks/task.service";
const taskService = new TaskService();
taskService.displayTasks();
taskService.addTask("Selesai laporan");
taskService.toggleTask(1);
taskService.displayTasks();