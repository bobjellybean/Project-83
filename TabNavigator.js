import React from 'react';
//import {createBottomTabNavigator} from 'react navigation';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

const MaterialBottomTabNavigator = () => {
    return (
        <TabNavigator 
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if (route.name === 'feed') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create':'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })
            //tabBarOptions={{
                //activeTintColor: 'tomato',
               // inactiveTintColor: 'gray',
           // }}
    }
        >
            <Tab.Screen name ='Feed' component ={Feed} />
            <Tab.Screen name ='CreatePost' component = {CreatePost}/>
        </TabNavigator>
    );
}
export default MaterialBottomTabNavigator