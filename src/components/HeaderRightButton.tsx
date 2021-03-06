import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/types";
import { StackNavigationProp } from '@react-navigation/stack';

export default function HeaderRightButton(props: any) {
  const { from } = props
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>()

  const onButtonPress = () => {
    navigation.navigate('ModalStack', {
      screen: 'Post',
      params: {from}
    })
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onButtonPress()}
    >
      <FontIcon
        name="bars"
        color={colors.lightPurple}
        size={24}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  }
})