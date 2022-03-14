import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,Alert,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function App() {

  const [name1,setName1] = useState('');
  const [name2,setName2] = useState('');
  const [temp,setTemp] = useState('');
  const [person,setPerson] = useState({name:'mario',age:40});

  const clickHandler = () =>
  {
    setTemp(parseFloat(name1) + parseFloat(name2) )
  }



  return (
    <View style={styles.container}>
  
      <TextInput
      style = {styles.input}
      placeholder='input'
      keyboardType= 'numeric'
      onChangeText={(val) => setName1(val) } 
      />

        
      <TextInput
      style = {styles.input}
      placeholder='input'
      keyboardType= 'numeric'
      onChangeText={(val) => setName2(val) } 
      />

      <View>
        <Button

        title='add'
        
        onPress={ clickHandler }

        />
      </View>

      <View>
        <Text> {temp} </Text>
      </View>

      

      <StatusBar style="auto" />
    </View>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input :{
    borderWidth: 3,
    borderColor: '#000000',
    padding: 8,
    margin: 5,
  }

  

});


const styles1 = StyleSheet.create(
  {
    bigBlue :{
      color: 'blue',
      fontSize: 30,
      fontWeight: 'bold',
    },
    
    darkblue:{
      color: 'red',
      fontSize: 25,
      fontWeight: '300',
      fontStyle: 'italic',
    }

  }
);
