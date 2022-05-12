import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Post() {
  const route = useRoute()
  const navigation = useNavigation()
  const { from } = route.params

  useEffect(() => {
    console.log(from)
  }, [])

  const goPrint = () => {
    navigation.navigate('Print')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => goPrint()}
      >
        <Text>Go Print</Text>
      </TouchableOpacity>
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
