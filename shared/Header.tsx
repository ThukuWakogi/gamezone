import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }: any) {
  const openMenu = () => {
    // navigation.openDrawer()
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={26} onPress={() => {navigation.openDrawer()}} style={styles.icon}/>
      <View>
        <View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 12,
    top: 1
  }
})
