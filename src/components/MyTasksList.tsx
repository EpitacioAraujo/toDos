import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { IMyTasksList } from '../model/MyTaskList';

interface IFlatList {
  textColor: string
}

function FlatListHeaderComponent({textColor}: IFlatList) {
  return (
    <View>
      <Text style={[styles.header, {color: textColor}]}>Minhas tasks - collor pallet</Text>
    </View>
  )
}

export function MyTasksList({ tasks, onLongPress, onPress, themes, currentTheme }: IMyTasksList) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => {onPress(item.id)}}
            onLongPress={() => onLongPress(item.id)}
            style={[
              item.done ? styles.taskButtonDone : styles.taskButton,
              {
                backgroundColor:  item.done ?
                                  `rgba(${themes[currentTheme].checkmarkedTaskBackground.join()})` :
                                  `rgba(${themes[currentTheme].checkmarkTaskBackground.join()})`
              }
            ]}
            //TODO - use onPress, onLongPress and style props
          >
            <View 
              testID={`marker-${index}`}
              style={[
                item.done ? styles.taskMarkerDone : styles.taskMarker, 
                {
                  borderColor:  item.done ?
                                `rgba(${themes[currentTheme].checkmarkedTaskMarkBorder.join()})` :
                                `rgba(${themes[currentTheme].checkmarkTaskMarkBorder.join()})`,
                  backgroundColor:  item.done ?
                                    `rgba(${themes[currentTheme].checkmarkedTaskMarkBackground.join()})` :
                                    `rgba(${themes[currentTheme].checkmarkTaskMarkBackground.join()})`,
                }
              ]}
              //TODO - use style prop 
            />
            <Text 
              style={[
                item.done ? styles.taskTextDone : styles.taskText,
                {
                  color:  item.done ?
                          `rgba(${themes[currentTheme].checkmarkedTaskTextColor.join()})` :
                          `rgba(${themes[currentTheme].checkmarkTaskTextColor.join()})`,
                }
              ]}
              //TODO - use style prop
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={
        <FlatListHeaderComponent
          textColor={`rgba(${themes[currentTheme].primaryTextColor.join()})`}
        />
      }
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})