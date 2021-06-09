import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import{
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import { 
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';





export function DrawerContent (props){

    return(
        <View style={{flex:1}} >
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInforSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image
                               source={require('../scr/images/user.png')}
                               size={70}
                            />
                        <View style={{marginLeft:15,flexDirection:'column'}}>
                            <Title style={styles.Title}>Rivaldo Marere</Title>
                            <Caption style={styles.Caption}>H190313x</Caption>
                        </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                icon={({color, size})=>(
                   <Icon
                   name="home"
                   color={color}
                   size={size}/>
                    
                )}
                label="Home"
                onPress={()=>{}}
                />
                <DrawerItem
                icon={({color, size})=>(
                   <Icon
                   name="face"
                   color={color}
                   size={size}/>
                    
                )}
                label="Personal Information"
                onPress={()=>{}}
                />
                <DrawerItem
                icon={({color, size})=>(
                   <Icon
                   name="application-import"
                   color={color}
                   size={size}/>
                    
                )}
                label="Portal"
                onPress={()=>{}}
                />
                <DrawerItem
                icon={({color, size})=>(
                   <Icon
                   name="email"
                   color={color}
                   size={size}/>
                    
                )}
                label="Email"
                onPress={()=>{}}
                />
                <DrawerItem
                icon={({color, size})=>(
                   <Icon
                   name="information"
                   color={color}
                   size={size}/>
                    
                )}
                label="About"
                onPress={()=>{}}
                />
            
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
                icon={({color, size})=>(
                   <Icon
                   name="account-settings"
                   color={color}
                   size={size}/>
                    
                )}
                label="Settings"
                onPress={()=>{}}
                />
                <DrawerItem
                icon={({color, size})=>(
                   <Icon
                   name="exit-to-app"
                   color={color}
                   size={size}/>
                    
                )}
                label="Sign Out"
                onPress={() => {}}
                />
                
        
            </Drawer.Section>
           
        </View>
    );
}

const styles =StyleSheet.create({
    drawerContent:{
        flex:1,
    },
    userInforSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14,

    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    }

});