import tasksReducer, { setTasks, addTask } from "./slice";
import { TasksType } from "../../entities";

describe("tasks slice", () => {
  const initialState: TasksType[] = [];

  it("should return the initial state", () => {
    expect(tasksReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setTasks", () => {
    const tasks: TasksType[] = [
      { id: "1", description: "Task 1" },
      { id: "2", description: "Task 2" },
    ];
    const actual = tasksReducer(initialState, setTasks(tasks));
    expect(actual).toEqual(tasks);
  });

  it("should handle addTask", () => {
    const newTask: TasksType = { id: "1", description: "Task 1" };
    const actual = tasksReducer(initialState, addTask(newTask));
    expect(actual).toEqual([newTask]);
  });

  it("should append tasks with setTasks", () => {
    const initialTasks: TasksType[] = [{ id: "1", description: "Task 1" }];
    const newTasks: TasksType[] = [
      { id: "2", description: "Task 2" },
      { id: "3", description: "Task 3" },
    ];
    const actual = tasksReducer(initialTasks, setTasks(newTasks));
    expect(actual).toEqual([...initialTasks, ...newTasks]);
  });

  it("should add a task to existing tasks", () => {
    const initialTasks: TasksType[] = [{ id: "1", description: "Task 1" }];
    const newTask: TasksType = { id: "2", description: "Task 2" };
    const actual = tasksReducer(initialTasks, addTask(newTask));
    expect(actual).toEqual([...initialTasks, newTask]);
  });
});
