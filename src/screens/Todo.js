import React, { useState, useEffect} from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Button,
    ScrollView
} from "react-native";
import TodoList from "../components/TodoList";
import AppHelpers from "../utils/Helpers";
import Colors from "../utils/Colors";

const  Todo = () => {
    const [title, setTitle] = useState("");

    // Initalize empty array to store todos
    const [todos, setTodos] = useState([]);


    const addTodo = () => {
        if (title.length > 0) {
            // Add todo to the list
            const todosArr = [...todos, { key: Date.now(), name: title, isChecked: false }]
            console.log(todosArr, 'xxx')
            setTodos(todosArr);
            // save to local storage
            AppHelpers.setTodos(todosArr)
            // clear the value of the textfield
            setTitle("");
        }
    };


    const checkTodo = id => {
        // loop through todo list and look for the the todo that matches the given id param
        // update the state using setTodos function
        const todosArr = todos.map(todo => {
            if (todo.key === id) {
                todo.isChecked = !todo.isChecked;
            }
            return todo;
        })
        setTodos(todosArr);
        // save to local storage
        AppHelpers.setTodos(todosArr)
    };


    const deleteTodo = id => {
        // loop through todo list and return todos that don't match the id
        // update the state using setTodos function
        const todosArr = todos.filter(todo => {
            return todo.key !== id;
        })
        setTodos(todosArr);
        // save to local storage
        AppHelpers.setTodos(todosArr)
    };

    useEffect(() => {
        // check local storage for available todos
           AppHelpers.getTodos((value) => setTodos(value))
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.todo}>
                <TextInput
                    placeholder="Add a todo"
                    value={title}
                    onChangeText={value => setTitle(value)}
                    style={styles.textbox}
                />
                <Button title="Add" color={Colors.primary} onPress={() => addTodo()} />
            </View>
            <ScrollView>
                {todos && todos?.length > 0 && todos.map(todo => (
                    <TodoList
                        key={todo.key}
                        todo={todo}
                        checkTodo={checkTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

export default Todo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    todo: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    textbox: {
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 8,
        padding: 10,
        margin: 10,
        width: "80%"
    }
});
