import React, { PureComponent } from 'react'
import {SliderBox} from "react-native-image-slider-box"
import { Dimensions, StyleSheet } from 'react-native';
import PropTypes from "prop-types"
const placeholder=require('../assets/placeholder.png')
const dimension=Dimensions.get('screen')

const Slider=({images})=>{
    return(
        <SliderBox  
            images={images?images:placeholder}
            autoplay={true}
            circleLoop={true}
            sliderBoxHeight={dimension.height/1.5}
            dotStyle={styles.sliderstyle}
            />  
    )
}
// const propTypes={
//    images:PropTypes.array
//    }
// class Slider extends PureComponent {
    
//     render() {
//         const {images}=this.props
//         return (
//             <SliderBox  
//             images={images?images:placeholder}
//             autoplay={true}
//             circleLoop={true}
//             sliderBoxHeight={dimension.height/1.5}
//             dotStyle={styles.sliderstyle}
//             /> 
//         );
//     }
// }
// Slider.propTypes=propTypes
export default Slider;

const styles=StyleSheet.create({
   
    sliderstyle:{
        height:0
    },
})