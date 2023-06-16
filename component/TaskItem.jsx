import { View,Text,TouchableOpacity,keyExtractor ,StyleSheet} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import {useState} from 'react'


export  const TaskItem=(props)=> {
    const [check,setCheck]=useState(false);
   

  return (
    <View style={styles.container}>
       
  {/*  added task  */}
        <View style={check?styles.textWithChick:styles.textView}>
            <Text style={styles.text}>{props.task}</Text>
        </View>

{/* chick icon */}
        <TouchableOpacity
        onPress={()=>{
            setCheck(true);
        }}>
            <MaterialIcons name="check" size={40} color="#33ce7d"/>

        </TouchableOpacity>


{/* delet icon */}
        <TouchableOpacity
        onPress={()=>{
            setCheck(false)
            props.delete();
        }}>
            <MaterialIcons name="delete" size={40} color="#939192"/>

        </TouchableOpacity>

        

    </View>
  )
}

const styles=StyleSheet.create({
    container:{
         alignItems:"center",
         flexDirection:"row",
         justifyContent:"center"
    },
    textView:{
        margin:10,
        padding:10,
        width:"75%",
        borderRadius:10,
        backgroundColor:"#f2a1c7"

    },
    text:{
        color:"black",
        fontSize:20
    },

    textWithChick:{
        color:"black",
        fontSize:20,
        backgroundColor:"#33ce7d",
        margin:10,
        padding:10,
        width:"75%",
        borderRadius:10,

    }

})
