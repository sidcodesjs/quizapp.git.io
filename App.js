import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Touchable,Platform, TouchableOpacity, View, Keyboard, } from 'react-native';
import Task from './components/Task';


export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) =>{
let itemsCopy = [...taskItems];
itemsCopy.splice(index, 1);
setTaskItems(itemsCopy)
  }


  return (
    <View style={styles.container}>
<View style={styles.tasksWrapper}>
  <Text style={styles.sectionTitle}>CODERBEINGS TO-DO LIST.</Text>
  <View style={styles.items}>
    {
      taskItems.map((item, index)=>{


       return(
        <TouchableOpacity  key={index} onPress={() => completeTask(index)}>
       <Task text={item}/>
        </TouchableOpacity>
        )

      })
    }
  </View>
</View>

<KeyboardAvoidingView
style={styles.writeTaskWrapper}>

{/* <TextInput style={styles.input} placeholder={'Please enter your task..'} value={task} onChangeText={text =>setTask(text)}/> */}

<TextInput style={styles.input} placeholder={'Please enter your task..'} value={task} onChangeText={text =>setTask(text)}/>



<TouchableOpacity onPress={()=> handleAddTask()}>
  <View style={styles.wrapper}
  >
    <Text style={styles.addText}>+</Text>
  </View>
</TouchableOpacity>
</KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E4E2',
    
  },
 

  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal:20,

  },

  sectionTitle:{
    fontSize: 24,
    fontWeight:'bold'

  },

  items:{
marginTop:30,
  },

  writeTaskWrapper:{

    position:'absolute',
    bottom: 60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding: 20,
  },


  input:{
paddingVertical:15,
paddingHorizontal:15,
backgroundColor:'#FFF',
borderRadius:60,
borderWidth: 1,
width: 250,
borderColor: "#C0C0C0",
height:50,


  },
  wrapper:{
width:60,
height:60,
backgroundColor:'#FFF',
justifyContent: 'center',
alignItems:'center',
// marginTop: 200,
// marginHorizontal:280,
borderRadius: 100
  },
  addText:{
fontSize: 30,
fontWeight: 'bold',
color:'#808080'

  },

});


