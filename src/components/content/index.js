import { StyleSheet, Text, View, Button, TextInput  } from 'react-native'
import { useState } from 'react/cjs/react.development'
import React from 'react';

const Content = () =>{

    const [nota1, setNota1]= useState('')
    const [nota2, setNota2]= useState('')
    const [nota3, setNota3]= useState('')
    const [num1, setNum1]= useState('')
    const [num2, setNum2]= useState('')
    const [num3, setNum3]= useState('')
    const [resultado,setResultado]= useState('')

    function media(){
      setResultado( (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3)
      alert(resultado)
    }
    function valornumero(){
      if(num1> 0 && num2<=10){

        setResultado('Éste número está entre 0 e 10')

      }else if(num2> 10 && num3<= 20){
        setResultado('Este número está entre 10 e 20')

      }else if(num3>30){
        setResultado('Este número é maior que 30')
        
      
      }
    }
  return(

    <View>
      <Text>nota1</Text>
      <TextInput
      style ={styles.form}
      placeholder="Digite a sua 1 nota "
      keyboardType="numeric"
      onChangeText={(nota1) => setNota1(nota1)}
      value={nota1}
      />

       <Text>nota2</Text>
      <TextInput
      style ={styles.form}
      placeholder="Digite a sua 2 nota "
      keyboardType="numeric"
      onChangeText={(nota2) => setNota2(nota2)}
      value={nota2}
      />

      <Text>nota3</Text>
      <TextInput
      style ={styles.form}
      placeholder="Digite a sua 3 nota "
      keyboardType="numeric"
      onChangeText={(nota3) => setNota3(nota3)}
      value={nota3}
      />

      <Button
      onPress={() => media()}
      title="Calcular"
      color="#01010B"
    />

      <Text>numero 1</Text>
      <TextInput
      style ={styles.form}
      placeholder="Digite o 1 numero"
      keyboardType="numeric"
      onChangeText={(num1) => setNum1(num1)}
      value={num1}
      />

      <Text>numero 2</Text>
      <TextInput
      style ={styles.form}
      placeholder="Digite o 2 numero"
      keyboardType="numeric"
      onChangeText={(num2) => setNum2(num2)}
      value={num2}
      />

      <Text>numero 3</Text>
      <TextInput
      style ={styles.form}
      placeholder="Digite o 3 numero"
      keyboardType="numeric"
      onChangeText={(num3) => setNum3(num3)}
      value={num3}
      />
<Button
      onPress={() => valornumero()}
      title="verificar"
      color="#01010B"
      />
    </View>
  ); 
};

const styles=StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  form:{
    
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: '10%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#01010B'
  }
});

export default Content;
