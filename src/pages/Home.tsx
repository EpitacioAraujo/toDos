import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

import { IHome } from '../model/Home';
import { Task } from '../model/Task';

export function Home(Props: IHome) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle === "")
      return null;
    
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }    
    
    setTasks(oldTasks => [...oldTasks, newTask])
  }

  function handleMarkTaskAsDone(id: number) {
    const updatedTaskList = tasks.map(
      (task) => (
        task.id == id ? 
          { 
            ...task,
            done: !task.done
          } :
          task
      )
    )

    setTasks(updatedTaskList)
  }

  function handleRemoveTask(id: number) {
    const oldTaskList = tasks;
    const tasksList = oldTaskList.filter(task => task.id != id);
    setTasks(tasksList)
  }

  return (
    <>
      <Header {...Props} />

      <TodoInput
        addTask={handleAddTask}
        {...Props} 
      />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
        {...Props} 
      />
    </>
  )
}