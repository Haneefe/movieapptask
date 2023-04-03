import React,{PureComponent} from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
const propTypes={
    errorText1:PropTypes.string,
    errorText1:PropTypes.string,
   }
   const defaultProps={
    errorText1:"Oops! Something went wrong",
    errorText2:"Make sure you are online and restart the app"
   }
class Error extends PureComponent {
  
    render() {
        const {errorText1,errorText2}=this.props;
        return (
           <View style={styles.container}>
            <Text style={styles.text}>{errorText1}</Text>
            <Text style={styles.text}>{errorText2}</Text>
           </View> 
        );
    }
}
Error.propTypes=propTypes
Error.defaultProps=defaultProps
export default Error;

const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
},
text:{
    fontWeight:"bold"
}
})