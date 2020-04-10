import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert,
  ToastAndroid,
  BackHandler
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SyncStorage from 'sync-storage';

class Home extends Component {
  state = {
    time: '',
  };

  handlerTime = () => {
    let date = new Date().getHours();
    if (date < 10 || date < 5) {
      this.setState({
        time: 'Good Morning',
      });
    } else if (date < 14) {
      this.setState({
        time: 'Good Afternoon',
      });
    } else if (date < 19) {
      this.setState({
        time: 'Good Evening',
      });
    } else {
      this.setState({
        time: 'Good Night',
      });
    }
  };

  handlerReset = () => {
    Alert.alert(null, 'Are you sure you want to reset your list?', [
      {
        text: 'Yes',
        onPress: () => {
          ToastAndroid.showWithGravity(
            'Please Wait...',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
          );
          SyncStorage.remove('start');
          this.props.navigation.replace('Splash');
        },
      },
      {
        text: 'No',
      },
    ]);
  };

  handlerAction = () => {
  };

  componentDidMount() {
    this.handlerTime();
    BackHandler.addEventListener("hardwareBackPress", this.handleBack);
  }

  handleBack() {
    Alert.alert(null, 'Are you sure you want to exit?', [
      {
        text: 'Yes',
        onPress: () => {
          BackHandler.exitApp();
        },
      },
      {
        text: 'No',
      },
    ]);
    return true;
  }

  render() {
    const modalName = (
      <Modal visible={false} transparent={true} animated="fade">
        <View style={styles.modalName}>
          <Text style={styles.nameLabel}>What is your name?</Text>
          <TextInput placeholder="Insert your name" style={styles.nameInput} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Okey, Let's Go</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );

    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="#ff8b0d" />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {this.state.time}, Bima Febriansyah
          </Text>
          <TouchableOpacity
            onPress={() => this.handlerReset()}
            style={{ ...styles.headerSide, ...styles.headerSideShadow }}>
            <Icon style={styles.headerIcon} name="redo" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>Your Amazing Plan</Text>
          <ScrollView>
            <View style={styles.bodyChild}>
              <View style={styles.list}>
                <Text style={styles.listText}>Makan Seblak Level 20</Text>
                <TouchableOpacity>
                  <Icon
                    style={{ ...styles.listIcon, color: '#ff8b0d' }}
                    name="bolt"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bodyChild}>
              <View style={styles.list}>
                <Text style={styles.listText}>Makan Seblak Level 20</Text>
                <TouchableOpacity>
                  <Icon
                    style={{ ...styles.listIcon, color: 'green' }}
                    name="check"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bodyChild}>
              <View style={styles.list}>
                <Text style={styles.listText}>Makan Seblak Level 20</Text>
                <TouchableOpacity>
                  <Icon
                    style={{ ...styles.listIcon, color: 'red' }}
                    name="times"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={{
                ...styles.bodyChild,
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.newList}>
                <Icon style={styles.newListIcon} name="plus" />
                <Text style={styles.newListText}>Add new list</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {modalName}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalName: {
    top: '10%',
    height: '30%',
    width: '80%',
    backgroundColor: '#ff8b0d',
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nameInput: {
    alignSelf: 'center',
    width: '90%',
    height: 40,
    backgroundColor: '#fdfff0',
    borderRadius: 20,
  },
  nameLabel: {
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#e3e8cd',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#631647',
    width: '90%',
    height: 40,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#e3e8cd',
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#fdfff0',
    height: '100%',
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height: '15%',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    width: '80%',
    lineHeight: 30,
    textAlign: 'left',
  },
  headerIcon: {
    fontSize: 16,
    color: '#631647',
  },
  headerSide: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSideShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  body: {
    marginTop: 30,
    backgroundColor: '#ff8b0d',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
  },
  bodyText: {
    color: '#fdfff0',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 50,
    textAlignVertical: 'center',
  },
  bodyChild: {
    backgroundColor: '#fdfff0',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    height: 50,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  newList: {
    borderWidth: 1,
    borderColor: '#631647',
    borderStyle: 'dotted',
    width: '96%',
    height: '80%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  newListText: {
    color: '#631647',
    fontSize: 18,
  },
  newListIcon: {
    color: '#631647',
    marginRight: 10,
    fontSize: 16,
  },
  list: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listText: {
    fontSize: 16,
    width: '90%',
  },
  listIcon: {
    fontSize: 20,
  },
});

export default Home;
