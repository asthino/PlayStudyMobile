import { View, Text, StyleSheet } from 'react-native';

export default function Progressbar(props : { value : number, style? : {}, barColor?: string, trackColor?: string  }) {
  return (
    <View style={[styles.container, props.style]}>
        <View style={[styles.track, { backgroundColor : props.trackColor ?? '#f2f2f2' }]}>
            <View style={[styles.bar, { backgroundColor : props.barColor ?? '#000', width: props.value ? props.value+'%' : '0%'}]}></View>
        </View>
    <Text>{props.value + '%'}</Text>
    </View>
  )
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