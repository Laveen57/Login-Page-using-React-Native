import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Log in</Text>
      <Text style={styles.line}>Username</Text>
      <TextInput
      style={styles.box}></TextInput>
      <Text style={styles.line}>Password</Text>
      <TextInput
      secureTextEntry={true}
      style={styles.box}></TextInput>
      <View style={styles.button}>
      <Button title='Log in' onPress={() => {}} color='#4267B2' />
      </View>
      <TouchableOpacity><Text style={styles.blue}>Forget Password</Text></TouchableOpacity>
      <Text style={styles.normal}>or</Text>
      <View style={styles.flex}>
      <Text style={styles.normal}>Dont have an account? </Text><TouchableOpacity><Text style={styles.bold}> Sign up</Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontWeight:'bold',
    fontSize:50,
    paddingLeft:20,
    paddingTop:150,
    color:'#4267B2'
  },
  line:{
    fontSize:20,
    paddingLeft:20,
    paddingTop:40,
    color:'#4267B2'
  },
  box:{
    color:'grey',
    marginLeft:20,
    marginRight:20,
    borderBottomWidth:1,
    borderBottomColor: '#ddd',
  },
  button:{
    padding:20,
    marginTop:20,
  },
  blue:{
    color:'blue',
    textAlign:'center',
    fontSize:15,
    margin:20,
  },
  bold:{
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center',
  },
  normal:{
    fontSize:18,
    textAlign:'center',
    color:'grey',
  },
  flex:{
    flexDirection:'row',
    paddingLeft:65,
    marginTop:20,
  }
});
