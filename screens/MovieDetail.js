import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    Platform
} from 'react-native';

import { ProgressBar } from '../components'
import { COLORS, FONTS, SIZES, icons } from '../constants'

const MovieDetail = ({ navigation, route }) => {

    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        let { selectedMovie } = route.params
        console.log('selectedMovie: ', JSON.stringify(selectedMovie, null, 2));
        setSelectedMovie(selectedMovie)
    }, [])


    const renderHeaderBar = () => {

        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: Platform.OS === 'ios' ? 40 : 20,
                paddingHorizontal: SIZES.padding
            }}>
                {/* Back  */}
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: COLORS.transparentBlack
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.left_arrow}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.white
                        }}
                    />
                </TouchableOpacity>
                {/* Share  */}
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: COLORS.transparentBlack
                    }}
                    onPress={() => console.log('Share')}
                >
                    <Image
                        source={icons.upload}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}
                    />
                </TouchableOpacity>

            </View >
        )
    }

    const renderHeaderSection = () => {
        return (
            <ImageBackground
                source={selectedMovie?.details?.image}
                resizeMode='cover'
                style={{
                    width: '100%',
                    height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7
                }}
            >
                <View style={{
                    flex: 1,
                }}>
                    {renderHeaderBar()}
                </View>
            </ImageBackground>
        )
    }


    return (
        <ScrollView
            contentContainerStyle={{ flex: 1, backgroundColor: COLORS.black }}
            style={{ backgroundColor: COLORS.black }}
        >
            {renderHeaderSection()}
        </ScrollView>

    )
}

export default MovieDetail;