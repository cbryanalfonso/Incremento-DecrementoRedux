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
import { connect } from 'react-redux';



class CounterApp extends Component{

/*
  decrementar=()=>{
    this.setState({counter: this.state.counter - 1})
  }

  incrementar=()=>{
    this.setState({counter: this.state.counter+1});
  }*/
  render(){
    return(
      <View style={styles.container}>
        <View style={{flexDirection: 'row',width: 300, justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={()=>this.props.decrementar()}>
            <Text style={{fontSize: 20,}}>Decrementar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 20,}}>{this.props.counter}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.incrementar()}>
            <Text style={{fontSize: 20,}}>Incrementar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state){
    return{
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return{
        decrementar:()=>dispatch({type:'DECREMENTAR'}),
        incrementar:()=>dispatch({type:'INCREMENTAR'}),

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


export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)
