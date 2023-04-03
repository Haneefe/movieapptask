import React from 'react'
import {StyleSheet,TouchableOpacity,Image} from "react-native"
import { height,width } from '../utils/utils'



const Regwithbox=({img})=>{
  return(
    <>
       <TouchableOpacity style={styles.regsingleicon}>
            <Image source={img} style={styles.regicon}/>
           
            </TouchableOpacity> 
            </>)
   
}

export default Regwithbox;

const styles=StyleSheet.create({
    regiconcontainer:{
        // height:80,
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:'center'
    },
    regsingleicon:{
        // height:60,
        height:height/15,
        width:width/6,
        // width:60,
        backgroundColor:"white",
        borderRadius:10,
        // paddingTop:5,
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
    },
    regicon:{
        alignSelf:'center',
        
    },
})
