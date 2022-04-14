import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text} from 'react-native'

const Header = () => {
  return (
    <LinearGradient style={styles.title} colors={['#ff5328', '#ff875e']} start={{x:0,y:2}} end={{x:1,y:0}}>
    <Text style={styles.textTitle}>CALCULE SUA MÉDIA</Text>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    title:{
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textTitle:{
        fontSize: 30,
    }
});
export default Header;


