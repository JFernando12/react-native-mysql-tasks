import { FlatList, RefreshControl } from 'react-native';
import React from 'react';
import TaskItem from './TaskItem';
import { getTasks, deleteTask } from '../api';
import { useIsFocused } from '@react-navigation/native';

const TaskList = () => {

  const [tasks, setTasks] = React.useState([]); //Variable 'tasks' con un array vacio.
  const [refresh, setRefresh] = React.useState(true)

  const loadTasks = async() => {
      const data = await getTasks();
      console.log(data)
      setTasks(data);
  }

  const handleDelete = async(id) => {
    await deleteTask(id);
    loadTasks();
  }

  const isFocused = useIsFocused();

  React.useEffect(() => { //Es para usar funciones dentro de react.
    loadTasks();
  }, [isFocused]) //Para cargarlo una sola vez

  const renderItem =  ({item}) => {
    return <TaskItem task={item} handleDelete={handleDelete}/>
    } 

  const onRefresh = React.useCallback(async () => {
    setRefresh = true;
    await loadTasks();
    setRefresh = false;
  })  

  return (
   <FlatList
        style={{width: "100%"}}
        data={tasks}
        keyExtractor={(item) => item.id + " "}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
          refreshing={refresh}
          colors={["#78e08f"]}
            onRefresh={onRefresh}
          />
        }
   />     
  )
}

export default TaskList