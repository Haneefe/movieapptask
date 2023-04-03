import React,{useState} from 'react'
import {View,StyleSheet,TextInput,Text} from "react-native"
import { height,width } from '../utils/utils'
import Icon from 'react-native-vector-icons/MaterialIcons'

const RegisterForm = ({name,
  error,
  placeholder,
  password,
  style,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] =useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    
       <View>
       <View style={styles.textboxcontainer}>
        <View style={styles.formicon}>
        <Icon padding={10} name={name} size={25} color="grey" />
        </View>
        <TextInput 
        style={error?styles.textinput1:styles.textinput} 
        placeholder={placeholder} 
        cursorColor={"grey"}

        //
        error
        autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          {...props}
        />
        </View>
        {/* {error &&<Text  style={{marginTop: 2,paddingLeft:25, color:'red', fontSize: 12}}>{error}</Text>} */}
       </View>
    
  )
}

export default RegisterForm


const styles=StyleSheet.create({
   
    textboxcontainer:{
position:'relative'
    },
    textinput:{
    //    width:236,
    width:width/1.6,
    //    height:40,
    height:height/20,
       borderColor:'grey',
       borderWidth:1,
       borderRadius:0,
       alignSelf:'center',
    marginTop:height/35,
    //    paddingLeft:40
    paddingLeft:width/10
    },
    textinput1:{
      //    width:236,
      width:width/1.6,
      //    height:40,
      height:height/20,
         borderColor:'red',
         borderWidth:1,
         borderRadius:0,
         alignSelf:'center',
      marginTop:height/35,
      //    paddingLeft:40
      paddingLeft:width/10
      },
    formicon:{
        position: "absolute",
          zIndex: 1,
        //   left: 20,
        left:width/18,
        //   top:17
        top:height/40
    }
    
})



































{/* <View style={styles.textboxcontainer}>
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