import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';

const style = StyleSheet.create({
  container:{
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  darkMode:{
    backgroundColor:"black"
  },
  lightMode:{
    backgroundColor:"white"
  },
  red:{
    color:"red"
  },
  blue:{
    color:"green"
  }
})

function App(){
  const [changeColor,setChangeColor] = useState('dark')
  const onChange = (ref:string)=>{
    setChangeColor(ref);
  }
  const isDark = useColorScheme() == changeColor
  return(
    <SafeAreaView>
    <View style={[style.container,isDark?style.lightMode:style.darkMode]}>
      <Text style={style.blue}>Raji</Text>
      <Text style={style.red}>Muthu</Text>
      <Button
      onPress={()=>onChange(changeColor === 'dark' ? "light":"dark")}
      title="Change Color"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />
    </View>
    </SafeAreaView>
  );

}

export default App;