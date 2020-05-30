import React, { Component } from 'react';
import { StyleSheet, View, Text,TextInput, TouchableOpacity,Image, ImageBackground, StatusBar,} from 'react-native';
import { withNavigation } from 'react-navigation';
import { FlatGrid } from 'react-native-super-grid';
import GlobalStyle from '../../Components/GlobalStyle';
import ImagesImport from '../../Components/Images';

// export default class Home extends Component {
class Home extends Component {
  static navigationOptions = {
      header : null
  };
  
  constructor() {
    super();
    this.state = {
      search: '',
      index : 0,
      bOneSelect : false,
    };
  }

  render() {

    const items = [
      { model_img: ImagesImport.type1, model_price: '49.30', model_title: 'Robes' }, { model_img: ImagesImport.type2, model_price: '59.30', model_title: 'Robes' },
      { model_img: ImagesImport.type3, model_price: '43.30', model_title: 'Robes' }, { model_img: ImagesImport.type4, model_price: '79.30', model_title: 'Tops' },
      { model_img: ImagesImport.type5, model_price: '42.30', model_title: 'Robes' }, { model_img: ImagesImport.type6, model_price: '39.30', model_title: 'Robes' },
      { model_img: ImagesImport.type7, model_price: '41.30', model_title: 'Tops' }, { model_img: ImagesImport.type8, model_price: '19.30', model_title: 'Robes' },
      { model_img: ImagesImport.type9, model_price: '44.30', model_title: 'Robes' }, { model_img: ImagesImport.type10, model_price: '59.30', model_title: 'Tops' },
      { model_img: ImagesImport.type11, model_price: '47.30', model_title: 'Robes' }, { model_img: ImagesImport.type12, model_price: '39.30', model_title: 'Robes' },
      { model_img: ImagesImport.type13, model_price: '49.30', model_title: 'Tops' }, { model_img: ImagesImport.type14, model_price: '89.30', model_title: 'Robes' },
      { model_img: ImagesImport.type15, model_price: '44.30', model_title: 'Robes' }, { model_img: ImagesImport.type16, model_price: '29.30', model_title: 'Robes' },
      
    ];

    return (
      <View style={styles.root} >
        <StatusBar barStyle="dark-light" translucent={true} backgroundColor={GlobalStyle.colorStatusBar} hidden={false}></StatusBar>
        <View style={styles.header}>
          <Text style = {{fontSize: 24, textAlign: 'left', }}>Cart</Text>
          <View style={styles.Tabs}>
            <TouchableOpacity style={styles.Category}>
              <Text style={styles.tab_text}>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Sort}>
              <Text style={styles.tab_text}>Sort</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Filter}>
              <Text style={styles.tab_text}>Filter</Text>
            </TouchableOpacity>
            <TextInput style = {styles.search_text}
                placeholder = "Search"
                placeholderTextColor = '#e5e5e5'
                selectionColor= "white"
                multiline = {false}
                maxLength = {15}
                keyboardType='default'
                textContentType='none'
                onChangeText={search=> this.setState({ search })}
                
                autoCapitalize="none"
                underlineColorAndroid="transparent"
            /> 
          </View>
        </View>
        <View style={styles.container}>
            <FlatGrid
              itemDimension={130}
              items={items}
              style={styles.gridView}
              renderItem={({ item, index }) => (
                <View style={[styles.itemContainer]}>
                  <TouchableOpacity style = {styles.terms} onPress={()=>this.props.navigation.navigate('Description')}>
                    <ImageBackground style={{ height:150, width: (GlobalStyle.screenWidth - 40)/2 }}  resizeMode="cover" source = {item.model_img} >
                      <Text style={styles.itemName}>{item.model_title}</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                  <View style={{flexDirection: "row"}}>
                    <View>
                      <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', width: 110, paddingLeft: 10, paddingTop: 5}}>
                        <Text style={styles.price}>Sale Price:</Text>
                        <Text stlye={styles.income}>${item.model_price}</Text>
                      </View>
                      <View style={{paddingLeft: 10}}>
                        <Text style={styles.detail}>For Fashion beautiful women</Text>
                      </View>
                    </View>
                    <View style={{ width: 30, height: 30, margin: 10}}>
                      <TouchableOpacity style={styles.forgotpass} >
                        <Image source={ImagesImport.cart_img} style={{width: 30, height: 30}}></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  header: {
    // flex: 1,
    width: '100%',
    height: 90,
    padding: 20,
    backgroundColor: "rgba(31,178,204,1)",
    shadowOffset: {
      height:7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  container: {
    width: GlobalStyle.screenWidth,
    height: GlobalStyle.screenHeight,
    backgroundColor: '#e5e5e5'
  },
     
  gridView: {
    paddingTop: 10,
    flex: 1,
  },
  itemContainer: {
    // justifyContent: 'flex-end',
    borderRadius: 5,
    // padding: ,
    height: 200,
  },
  terms: {
    width: (GlobalStyle.screenWidth - 40)/2,
    height: 150,
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: 'center'
  },
  itemName: {
    fontSize: 20,
    color: "rgba(247,252,253,1)",
    fontWeight: '600',
    opacity: 0.7,
    alignSelf: 'center',
    marginTop: 65,
  },
  price: {
    fontWeight: '500',
    fontSize: 12,
    color: '#0f0f0f',
    marginRight: 5,
  },
  income: {
    fontWeight: '300',
    color: '#0f0f0f',
  },
  detail: {
    width: 100,
    fontSize: 10,
    fontWeight: '300',
    color: '#0f0f0f',
    flexWrap: 'wrap',
  },

  headerX: {
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  Tabs: {
    width: GlobalStyle.screenWidth-20,
    height:30,
    backgroundColor: 'transparent',
    flexDirection: "row",
    justifyContent: 'space-around',
    
  },
  Category: {
    // width: 80,
    // height: 38,
    // backgroundColor: "rgba(247,247,247,0)",
    // opacity: 1,
    justifyContent: "center",
  },
  tab_text: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
  },
  Sort: {
    // width: 80,
    // height: 38,
    justifyContent: "center",
  },
  Filter: {
    // width: 80,
    // height: 38,
    justifyContent: "center",
  },

  search_text: {
    width: 120,
		backgroundColor: 'transparent',
		height: 30,
		color: '#e5e5e5',
    fontSize: 16,
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "rgba(255,255,255,1)",
    
    borderWidth: 1,
    paddingTop: 0,
    paddingBottom:0,
    paddingLeft: 10,
    paddingRight:10,
	},
});
  
export default withNavigation(Home);
