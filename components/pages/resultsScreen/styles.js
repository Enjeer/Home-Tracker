import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, StatusBar} from 'react-native';
import colors from '../../ColorPalette/colorPalette';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      paddingTop:StatusBar.currentHeight
    },
    groupContainer: {
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.secondary,
      alignItems: 'center',
      paddingVertical: "4%",
      paddingHorizontal: "4%",
      marginTop: "4%",
      borderRadius: 25,
    },
    button: {
        flexDirection: 'row',
      },
      rectangle: {
        width: 8,
        height: 40,
        backgroundColor: colors.primary,
        borderRadius: 12,
        transform: 'rotate(25deg)',
        marginHorizontal: 5,
      },
    TasksContainer: {
      width: '90%',
      height: '75%',
      flexDirection: 'column',
      // justifyContent: 'space-between',
      backgroundColor: colors.primary,
      alignItems: 'Left',
      paddingVertical: "1%",
      paddingHorizontal: "4%",
      marginTop: "4%",
      borderRadius: 25,
    },
    contHeader:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    scrollableContainer:{
        marginBottom: '5%'
    },
    DynamicContainer:{
      marginTop: '5%',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignSelf: 'center',
      borderRadius: 25,
      paddingHorizontal: '5%',
      paddingVertical: '5%',
      backgroundColor: '#fff',
    },
    results:{
      marginTop: '0%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    deadlineDate:{
      flexDirection: 'row',
    },
    deadlineDay:{
      color: '#000',
      fontSize: 25,
      fontWeight: '900',
      marginRight: '3%',
    },
    deadlineTime:{
      color: '#000',
      fontSize: 15,
      alignSelf: 'flex-end',
      fontWeight: '900',
    },
    deadlineNumber:{
      fontSize: 25,
      fontWeight: '900',
    },
    header: {
      fontSize: 35,
      fontWeight: 'bold',
      color: "#fff",
    },
    headerBlack: {
      fontSize: 35,
      fontWeight: 'bold',
      color: "#000",
    },
    headerPlus: {
      fontSize: 40,
      fontWeight: 'bold',
      color: "#fff",
    },
    subtitle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: "#000",
      alignSelf: 'center'
    },
    tasksSubtitleRed: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#FFA18A",
    },
    BackButton:{
        backgroundColor: colors.secondary,
        width: "90%",
        height: "8%",
        marginTop: "4%",
        borderRadius: 25,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        paddingVertical: "0",
      },
  });

export default styles;