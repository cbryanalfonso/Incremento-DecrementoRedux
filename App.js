import React, { Component } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import CounterApp from './src/CounterApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState={
  counter :0
}
const reducer=(state=initialState, action)=>{
  switch(action.type){
    case 'DECREMENTAR':
      return {counter: state.counter-1}
    case 'INCREMENTAR':
      return {counter: state.counter+1}
  }
  return state
}
const store = createStore(reducer);

export default class App extends Component{
 
  render(){
    return(
      <Provider store={store}>
        <CounterApp></CounterApp>
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
})
