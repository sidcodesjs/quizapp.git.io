import React from "react";
import { View,Text,StyleSheet, Touchable, TouchableOpacity } from "react-native";

const Task = (props) =>{
return(

    <View style={styles.items}>
        <View style={styles.itemsLeft}>
            <TouchableOpacity style={styles.touch}></TouchableOpacity>
        <Text styles={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
)}

const styles = StyleSheet.create({

items:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    margin: 15,

},
itemsLeft:{
flexDirection:'row',
padding: 15,
borderRadius: 10,
},
itemText:{
 maxWidth: '80%',
},
touch:{
    width: 24,
    height:24,
    backgroundColor:'#55BCF6',
    opacity: .4,
    borderRadius: 10,
    marginRight:10,

},
circular:{
width: 12, 
height: 12, 
borderColor:'#55BCF6',
borderWidth: 2,
borderRadius: 5,
}

});

export default Task