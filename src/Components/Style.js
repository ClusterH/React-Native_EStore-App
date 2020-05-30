import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;   // height on portrait
const screenWidth = width < height ? width : height;    // width on portrait

import AppColors from './GlobalStyle';


const Styles = StyleSheet.create({
    
    seconHeader: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        height: 40,
        width: '100%',
        flex:4,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor: "rgba(255,255,255,1)",
        elevation: 0,
        shadowOffset: {
            height: 0,
            width: 0
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowRadius: 30
        
    },
    
});

export default {
    screenWidth,
    screenHeight,
 //    ...AppFonts,
//    ...GlobalValue,
    ...Styles,
};