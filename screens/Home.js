import React, { useRef } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    ImageBackground,
    Animated,
    ScrollView,
    SafeAreaView,
    TouchableOpacityBase
} from 'react-native';

import { dummyData, icons, images, COLORS, SIZES, FONTS } from '../constants'

const Home = ({ navigation }) => {

    const newSeasonScrollX = useRef(new Animated.Value(0)).current

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

    const renderNewSeasonSection = () => {
        return (
            <Animated.FlatList
                horizontal
                pagingEnabled
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                decelerationRate={0}
                contentContainerStyle={{
                    marginTop: SIZES.radius
                }}
                data={dummyData.newSeason}
                keyExtractor={item => `animated-${item.id}`}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: newSeasonScrollX } } }
                ], { useNativeDriver: false })}
                renderItem={(currentMovie, index) => {
                    const { item } = currentMovie
                    // console.log('currentMovie: ', JSON.stringify(currentMovie, null, 2))
                    return (
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate('MovieDetail',
                                { selectedMovie: item })}
                        >
                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {/* Thumbnail */}
                                <ImageBackground
                                    source={item.thumbnail}
                                    resizeMode='cover'
                                    style={{
                                        width: SIZES.width * 0.85,
                                        height: SIZES.width * 0.85,
                                        justifyContent: 'flex-end'
                                    }}
                                    imageStyle={{ borderRadius: 40 }}
                                >
                                    <View style={{
                                        flexDirection: 'row',
                                        height: 60,
                                        width: '100%',
                                        marginBottom: SIZES.radius,
                                    }}>
                                        {/* Play Now */}
                                        <View style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <View style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 40,
                                                height: 40,
                                                borderRadius: 20,
                                                backgroundColor: COLORS.transparentWhite
                                            }}>
                                                <Image
                                                    source={icons.play}
                                                    resizeMode='contain'
                                                    style={{
                                                        width: 15,
                                                        height: 15,
                                                        tintColor: COLORS.white
                                                    }}
                                                />
                                            </View>
                                            <Text style={{
                                                marginLeft: SIZES.base,
                                                color: COLORS.white, ...FONTS.h3
                                            }}>
                                                Play Now
                                                </Text>

                                        </View>
                                        {/* Still Watching */}
                                        {item.stillWatching?.length > 0 &&
                                            <View View View style={{
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{
                                                    color: COLORS.white, ...FONTS.h4
                                                }}>Still Watching</Text>
                                            </View>
                                        }

                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback >
                    )
                }}
            />
        )
    }



    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.black,
            }}>
            {renderHeader()}
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 100
                }}>
                {renderNewSeasonSection()}


            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;