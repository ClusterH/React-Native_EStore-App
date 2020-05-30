import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;   // height on portrait
const screenWidth = width < height ? width : height;    // width on portrait

var colorCard = ['#6F498B','#405A9B', '#479870', '#934798', '#0E18D8'];

const AppColors = {
    colorStart: '#727174',
    colorYellow: '#efff0a',
    colorLoginBackground: '#4f397d',
    colorStatusBar: "rgba(31,178,204,1)",
};



const AppFonts = {
    Eurostile_Black: "eurostile_extended_black",
    Nimbus_Black: "Nimbus-Sans-D-OT-Black-Extended",
    Nimbus_Bold: "Nimbus-Sans-D-OT-Bold-Extended",
    Nimbus_Regular: "Nimbus-Sans-D-OT-Regular-Extended",
};

// const AppSizes = {
// }

const GlobalValue = {
    TabBarHeight: Math.round(screenWidth * 0.13),
    // StatusBarHeight: (Platform.OS === 'ios') ? 25 : 0,
    HeaderArrowWidth: Math.round(screenWidth * 0.18),
    SearchHomeFeedLimit: 20,
    SearchOneUserFeed: 20,
    SearchHotLimit: 6,
    SearchNewLimit: 6,
    sizeSet: ["6", "8", "10", "12", "14", "16"],
    horizontalButtonLineTop: (Platform.OS === 'ios') ? -3 : 0,    // horizontal group buttons
    topHeader: 10,    // header too close arrow -> 
    toastDuration: 3000,
    // SearchCategory   1:all, 2: liked, 3:reviews, 4:clothes, 5:tech, 6:home, 7:books, 8:other
    // TransactionStatus:   0:declined  1:proposed, 2:accept, 3:after time pass, see Confirmationpage,success  4:ordercanceled 
    // ChatType:    0:declined, 1:proposed, 2:new pickup proposed, 3:accepted, 4: general chat
    // NotificationType 1~3: like, comment, follow
}

const GlobalStyles = StyleSheet.create({
    Header: {
//        fontFamily: AppFonts.Nimbus_Black,
        fontSize: 30,
        color: 'black'
    },
    HeaderMedium: {
//        fontFamily: AppFonts.Nimbus_Black, 
        fontSize: 26,
        color: 'black'
    },
    HeaderSmall: {
//        fontFamily: AppFonts.Nimbus_Black,
        fontSize: 22,
        color: 'black'
    },
});

export default {
    screenWidth,
    screenHeight,
    ...AppColors,
    ...AppFonts,
    ...GlobalValue,
    ...GlobalStyles,
    colorCard,
};