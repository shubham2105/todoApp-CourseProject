import { StyleSheet,Text,TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

interface TodoInputProps{
    onAddTodo: (text: string) => void;
}
const TodoInput: React.FC<TodoInputProps> = ({onAddTodo}) => {
    const [text, setText] = useState('');

    const handleAddTodo = () =>{
        if(text.trim()){
            onAddTodo(text.trim());
            setText('');
        }
    };

  return (
    <View style = {styles.container}>
        <TextInput
        style= {styles.input}
        placeholder="Add new Todos..."
        value={text}
        onChangeText={setText}
        />
        <TouchableOpacity onPress={handleAddTodo} style= {styles.addTodoButton}>
            <Text style={{color:'white', fontWeight:'bold'}}>Add</Text>
        </TouchableOpacity>
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding:20,
        alignItems: 'center',
    },
    input:{
        flex:1,
        borderWidth:1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical:5,
        marginRight:5,
    },
    addTodoButton:{
        backgroundColor: 'skyblue',
        padding:'2%',
        borderRadius:5,
    },
});
