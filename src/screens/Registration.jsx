import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {View,Text,StyleSheet,SafeAreaView,Keyboard,Alert,TouchableOpacity,ToastAndroid, ScrollView} from "react-native"
import facebook from "../assets/icons/Facebook.png"
import google from "../assets/icons/Google.png"
import twitter from "../assets/icons/twitter.png"
import RegisterForm from '../components/RegisterForm'
import Regwithbox from '../components/Regwithbox'
import { height,width } from '../utils/utils'
import Loader from '../components/Loader'

const Registration = ({navigation}) => {
    const [inputs,setInputs]=useState({
        fullname:"",
        email:'',
        phone:'',
        password:'',

    });
    const [errors,setErrors]=useState({});
    const [loading,setLoading]=useState(false)
    // validation
    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;
    
        if (!inputs.email) {
          handleError('Please input email', 'email');
          isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
          handleError('Please input a valid email', 'email');
          isValid = false;
        }
    
        if (!inputs.fullname) {
          handleError('Please input fullname', 'fullname');
          isValid = false;
        }
    
        if (!inputs.phone) {
          handleError('Please input phone number', 'phone');
          isValid = false;
        }
    
        if (!inputs.password) {
          handleError('Please input password', 'password');
          isValid = false;
        } else if (inputs.password.length < 5) {
          handleError('Min password length of 5', 'password');
          isValid = false;
        }
    
        if (isValid) {
          register();
          
        }
      };



    //register
    const register = () => {
        setLoading(true);
        setTimeout(() => {
          try {
            setLoading(false);
            AsyncStorage.setItem('userData', JSON.stringify(inputs));
            navigation.navigate('LoginPage');
            ToastAndroid.showWithGravityAndOffset("Login to continue",ToastAndroid.LONG,ToastAndroid.BOTTOM,25,50)
          } catch (error) {
            Alert.alert('Error', 'Something went wrong');
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
   
    <SafeAreaView style={styles.outerContainer}>
    <Loader visible={loading}/>
    <ScrollView  contentContainerStyle={{flex:1}}>
       <View style={styles.topContainer}>
        <Text style={styles.welcometext}>WELCOME</Text>
       </View>
       <View style={styles.formContainer}>
        <Text style={styles.registertext}>Register With</Text>
        <View style={styles.regiconcontainer}>
          <Regwithbox img={google}/>
          <Regwithbox img={facebook}/>
          <Regwithbox img={twitter}/>
        </View>
        <Text style={styles.registeremailtext}>Or,register with email</Text>
       
        <RegisterForm name="person" 
        placeholder='Full Name'
        onChangeText={text => handleOnchange(text, 'fullname')}
        onFocus={() => handleError(null, 'fullname')}
        error={errors.fullname}
        />
        <RegisterForm name="email" 
        placeholder='E-Mail'
        onChangeText={text => handleOnchange(text, 'email')}
        onFocus={() => handleError(null, 'email')}
        error={errors.email}
        />
        <RegisterForm name="phone-android"
         placeholder='Phone'
         onChangeText={text => handleOnchange(text, 'phone')}
        onFocus={() => handleError(null, 'phone')}
        error={errors.phone}
         />
        <RegisterForm name="lock" 
        placeholder='Password'
        onChangeText={text => handleOnchange(text, 'password')}
        onFocus={() => handleError(null, 'password')}
        password
        error={errors.password}
        />
        
       <TouchableOpacity style={styles.registerbutton} onPress={validate}>
        <Text style={styles.buttonText}>Register</Text>
       </TouchableOpacity>
       <Text style={styles.bottomtext}>Already registered?<Text style={styles.bottomtext1} onPress={()=>{navigation.navigate('LoginPage')}}>Login</Text></Text>
       </View>
       </ScrollView>
    </SafeAreaView>
   
  )
}

export default Registration

const styles=StyleSheet.create({
    outerContainer:{
        position:'relative',
        flex:1
    },
    topContainer:{
        // height:200,
        height:height/3.8,
        // width:350,
        width:width/1.1,
        alignSelf:'center',
        backgroundColor:"#E50914",
        // marginTop:50,
        marginTop:height/20,
        borderRadius:20,
        justifyContent:'center'
    },
    welcometext:{
        fontFamily:'BebasNeue-Regular',
        color:"white",
        fontSize:36,
        textAlign:'center',
    },
    formContainer:{
// height:500,
height:height/1.45,
// width:280,
width:width/1.35,
alignSelf:'center',
backgroundColor:"white",
position:'absolute',
borderRadius:15,
// top:200,
top:height/4,
elevation:5,
shadowColor:'black',
// opacity:0.9

    },
    registertext:{
        textAlign:'center',
        fontFamily:"Poppins-Bold",
        color:"#4E4949",
        fontSize:18,
        // paddingTop:15
        paddingTop:height/50         
    },
    regiconcontainer:{
        // height:80,
        height:height/9,
        // backgroundColor:'blue',
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:'center'
    },
    registeremailtext:{
        textAlign:'center',
        // paddingTop:10,
        paddingTop:height/60,
        fontFamily:'Poppins-Bold',
        fontSize:12
    },
    registerbutton:{
        // height:45,
        height:height/15,
        // width:180,
        width:width/2.5,
        borderRadius:5,
        backgroundColor:"#E50914",
        alignSelf:'center',
        // marginTop:15
        marginTop:height/50,
        justifyContent:'center'
    },
    buttonText:{
        textAlign:'center',
        // paddingTop:12,
        color:'white',
        fontFamily:'Poppins-Regular',
        fontSize:18
    },
    bottomtext:{
        fontFamily:'Poppins-Regular',
        textAlign:'center',
        fontSize:15,
        // paddingTop:10
        paddingTop:height/40
    },
    bottomtext1:{
        fontFamily:'Poppins-Bold',
        color:"#E50914"    
    }
   
    
})






// import React from 'react'
// import {View,Text,StyleSheet} from "react-native"
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import facebook from "../assets/icons/Facebook.png"
// import google from "../assets/icons/Google.png"
// import twitter from "../assets/icons/twitter.png"
// import RegisterForm from '../components/RegisterForm'
// import Regwithbox from '../components/Regwithbox'
// import { height,width } from '../utils/utils'
// const Registration = ({navigation}) => {
//   return (
//     <View style={styles.outerContainer}>
//        <View style={styles.topContainer}>
//         <Text style={styles.welcometext}>WELCOME</Text>
//        </View>
//        <View style={styles.formContainer}>
//         <Text style={styles.registertext}>Register With</Text>
//         <View style={styles.regiconcontainer}>
//           <Regwithbox img={google}/>
//           <Regwithbox img={facebook}/>
//           <Regwithbox img={twitter}/>
//         </View>
//         <Text style={styles.registeremailtext}>Or,register with email</Text>
//         <RegisterForm name="person" placeholder='Full Name'/>
//         <RegisterForm name="email" placeholder='E-Mail'/>
//         <RegisterForm name="lock" placeholder='Password'/>
//         <RegisterForm name="lock" placeholder='Confirm Password'/>
//        <TouchableOpacity style={styles.registerbutton}>
//         <Text style={styles.buttonText}>Register</Text>
//        </TouchableOpacity>
//        <Text style={styles.bottomtext}>Already registered?<Text style={styles.bottomtext1} onPress={()=>{navigation.navigate('LoginPage')}}>Login</Text></Text>
//        </View>
//     </View>
//   )
// }

// export default Registration












{/* <View style={styles.textboxcontainer}>
        <View style={styles.formicon}>
        <Icon padding={10} name="person" size={25} color="grey" />
        </View>
        <TextInput style={styles.textinput} placeholder="Full name" cursorColor={"grey"}/>
        
       </View>
       <View style={styles.textboxcontainer}>
        <View style={styles.formicon}>
        <Icon padding={10} name="email" size={25} color="grey" />
        </View>
        <TextInput style={styles.textinput} placeholder="E-Mail" cursorColor={"grey"}/>
        
       </View>
       <View style={styles.textboxcontainer}>
        <View style={styles.formicon}>
        <Icon padding={10} name="lock" size={25} color="grey" />
        </View>
        <TextInput style={styles.textinput} placeholder="Password" cursorColor={"grey"}/>
        
       </View>
       <View style={styles.textboxcontainer}>
        <View style={styles.formicon}>
        <Icon padding={10} name="lock" size={25} color="grey" />
        </View>
        <TextInput style={styles.textinput} placeholder="Confirm Password" cursorColor={"grey"}/>
        
       </View> */}