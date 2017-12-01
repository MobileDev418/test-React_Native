import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
export default class MainScreen extends React.Component {

  // static navigationOptions = {
  //   header: { visible:false },
  //   title: 'Welcome',
  // };

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <Container>
        <Content padder>
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
        </Content>
      </Container>
    );
  }
}
