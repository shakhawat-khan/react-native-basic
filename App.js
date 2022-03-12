import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      
      
      <Text>Shakhawat Rocks !!</Text>
      <Text style={{color:'green'}}>React Native is good and i am comming for you </Text>

      <Text style = {styles1.bigBlue}  > this is a new line  </Text>
      
      <Text style ={styles1.darkblue} > this is another new line </Text>

      <View >
      <Button 
      title={'React Native Elements'}
      onPress={() => Alert.alert('Simple Button pressed')}
      color="#f194ff"
      
      />
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
