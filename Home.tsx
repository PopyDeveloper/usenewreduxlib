import React, { FC } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { decremented, incremented } from './store/actions'

const Home = () => {

    const counter = useAppSelector(state => state.value)
    const dispatch = useAppDispatch()
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>{counter}</Text>
        <View style={{flexDirection: 'row'}}>

        <BT 
          label='+'
          handler={() =>dispatch(incremented())}
        />

        <BT 
          label='-'
          handler={() => dispatch(decremented())}
        />
        </View>
      </View> 
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  
  const BT: FC<{label: string, handler: () => void}> = ({label, handler}) => {
    return(
      <TouchableHighlight onPress={handler} style={{backgroundColor: 'blue', width: 100, height: 100, alignItems: 'center', justifyContent: 'center', margin: 5}}>
        <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold' }}>{label}</Text>
      </TouchableHighlight>
    )
  }