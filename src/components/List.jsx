import React,{PureComponent} from "react";
import { Text, View,FlatList, StyleSheet } from "react-native";
import PropTypes from "prop-types"
import Card from "./Card";


const List=({title,navigation,content})=>{
  return(

    <View>
            <View>
             <Text style={styles.text}>{title}</Text>
             </View>
          
              <View>
            <FlatList data={content} 
         renderItem={({item})=><Card navigation={navigation} item={item}/>}
         horizontal={true}
        ></FlatList>
          </View>  
          </View>
  )
}

export default List;

const styles=StyleSheet.create({
text:{
    fontSize:20,
    fontWeight:'bold',
   paddingTop:30,
   paddingLeft:10,
  //  color:"black"
  color:'#E50914'
}
})