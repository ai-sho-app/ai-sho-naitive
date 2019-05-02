import React from 'react';
import { 
    Alert,
    Button
} from 'react-native';

export class StartButton extends React.Component {
    onPress() {
        Alert.alert('ボタンを押しました！')
    }

    render() {
        return (
            <Button
              onPress={this.onPress}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
        );
    }
}