import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

export default function Progressbar(props : {type?: string, value : number, style? : {}, barColor?: string, valueColor?: string, trackColor?: string, strokeWidth? : number, sqSize?: number }) : JSX.Element {
    props.type = props.type ?? 'rectangular'; 
  
    if(props.type == 'rectangular')
    {
        return (
        <View style={[styles.container, props.style]}>
            <View style={[styles.track, { backgroundColor : props.trackColor ?? '#f2f2f2' }]}>
                <View style={[styles.bar, { backgroundColor : props.barColor ?? '#000', width: props.value ? props.value+'%' : '0%'}]}></View>
            </View>
        <Text>{props.value + '%'}</Text>
        </View>
        )
    }
    else if(props.type == 'circular')
    {
        const sqSize = props.sqSize ?? 150;
        const strokeWidth = props.strokeWidth ?? 10;
        // SVG centers the stroke width on the radius, subtract out so circle fits in square
        const radius = (sqSize - strokeWidth) / 2;
        // Enclose cicle in a circumscribing square
        const viewBox = `0 0 ${sqSize} ${sqSize}`;
        // Arc length at 100% coverage is the circle circumference
        const dashArray = radius * Math.PI * 2;
        // Scale 100% coverage overlay with the actual percent
        const dashOffset = dashArray - dashArray * props.value / 100;

        return (
        <View style={{height: 300, justifyContent:"center"}}>
            <Svg
                width={sqSize}
                height={sqSize}
                viewBox={viewBox}
            >
                
                <Circle
                    fill="none"
                    stroke={props.trackColor ?? "#ddd"}
                    cx={sqSize / 2}
                    cy={sqSize / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    />
                <Circle
                    stroke={props.barColor ?? "#000"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    cx={sqSize / 2}
                    cy={sqSize / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    // Start progress marker at 12 O'Clock
                    transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                        //...styles.circle_progress
                />
                <SvgText
                    x="50%"
                    y="50%"
                    dy=".3em"
                    fill={props.valueColor}
                    fontSize={sqSize / 4}
                    fontWeight={900}
                    textAnchor="middle">
                    {`${props.value}%`}
                </SvgText>
            </Svg>
            </View>
        );
    }
    else return <></>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    track: {
        borderRadius: 50,
        height: 12,
        width: '100%'
    },
    bar: {
        borderRadius: 50,
        height: 12
    }
});