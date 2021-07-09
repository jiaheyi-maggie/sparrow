import React, { useState, useEffect }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { sendPushNotifications } from '../../app/actions/notificationActions';
import { COLORS, FONTS } from '../../constants/theme';
import styles from '../../styles/homeStyle';

const Notifications = ({ navigation, notification_token, notifications }) => {

    const handleComponentDidMount = () => {
        return (
          <SafeAreaView style={styles.container2}>
            <ScrollView>
                {/* Display name */}
                <Text style={{color: COLORS.primary, ...FONTS.h2}}>Notifications</Text>
				{/* dummy send notification button */}
				<TouchableOpacity onPress={() => sendPushNotifications(notification_token, 'Welcome to Sparrow', "Add bank accounts!")}>
					<Text>Press to send notification</Text>
				</TouchableOpacity>
            </ScrollView>
          </SafeAreaView>
        );
    };

    return (
        handleComponentDidMount()
    )
};

const mapStateToProps = (store) => ({
	notification_token: store.notificationReducer.notification_token,
	notifications: store.notificationReducer.notifications,
});

export default connect(mapStateToProps, null)(Notifications); 

