import React from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar,StyleSheets,View} from 'react-native';

export default class AuthLoadingScreen extends React.Component{
    constructor(props){
        super(props);
        this._boostrapAsync();
    }
    _boostrapAsync = async ()=>{
        const userToken = await AsyncStorage.getItem('UserToken');
        this.props.navigation.navigate(userToken? 'App':'Auth');

    } 
    render(){
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}
