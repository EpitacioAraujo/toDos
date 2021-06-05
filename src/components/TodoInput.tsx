import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';
import { ITodoInput } from '../model/TodoInput';

export function TodoInput({ addTask, themes, currentTheme }: ITodoInput) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    //TODO - Call addTask and clean input value 
    addTask(task);
    setTask('');
  }

  return (
    <View 
      style={[
        styles.inputContainer,
        Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow,
        {
          backgroundColor: `rgba(${themes[currentTheme].inputNewTaskBackground.join()})`,
        }
      ]}
    >
      <TextInput 
        style={[
          styles.input,
          {
            backgroundColor: `rgba(${themes[currentTheme].inputNewTaskBackground.join()})`,
            // backgroundColor: '#F5F4F8',
            color: `rgba(${themes[currentTheme].primaryTextColor.join()})`,
          }
        ]} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={`rgba(${themes[currentTheme].primaryTextColor.join()})`}
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        //TODO - use value, onChangeText and onSubmitEditing props
      />

      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[
          styles.addButton,
          {
            backgroundColor: `rgba(${themes[currentTheme].buttonAddNewTaskBackground.join()})`,
            // backgroundColor: '#3FAD27',
          }
        ]}
        onPress={() => { handleAddNewTask() }}
        //TODO - onPress prop
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});