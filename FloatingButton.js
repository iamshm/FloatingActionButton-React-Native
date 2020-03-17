import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class FloatingButton extends Component {
    animation = new Animated.Value(0)
    toggleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 5
        }).start()
        this.open = !this.open

    }
    render() {
        // const heartstyle = {
        //     transform: [
        //         { scale: this.animation },
        //         {
        //             translate: this.animation.interpolate({
        //                 inputRange: [0, 1],
        //                 outputRange: [0, -200]
        //             })
        //         }

        //     ]
        // };
        // const thumbstyle = {
        //     transform: [
        //         { scale: this.animation },
        //         {
        //             translate: this.animation.interpolate({
        //                 inputRange: [0, 1],
        //                 outputRange: [0, -140]
        //             })
        //         }

        //     ]
        // };
        // const pinStyle = {
        //     transform: [
        //         { scale: this.animation },
        //         {
        //             translate: this.animation.interpolate({
        //                 inputRange: [0, 1],
        //                 outputRange: [0, -80]
        //             })
        //         }

        //     ]
        // };
        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }

            ]
        };



        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.shadowstyle, styles.secondary/*, heartstyle*/]}>
                        <AntDesign name="hearto" size={20} color={'#F02A4b'} />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.shadowstyle, styles.secondary/*, thumbstyle*/]}>
                        <Entypo name="thumbs-up" size={20} color={'#F02A4b'} />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.shadowstyle, styles.secondary/*, pinStyle*/]}>
                        <MaterialIcons name="location-on" size={20} color={'#F02A4b'} />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.shadowstyle, styles.menu, rotation]}>
                        <AntDesign name="plus" size={24} color={'#FFF'} />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadowstyle: {
        shadowRadius: 20,
        shadowColor: Colors.black,
        shadowOpacity: 0.7,
        shadowOffset: { height: 10, width: 10 },
        elevation: 8,

        backgroundColor: "#0000"
    },
    menu: {
        backgroundColor: "#F02A4b"
    },
    secondary: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: "#FFF"

    }
});
