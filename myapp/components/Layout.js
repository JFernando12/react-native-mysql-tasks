import { View, StyleSheet } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <View style={styles.constainer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    constainer:{
        backgroundColor: "red",
        padding: 20,
        flex: 1,
        textAlign: "center"
    }
})

export default Layout