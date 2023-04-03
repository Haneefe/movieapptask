import React,{useState} from 'react'
import { View,Text,StyleSheet, TextInput, TouchableOpacity,Alert,SafeAreaView,Keyboard,ToastAndroid} from 'react-native'
import { height,width} from '../utils/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Icon1 from 'react-native-vector-icons/AntDesign'
const Login = ({navigation}) => {
    const [inputs, setInputs] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] =useState(false);
  
    const validate = async () => {
      Keyboard.dismiss();
      let isValid = true;
      if (!inputs.email) {
        handleError('Please input email', 'email');
        isValid = false;
      }
      if (!inputs.password) {
        handleError('Please input password', 'password');
        isValid = false;
      }
      if (isValid) {
        login();
      }
    };
  
    const login = () => {
      setLoading(true);
      setTimeout(async () => {
        setLoading(false);
        let userData = await AsyncStorage.getItem('userData');
        if (userData) {
          userData = JSON.parse(userData);
          if (
            inputs.email == userData.email &&
            inputs.password == userData.password
          ) {
            navigation.navigate('Home');
            ToastAndroid.showWithGravityAndOffset("Logged in",ToastAndroid.LONG,ToastAndroid.BOTTOM,25,50)
            AsyncStorage.setItem(
              'userData',
              JSON.stringify({...userData, loggedIn: true}),
            );
          } else {
            Alert.alert('Error', 'Invalid Details');
          }
        } else {
          Alert.alert('Error', 'User does not exist');
        }
      }, 3000);
    };
  
    const handleOnchange = (text, input) => {
      setInputs(prevState => ({...prevState, [input]: text}));
    };
  
    const handleError = (error, input) => {
      setErrors(prevState => ({...prevState, [input]: error}));
    };
  return (
 
    <SafeAreaView style={styles.LoginContainer}>
    <Text style={styles.movietext}>MOVIES APP</Text>
    <View>
    <View style={styles.logincard}/>
    
        <View style={styles.textinputContainer}>
        <TextInput style={styles.loginput} 
        cursorColor="white" 
        placeholder="Enter Email id" placeholderTextColor={'white'}
        onChangeText={text=>handleOnchange(text,'email')}
        onFocus={()=>handleError(null,'email')} 
        
        />
        <View style={styles.userIcon}>
        <Icon  paddingLeft={30} name="user" size={18} color="#ffff" />
        </View>
        </View>
        <View style={styles.textinputContainer1}>
        <TextInput style={styles.loginput1} 
        cursorColor="white" 
        placeholder='Enter password' 
        placeholderTextColor={'white'}
        onChangeText={text => handleOnchange(text, 'password')}
        onFocus={() => handleError(null, 'password')}
        error={errors.password}
        // password={true}
        secureTextEntry={true}
        />
        <View style={styles.userIcon1}>
        <Icon  paddingLeft={30} name="lock" size={18} color="#ffff" />
        </View>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={validate}>
            <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.t1}>New to app?<Text onPress={()=>{navigation.navigate('RegisterPage')}} style={styles.t2}>Register</Text></Text>
    </View>
    </SafeAreaView>
    



  )
}

export default Login

const styles=StyleSheet.create({
LoginContainer:{
    backgroundColor:"#E50914",
    height:"100%",
    flex:1
},
movietext:{
    color:"white",
    fontFamily:"BebasNeue-Regular",
    fontSize:36,
    textAlign:'center',
    // paddingTop:70
    paddingTop:height/10
},
logincard:{
    // marginTop:40,
    marginTop:height/12,
    // height:400,
    height:height/1.8,
    // width:350,
    width:width/1.1,
    backgroundColor:"white",
    alignSelf:'center',
    borderRadius:30,
    opacity:0.25,
    position:'relative'
   
},
textinputContainer:{
   position:'absolute',
},
loginput:{
    // height:38,
    height:height/20,
    width:width/1.35,
    // width:289,
    backgroundColor:'black',
    borderRadius:214,
    alignSelf:"center",
//    marginTop:50,
   marginTop:height/15,
   position:'relative',
//    paddingLeft:40,
paddingLeft:width/8,
//    paddingBottom:5,
paddingBottom:height/140,
  color:"white" ,
//    top:100,
   top:height/7.5 ,
//    left:50,
left:width/8,
   fontFamily:"Poppins-Regular",
   opacity:0.6,
   },
userIcon:{
    position:'absolute',
    // top:160,
    top:height/4.7,
    // left:40,
    left:width/10
    
},
textinputContainer1:{
    position:'absolute',
 },
 loginput1:{
    height:height/20,
    width:width/1.35,
    //  height:38,
    //  width:289,
     backgroundColor:'black',
     borderRadius:214,
     alignSelf:"center",
    // marginTop:50,
    marginTop:height/15,
    position:'relative',
    // paddingLeft:40,
    paddingLeft:width/8,
//    paddingBottom:5,
paddingBottom:height/140,
    color:"white",
    // top:170,
    top:height/4.4,
    // left:50,
    left:width/8,
    color:"white" ,
    fontFamily:"Poppins-Regular",
    opacity:0.6,
    
   
   
 },
 userIcon1:{
     position:'absolute',
    //  top:230,
    top:height/3.28,
    //  left:40,
     left:width/10
     
 },
 loginButton:{
    // height:36,
    height:height/22,
    // width:138,
    width:width/3.2,
    backgroundColor:"black",
    alignSelf:'center',
    borderRadius:10,
    position:'absolute',
    // top:350
    top:height/2.2
    
 },
 loginButtonText:{
    color:"white",
    textAlign:"center",
    padding:7,
    fontFamily:"Poppins-Regular",
 },
 t1:{
    fontFamily:"Poppins-Regular",
    textAlign:'center',
    fontSize:15,
    top:-50
    
 },
 t2:{
    fontFamily:"Poppins-Bold",
    color:"white"
 }

})





{/* <View style={styles.LoginContainer}>
    <Text style={styles.movietext}>MOVIES APP</Text>
    <View style={styles.logincard}>
        <View style={styles.textinputContainer}>
        <TextInput style={styles.loginput}/>
        <View style={styles.userIcon}>
        <Icon  paddingLeft={30} name="user" size={18} color="#ffff" />
        </View>
        </View>
        <View style={styles.textinputContainer}>
        <TextInput style={styles.loginput}/>
        <View style={styles.userIcon}>
        <Icon  paddingLeft={30} name="lock" size={18} color="#ffff" />
        </View>
        </View>
    </View>
    </View> */}