import React, {Component} from 'react';
import PushNotification from 'react-native-push-notification';

export default class PushController extends Component{
    componentDidMount(){
        PushNotification.configure({
            onNotification: function(notification) {
                console.log('Notification:', notification);
            },
            senderID: "281113929672"
        })
    }
    render(){
        return null
    }
}