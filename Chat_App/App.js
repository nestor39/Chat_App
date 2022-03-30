import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/wink.jpg';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width:305, height: 159}} />
      
      <Text style={{color:"#888", fontSize:40}}>Modify here</Text>
      
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
