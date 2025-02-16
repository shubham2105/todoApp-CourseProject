import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Todo } from './types';

interface TodoEditProps {
    todo: Todo;
    onSave: (newText: string) => void;
    onCancel: () => void;
}
const TodoEdit: React.FC<TodoEditProps> = ({todo, onSave, onCancel}) => {

    const [text, setText] = useState(todo?.text);
    const handleSave = () =>{
        if(text.trim()){
            onSave(text.trim());
        }
    };
  return (
    <View style = {styles.container}>
      <TextInput
      value={text}
      onChangeText={setText}
      style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSave} style= {styles.saveButton}>
            <Text>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancel} style= {styles.cancelButton}>
            <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoEdit;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'lightgrey',
    },
    input:{
        flex:1,
        borderColor:'lightgrey',
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:5,
        marginRight:10,
        borderRadius:5,
    },
    buttonContainer:{
        flexDirection:'row',
    },
    saveButton:{
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:5,
        marginRight:5,
        backgroundColor:'yellow',
    },
    cancelButton:{
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:5,
        backgroundColor:'orange',
    },
});
