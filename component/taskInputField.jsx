import {useState} from 'react'
import { View,TextInput,StyleSheet,TouchableOpacity,Text } from 'react-native'
import {MaterialIcons} from "@expo/vector-icons"

export  const TaskInputField=(props)=> {

    const [task,setTask]=useState();
    const [checkInput,setcheckInput]=useState(false);
  const  handelAddTask=(value)=>{
    if(value==null){
     setcheckInput(true);
    }else{
        props.addTask(value)
        setTask(null)
    }
   
  }
  return (
    <View style={styles.container}>
       <Text style={styles.text}>
           TO DO LIST
       </Text>

       {/* /////////////////input task///////////////// */}
       <View style={styles.inputAndBtn}>
        <TextInput style={styles.textInput} placeholder='Enter your task'
        onChangeText={(txt)=>{
           
            setTask(txt)
            setcheckInput(false)

        }}
        value={task}
        />

        {/* /////////////////////add task button//////////////////////// */}

        <TouchableOpacity
        onPress={()=>{
            handelAddTask(task)
        }}
        >
            <View style={styles.addBtn} >
               <MaterialIcons name='add' size={40} color=""  style={{textAlign:'center',
        fontSize:20,}}/>
            </View>
        </TouchableOpacity>
        </View>
        {checkInput? <Text style={{color:"red",fontSize:15,marginBottom:20}} >Please enter your task</Text>:null}

    </View>
  )
}
const styles=StyleSheet.create({
    container:{
         alignItems:"center",
    },
   
    textInput:{
        alignItems:'center',
        backgroundColor:"#f2a1c7",
        color:"black",
        padding:10,
        margin:20,
        marginTop:30,
        fontSize:20,
        borderRadius:10,
        width:"80%"
    },
    text:{
        alignItems:"center",
        marginTop:50,
        color:"black",
        fontSize:40,
        textAlign:"center",
        color:"#939192"
       
    },
    addBtn:{
        justifyContent:"center",
        backgroundColor:"#f2a1c7",
        width:50,
        height:50,
        borderRadius:30,
        marginTop:30,
        marginRight:15
        },
    inputAndBtn:{
        flexDirection:"row"
    }
})