import React from "react";
import { AppRegistry, Alert, StyleSheet, ListView, Text, View } from "react-native";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button } from "native-base";

var REDDIT_URL = "https://www.reddit.com/.json";

export default class GitScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>Reddit JSON Data</Title>
            </Body>
            <Right />
        </Header>
        )
    });

    constructor(props) {
        super(props)

        this.state = {
            dataSource : new ListView.DataSource({
                rowHasChanged : (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        fetch(REDDIT_URL)
            .then((response) => {console.log('response', response);
             return response.json()})
            .then((responseData) => {
                alert(JSON.stringify(responseData))
                this.setState({
                    dataSource : this.state.dataSource.cloneWithRows(
                        responseData.data.children
                    ),
                    loaded : true,
                });
        })
        .catch((e) => console.log('error', e))
        .done();
    }

    renderLoadingView(){
        return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
        );
    }

    renderPost(post){
        return (
        <View style={styles.post}>
            <Text style={styles.score}>{post.data.score}</Text>
            <Text
                style={styles.title}
                onPress={this.setPage}>
                {post.data.title}
            </Text>
        </View>
        );
    }

    render() {
        if (!this.state.loaded){
            return this.renderLoadingView();
        } else {

            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderPost}
                    style={styles.listView}
                />
            );
        }
    }
}

var styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  post : {
    flex : 1,
    flexDirection : "row",
    backgroundColor : "#ecf0f1",
    marginBottom: 10
  },
  title : {
    fontSize : 20,
    flex : 8,
    color : "#3498db"
  },

  listView : {
    backgroundColor: '#ecf0f1',
  },

  score : {
    flex : 1,
    color : "#2ecc71",
    alignSelf : "center"
  },

});