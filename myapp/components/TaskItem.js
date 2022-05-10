import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TaskItem = ({task, handleDelete}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("TaskFormScreen", { id: task.id })}>
        <Text style={styles.itemTitle}>{task.title}</Text>
        <Text style={styles.itemDescription}>{task.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: "red", borderRadius: 5, padding: 7}}
      onPress={() => handleDelete(task.id)}>
        <Text style={{color:"white"}}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "white",
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5
    },
    itemTitle: {

    },
    itemDescription: {

    }
})

export default TaskItem