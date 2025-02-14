import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Todo } from './types';

interface TodoItemProps{
    todo: Todo
}
const TodoItem: React.FC<TodoItemProps> = ({todo}) =>{
    console.log(todo, 'todo from todoItem component');
    return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Text style={styles.todoText}>{todo.text}</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.editButton, {backgroundColor:'green'}]}>
                    <Text style={styles.editButtonsText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.deleteButton, {backgroundColor:'red'}]}>
                    <Text style={styles.editButtonsText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default TodoItem;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:'2%',
        borderWidth:1,
        borderBottomColor:'gray',
        marginBottom:10,
        justifyContent:'space-between',
        alignItems: 'center',
        borderRadius:5,
    },
    todoText:{
        fontSize:14,
        fontWeight:'bold',
        textAlign: 'center',
    },
    buttonContainer:{
        flexDirection:'row',
    },
    editButton:{
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:5,
        marginRight:5,
    },
    deleteButton:{
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:5,
    },

    editButtonsText:{
        fontSize:14,
        fontWeight:'bold',
        color:'white',
    },
});
