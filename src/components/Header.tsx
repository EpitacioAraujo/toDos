import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { IHeader } from '../model/Header';

import Moon from '../assets/icons/moon.svg';
import Sum from '../assets/icons/sun.svg';

export function Header({themes, currentTheme, handleToggleTheme}: IHeader) {
  return (
    <View style={[
      styles.header,
      {
        backgroundColor: `rgba(${themes[currentTheme].headerBackground.join()})`,
      }
    ]}>
      <View style={styles.headerTitle}>
        <Text style={[
          styles.headerText,
          {
            color: `rgba(${themes[currentTheme].headerTitleColor.join()})`,
          }
        ]}>
          to.
        </Text>
        <Text style={[
          styles.headerText,
          { 
            color: `rgba(${themes[currentTheme].headerTitleColor.join()})`,
            fontFamily: 'Poppins-SemiBold'
          }]}>
            do
        </Text>
      </View>
      
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        onPress={() => { handleToggleTheme() }}
        style={styles.toggleThemeButton}
      >
        {
          currentTheme === 0 ?
            <Moon width={25} height={25}
              color={`rgba(${themes[currentTheme].headerTitleColor.join()})`} 
            /> :
            <Sum 
              color={`rgba(${themes[currentTheme].headerTitleColor.join()})`}
            />
        }
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  headerTitle:{
    marginLeft: 55,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  toggleThemeButton:{
    padding: 15,
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
