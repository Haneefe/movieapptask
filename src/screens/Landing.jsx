import React from 'react'
import { View,StyleSheet, Text,TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import movieIcon from "../assets/icons/movieIcon.png"
import { height,width } from '../utils/utils'
const Landing = ({navigation}) => {
  return (
  <View style={styles.landingpageContainer}>
     <View style={styles.movieisoncontainer}>
        <Image source={movieIcon}/>
        <Text style={styles.mvapptext}>Movies App</Text>
     </View>
    <TouchableOpacity style={styles.toLoginPage} onPress={()=>{navigation.navigate('LoginPage')}}>
        <Text style={styles.toLoginPageText}>Let's get started</Text>
        <Icon padding={10} name="keyboard-arrow-right" size={30} color="#ffff" />
        </TouchableOpacity>
  </View>
  )
}

export default Landing

const styles=StyleSheet.create({
    landingpageContainer:{
        height:'100%',
        backgroundColor:'#E50914',
        display:'flex',
        justifyContent:'space-between'
    },
    movieisoncontainer:{
    // 
    paddingTop:height/7,
     alignSelf:'center',
   
    },
    mvapptext:{
fontFamily:'BebasNeue-Regular',
fontSize:36,
color:"white",
alignSelf:'center',
// paddingTop:20
paddingTop:height/13
    },
    toLoginPage:{
        height:'6%',
        width:'90%',
        backgroundColor:'black',
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-between',
       borderRadius:15,
    //    marginBottom:170,
   marginBottom:height/5,
       alignSelf:'center',
       alignItems:'center'
    
       
    },
    toLoginPageText:{
        color:"white",
        fontFamily:'Poppins-Regular',
        paddingLeft:20,
        // paddingTop:15
      
    }
    
})