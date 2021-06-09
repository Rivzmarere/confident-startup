import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwsome from 'react-native-vector-icons/MaterialIcons'

///#F29101 yellow
//#050339 blue
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../images/confident.png')}
                            resizeMode="center"
                            style={styles.sliderImage}
                        />
                    </View>
             </View>
             <ScrollView>
                 <TouchableOpacity>
        <View style={styles.cardsWrapper}>
            <View style={styles.card}>
            <View style={styles.cardInfo}>
                <View style={styles.cardImgWrapper}>
                <Icon name="phone" size={30} color="#FF1493" />
                </View>
                
                    <Text style={styles.cardTitle}>Report A Case</Text>
                    <Text style={styles.cardDetails}>Report your case to us and we will call you with assistance within 24hrs</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.cardsWrapper}>
            <View style={styles.card}>
            <View style={styles.cardInfo}>
                <View style={styles.cardImgWrapper}>
                <Icon name="map-marker" size={30} color="black" />
                </View>
                
                    <Text style={styles.cardTitle}>Find Help</Text>
                    <Text style={styles.cardDetails}>Find places near you where you can find help</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.cardsWrapper}>
            <View style={styles.card}>
            <View style={styles.cardInfo}>
                <View style={styles.cardImgWrapper}>
                <Icon name="book-open-page-variant" size={30} color="#FF1493" />
                </View>
                
                    <Text style={styles.cardTitle}>Survivors Story</Text>
                    <Text style={styles.cardDetails}>Read/Share encouraging stories of other victims or share a story</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.cardsWrapper}>
            <View style={styles.card}>
            <View style={styles.cardInfo}>
                <View style={styles.cardImgWrapper}>
                <Icon name="library" size={30} color="black" />
                </View>
                
                    <Text style={styles.cardTitle}>Learn More</Text>
                    <Text style={styles.cardDetails}>Learn more about gbv, rape with oyr resources</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.cardsWrapper}>
            <View style={styles.card}>
            <View style={styles.cardInfo}>
                <View style={styles.cardImgWrapper}>
                <Icon name="chart-bar" size={30} color="#FF1493" />
                </View>
                
                    <Text style={styles.cardTitle}>Statistics</Text>
                    <Text style={styles.cardDetails}>Read more about GBV statistics in Zimbabwe</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.cardsWrapper}>
            <View style={styles.card}>
            <View style={styles.cardInfo}>
                <View style={styles.cardImgWrapper}>
                <Icon name="information" size={30} color="black" />
                </View>
                
                    <Text style={styles.cardTitle}>Am i AT Risk</Text>
                    <Text style={styles.cardDetails}>Go through an assessment that will determine whether you're at risk or not</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
        </ScrollView>
        </View>
    )
};

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        color: 'white'

    },
    sliderContainer:{
        height: 150,
        width:'100%',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:0,
        borderRadius:5,
        
    
      },
      slide:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'transparent',
        borderRadius:8
      },
      sliderImage:{
        alignSelf:'center',
        width:'100%',
        height:'100%',
        borderRadius:8,
    
      },
      cardsWrapper:{
        marginTop:0,
        width:'100%',
        alignSelf:'center',
      },
      card:{
        height:120,
        marginVertical:5,
        flexDirection:'column',
        shadowColor:'#999',
        shadowOffset: {width: 0, height:1},
        shadowOpacity:0.8,
        shadowRadius:2,
        elevation:5,  
      },
      cardImgWrapper:{
          alignSelf:'center',
          flex:1,
      },
      cardImg:{
          height:'100%',
          width:'100%',
          alignSelf:'center',
          borderRadius:0,
          borderBottomRightRadius:0,
          borderTopRightRadius: 0,
      },
      cardInfo:{
          height:88,
          flex:2,
          padding:10,
          borderColor:'black',
          borderWidth:0,
          borderLeftWidth:0,
          borderBottomRightRadius:0,
          borderTopRightRadius:0,
          backgroundColor:'#F5F5F5'
      },
      cardTitle:{
          alignSelf:'center',
          fontWeight:'bold',
      },
      cardDetails:{
          fontSize:14,
          color:'#444',
          alignSelf:'center'
          
      }
})

