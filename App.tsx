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

  const deleteTodo = (id: string) => {
    console.log(id);
    setTodoList(todoList.filter(item => item.id !== id));
  };

const editTodo = (id: string, newText: string) => {
  setTodoList(todoList.map(item => item.id === id ?
    {
      ...item,
      text: newText,
    }
    : item,
  ));
};

  const toggleTodo = (id:string) =>{
    setTodoList(todoList.map(item => item.id === id ? {
      ...item,
      completed: !item.completed,
    }
    : item,
  ),);
  };

  return (
    <SafeAreaView style ={styles.container}>
      <Text style ={styles.headerText}>TodoApp</Text>
      <TodoInput onAddTodo={addTodo}/>
      <TodoList onEditTodo={editTodo} onToggleTodo= {toggleTodo} onDeleteTodo={deleteTodo} todoList={todoList}/>
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
