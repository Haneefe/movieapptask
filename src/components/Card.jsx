import React,{useState} from 'react'
import { TouchableOpacity, StyleSheet ,Image, Text,View,ToastAndroid} from 'react-native';
import PropTypes from "prop-types"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const placeholder=require('../assets/placeholder.png')
// import Detail from '../screens/Detail';



const Card=({navigation,item})=>{
    const [clicked,setIsClicked]=useState(false)
    const[data,setData]=useState([])
  
    const clickHandler=(item)=>{
        clicked===false?setIsClicked(true):setIsClicked(false)
     clicked===false? ToastAndroid.showWithGravityAndOffset("Added to favorites",ToastAndroid.LONG,ToastAndroid.BOTTOM,25,50):
     ToastAndroid.showWithGravityAndOffset("Removed to favorites",ToastAndroid.LONG,ToastAndroid.BOTTOM ,25,50);
        // setData(item)
      
    }
    // console.log(data)
    return(
        <TouchableOpacity style={styles.tile} onPress={()=>clickHandler(item)} >
                    {/* onPress={()=>navigation.navigate('Detail',{movieId:item.id})} */}
                    <Image style={styles.image} 
                   resizeMode="cover"
                  source={
                        item.poster_path ? 
                        {uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`}:placeholder}
                    
                 />
                   
                  {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
                <View style={styles.heartIcon}>
                    {!clicked ? <Icon  paddingLeft={30} name="heart" size={15} color="white"/>:<Icon  paddingLeft={30} name="heart" size={15} color="red"/>}
               {/* <Icon  paddingLeft={30} name="heart" size={15} color="white"/> */}
               {/* <Icon  paddingLeft={30} name="heart" size={15} color="red"/> */}
             </View>
                </TouchableOpacity>  
    )
}

export default Card;

const styles=StyleSheet.create({
    outer:{
// position:"relative"
    },
    tile:{
        padding:5,
        alignItems:"center",
        height:200,
        position:'relative',
       
    },
    image:{
height:200,
width:120,
borderRadius:20,

    },
    movieName:{
      position:"absolute",
      width:100,
      textAlign:"center",
      top:20
    },
    heartIcon:{
        position:'absolute',
        top:10,
        left:70
    
        
    },


})