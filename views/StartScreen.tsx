import { Alert, Button, Text, View } from 'react-native';


export default function StartScreeen() {
    return (
        <View>
            <Text>Welcome to Rhytm Lessons</Text>
            <Text>Let`s start your first lesson?</Text>
            <Button
                title='Of course'
                onPress={() => {
                    Alert.alert(
                            'asdasd',
                            'Main message',
                            [{text: 'Yes'}]
                        ); 
                    }
                }
            />
        </View>
    );
}