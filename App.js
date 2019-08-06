import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  render() {
    return (

      <LinearGradient
        //https://uigradients.com/#Reef
        //https://htmlcolors.com/
        //https://facebook.github.io/react-native/docs/flexbox
        //https://github.com/tamnuwat/Basic
        //https://reactnativeexample.com/
        //https://github.com/ReactNativeSchool/react-native-calculator
        //https://docs.expo.io/versions/v34.0.0/react-native/flexbox/
        //https://facebook.github.io/react-native/docs/activityindicator
        colors={['#000000', '#000000', '#000000']}
        style={styles.container}>

        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
          </View>
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
                <TextInput style={styles.value} placeholder="0"></TextInput>
              </View>
          </View>
           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.textSecondary}>AC</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.textSecondary}>+/-</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.textSecondary}>%</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonAccent}>
              <Text style={styles.text}>÷</Text>
              </TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>7</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>8</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>9</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonAccent}>
              <Text style={styles.text}>×</Text>
              </TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>4</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>5</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>6</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonAccent}>
              <Text style={styles.text}>-</Text>
              </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>1</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>2</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>3</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonAccent}>
              <Text style={styles.text}>+</Text>
              </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 2}}>
              <TouchableOpacity style={styles.buttonDouble}>
              <Text style={styles.text}>0</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>.</Text>
              </TouchableOpacity>
              </View>


              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonAccent}>
              <Text style={styles.text}>=</Text>
              </TouchableOpacity>
              </View>
          </View> 
          
        </View>
      </LinearGradient>
    );
  }
}


const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#ffffff",
    fontSize: 70,
    textAlign: "right",
    marginRight: 25,
    marginBottom: 10
  },
  text: {
    color: "#fff",
    fontSize: 32
  },
  textSecondary: {
    color: "#060606",
    fontSize: 29
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 7,
  },
  buttonDouble: {
    backgroundColor: "#333333",
    flex: 2,
    height: Math.floor(buttonWidth - 10),
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    paddingLeft: 40,
    margin:7
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6", // สีเทา
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 7
  },
  buttonAccent: {
    backgroundColor: "#f09a36", // สีส้ม
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 7
  }
})


