import AsyncStorage from '@react-native-async-storage/async-storage';

const AppHelpers = {}

     AppHelpers.getTodos = async (callback) => {
        try {
            const todos = await AsyncStorage.getItem('@todos')
            const todoArr = todos ? JSON.parse(todos) : []
          if(typeof callback === "function") {
              callback(todoArr)
          }
        } catch (e) {
            console.log(e);
        }
    }

    AppHelpers.setTodos = async (todos) => {
        try {
            return await AsyncStorage.setItem('@todos', JSON.stringify(todos));
        } catch (e) {
            console.log(e);
        }
    }


export default AppHelpers;
