import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Todo } from './types';
import TodoEdit from './TodoEdit';
interface TodoItemProps{
    todo: Todo
    onDelete: () => void;
    onToggle: () => void;
    onEdit: (newText: string) => void;
}
const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggle, onEdit}) =>{
    const [isEditing, setIsEditing] = React.useState(false);

    const handleEdit = (newText: string)=>{
        console.log(newText, 'From handleEdit');
        onEdit(newText);
        setIsEditing(false);
    };
    if (isEditing){
        return <TodoEdit
            todo={todo}
            onSave={handleEdit}
            onCancel={()=>setIsEditing(false)}
            />;
    }
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={onToggle}>
                <Text style={[styles.todoText, todo?.completed && styles.completedText]}>{todo.text}</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <TouchableOpacity disabled={todo?.completed} onPress={()=>setIsEditing(true)} style={[styles.editButton, {backgroundColor: todo?.completed ? 'gray' : 'green', opacity: todo?.completed ? 0.5 : 1}]}>
                    <Text style={styles.editButtonsText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={todo?.completed} onPress={onDelete} style={[styles.deleteButton, {backgroundColor: todo?.completed ?'gray':'red', opacity: todo?.completed ? 0.5 : 1}]}>
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
    completedText:{
        textDecorationLine:'line-through',
        color:'gray',
    },
});
