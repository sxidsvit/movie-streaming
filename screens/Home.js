import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedbackBack,
    Image,
    ImageBackground,
    Animated,
    ScrollView,
    SafeAreaView,
    TouchableOpacityBase
} from 'react-native';

import { dummyData, SIZES, COLORS, FONTS, icons, image, images } from '../constants'



const renderHeader = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: SIZES.padding
        }}>

            {/* Profile */}
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50,
                    height: 50
                }}
                onPress={() => console.log('Profile')}
            >

                <Image
                    source={images.profile_photo}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20
                    }}
                />
            </TouchableOpacity>

            {/* ToucableOpacity */}
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50
                }}
                onPress={() => console.log('Screen Mirror')}
            >

                <Image
                    source={icons.airplay}
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>

        </View>
    )
}

const Home = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.black,
            }}>
            { renderHeader()}

        </SafeAreaView>
    )
}

export default Home;