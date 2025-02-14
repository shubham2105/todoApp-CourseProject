import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';
import { Todo } from './src/components/types';

const TodoApp = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const addTodo = (text: string) =>{
    setTodoList([...todoList, {
      id: Date.now().toString(),
      text,
      completed: false,
    }]);
  };

  console.log(todoList);

  return (
    <SafeAreaView style ={styles.container}>
      <Text style ={styles.headerText}>TodoApp</Text>
      <TodoInput onAddTodo={addTodo}/>
      <TodoList todoList={todoList}/>
    </SafeAreaView>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  },
  headerText:{
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom:20,
  },
});
