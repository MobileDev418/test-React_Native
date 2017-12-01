import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, View, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
export default class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style = {{ padding: 30, alignItems: 'center'}}>
          <Button full rounded primary
            style={{ marginTop: 80 }}
            onPress={() => this.props.navigation.navigate("YtbScreen")}>
            <Text>Youtube Video Play</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 30 }}
            onPress={() => this.props.navigation.navigate("GitScreen")}>
            <Text>Git User list</Text>
          </Button>
      </View>
    );
  }
}
