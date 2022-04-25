import React, { useState, useEffect } from "react";
import NewTask from "../Components/NewTask";
import TasksList from "../Components/TasksList";

export default function ToDoList() {
    const [newTask, setNewTask] = useState({});
    const [allTasks, setAllTasks] = useState([]);
  
    const handleChange = ({ target }) => {
      const { name, value } = target;
      setNewTask((prev) => ({ 
        ...prev, 
        id: Date.now(), 
        [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!newTask.title) return;
      setAllTasks((prev) => [
        newTask, 
        ...prev
        ]);
      setNewTask({});
    };
  
    const handleDelete = (taskIdToRemove) => {
      setAllTasks((prev) => prev.filter(
        (task) => task.id !== taskIdToRemove
      ));
    };

    // useEffect(() => {
    //   console.log("I re-rendered");
    //   <TasksList 
    //   allTasks={allTasks} 
    //   handleDelete={handleDelete} 
    //   />
    // }, [allTasks])
  
    return (
      <main>
        <h1>Tasks</h1>
        <NewTask
          newTask={newTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TasksList 
        allTasks={allTasks} 
        handleDelete={handleDelete} 
        />
      </main>
    );
  }