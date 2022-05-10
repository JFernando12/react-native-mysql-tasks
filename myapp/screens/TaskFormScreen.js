import { Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import { TouchableOpacity } from 'react-native';
import { saveTask, getTask, updateTask } from '../api';

const TaskFormScreen = ( {navigation, route} ) => {

  const [editing, setEditing] = React.useState(false);

  const [task, setTask] = React.useState({
    title: "",
    description: ""
  })

  const handleSubmit = async() => {
    try {
      if(editing){
        await updateTask(route.params.id, task)
      }else{
        await saveTask(task);
      }
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error)
    }

  }

  const handleChange = (name, value) => setTask({...task, [name]: value}); //Modifica un valor y si no existe lo crea.

  React.useEffect(() => {
    if(route.params && route.params.id) {
      setEditing(true);
      navigation.setOptions({ headerTitle: "Updtaing Tasks" });
      (async() => {
        const res = await getTask(route.params.id);
        setTask(res);
      })();
    }
  }, [])

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Write a Title"
        placeholderTextColor="#546574"
        onChange={text => handleChange("title", text.target.value)}
        value={task.title}
      />
      <TextInput
        style={styles.input}
        placeholder="Write a Description"
        placeholderTextColor="#546574"
        onChange={text => handleChange("description", text.target.value)}
        value={task.description}
      />
      {!!editing ?(<TouchableOpacity style={styles.botonUpdate} onPress={handleSubmit}>
        <Text style={styles.botonText}>Update Task</Text>
      </TouchableOpacity>)
      :(<TouchableOpacity style={styles.botonSave} onPress={handleSubmit}>
        <Text style={styles.botonText}>Save Task</Text>
      </TouchableOpacity>)}
    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginBotton: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#10ac84",
    height: 35,
    color: "#ffffff",
    textAlign: "center",
    padding: 4,
    borderRadius: 5
  },
  botonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#10ac84",
    width: "90%"
  },
  botonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "blue",
    width: "90%"
  },
  botonText: {
    color: "#ffffff",
    textAlign: "center"
  }
})

export default TaskFormScreen