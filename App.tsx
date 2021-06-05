import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Home } from './src/pages/Home';
import { ITheme } from './src/model/Theme';

const themes:ITheme[] = [
  // ligth
  {
    bodyBackground: [255,255,255,1],

    headerBackground: [39, 63, 173, 1],
    headerTitleColor: [255,255,255,1],

    inputNewTaskBackground: [245, 244, 248,1],
    buttonAddNewTaskBackground: [63, 173, 39, 1],

    primariColor: [39, 63, 173, 1],
    
    primaryTextColor: [61, 61, 77, 1],
    secondaryTextColor: [61, 61, 77, 1],

    checkmarkTaskBackground: [255,255,255,1],
    checkmarkTaskMarkBackground: [255,255,255,1],
    checkmarkTaskMarkBorder: [61, 61, 77, 1],
    checkmarkTaskTextColor: [61, 61, 77, 1],

    checkmarkedTaskBackground: [25, 61, 223, 0.1],
    checkmarkedTaskMarkBackground: [39, 63, 173, 1],
    checkmarkedTaskMarkBorder: [39, 63, 173, 1],
    checkmarkedTaskTextColor: [160, 156, 177, 1],
  },
  //dark
  {
    bodyBackground: [25, 29, 58, 1],

    headerBackground: [65, 58, 111, 0.5],
    headerTitleColor: [225, 225, 230, 1],

    inputNewTaskBackground: [65, 58, 111, 1],
    buttonAddNewTaskBackground: [147, 71, 202, 1],

    primariColor: [147, 71, 202, 1],
    
    primaryTextColor: [225, 225, 230, 1],
    secondaryTextColor: [225, 225, 230, 1],

    checkmarkTaskBackground: [0,0,0,0],
    checkmarkTaskMarkBackground: [0,0,0,0],
    checkmarkTaskMarkBorder: [147, 71, 202, 1],
    checkmarkTaskTextColor: [225, 225, 230, 1],

    checkmarkedTaskBackground: [65, 58, 111, 0.5],
    checkmarkedTaskMarkBackground: [147, 71, 202, 1],
    checkmarkedTaskMarkBorder: [147, 71, 202, 1],
    checkmarkedTaskTextColor: [225, 225, 230, 1],
  }
]

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(0);

  const handleToggleTheme = () => {
    setCurrentTheme(oldTheme => oldTheme == 0 ? 1 : 0);
  }
  
  return (
    <View style={{
      flex: 1,
      backgroundColor: `rgba(${themes[currentTheme].bodyBackground.join()})`
    }}>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
      <Home
        themes={themes}
        currentTheme={currentTheme}
        handleToggleTheme={handleToggleTheme}
      /> 
    </View>
  );
}
