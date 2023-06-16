
import {  Keyboard, View, ScrollView ,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { TaskInputField } from './component/taskInputField';
import { StatusBar } from 'react-native';
import {useState} from 'react'
import { TaskItem } from './component/TaskItem';

export default function App() {
  const [tasks,setTasks]=useState([]);
  const [checkBtn,setCheckBtn]=useState(false);

  // add task function
  const addTask=(task)=>{
   setTasks([...tasks,task])
    Keyboard.dismiss();
    setCheckBtn(true);
  };
// delet task function
  const deleteTask=(deletedTask)=>{
    setTasks(tasks.filter((item,index)=>{
      
    return index!=deletedTask
     
   }))
  };

  
  return (
    
    <View >
    <ScrollView>
      <StatusBar backgroundColor='black' style="light" />
      

      <TaskInputField addTask={addTask} />

      {tasks.map((item,index)=>{
       
        return(
          <View>
            <TaskItem
         
            key={index+1}
            task={item}
            delete={()=>{
              deleteTask(index);
            }}

           
            
            />
          </View>
        )
      })}
      {checkBtn? <TouchableOpacity
      onPress={()=>{
        setTasks([])
        setCheckBtn(false)
      }}>
      <View style={styles.cleanBtn}><Text style={{textAlign:"center",color:"black" ,fontSize:17}}>CLEAR</Text></View>

      </TouchableOpacity>:false}
      </ScrollView>
      
      
      </View>
  );
}

 const styles = StyleSheet.create({
  cleanBtn: {
    marginTop:20,
    marginBottom:30,
    marginLeft:120,
    padding:10,
    backgroundColor:"#939192",
    borderRadius:24,
    width:"45%",
  }
  
});
