import React,{useState,useEffect} from 'react'
import { View , StyleSheet, ScrollView,ActivityIndicator,TouchableOpacity,Text} from 'react-native'
import {upcomingMovies,getpopularMovies,getpopularTvShows,getFamilyMovies,getHorrorMovies,getRomanticMovies,getDocumentries} from "../services/services"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Slider from '../components/Slider'
import List from '../components/List'
import Error from '../components/Error'
import { height } from '../utils/utils'
const Home = ({navigation}) => {
    const [movieImages,setMovieImages]=useState()
    const [popularMovies,setPopularMovies]=useState()
    const [popularTv,setPopularTv]=useState()
    const [familyMovie,setFamilyMovie]=useState()
    const [horrorMovies,setHorrorMovies]=useState()
    const [romanticMovies,setRomanticMovies]=useState()
    const [documentry,setDocumentry]=useState([])
   const [error,setError]=useState(false)
   const [loaded,setLoaded]=useState(false)
   const getData=()=>Promise.all([
    upcomingMovies(),
    getpopularMovies(),
    getpopularTvShows(),
    getFamilyMovies(),
    getHorrorMovies(),
    getRomanticMovies(),
    getDocumentries(),
    
   ]).catch(()=>{setError(true)}).finally(()=>setLoaded(true))
    useEffect(()=>{
        getData().then(([movieImages,popularMovies,popularTv,familyMovie,horrorMovies,romanticMovies,documentry])=>{
            const moviesArray=[];
            movieImages.forEach((movie)=>{
                            moviesArray.push(`https://image.tmdb.org/t/p/w500${movie.poster_path}`);
                        })
                        setMovieImages(moviesArray);
                        setPopularMovies(popularMovies);
                        setPopularTv(popularTv);
                        setFamilyMovie(familyMovie);
                        setHorrorMovies(horrorMovies);
                        setRomanticMovies(romanticMovies);
                        setDocumentry(documentry)
        })
},[])
   
//    console.log(popularMovies)
    return (
        
        <View style={styles.body}>
        {loaded && !error && <ScrollView>
            {/* Upcoming Movies */}
            {movieImages &&  <View style={styles.sliderContainer}>
          {/* <View style={styles.favOuter}> */}
        <Slider images={movieImages}/>
        {/* <TouchableOpacity style={styles.favicon} onPress={()=>{navigation.navigate('Favourites')}}>
        <Icon  name="heart" size={50} color="red"/>
        <Text style={styles.favtext}>Favourites</Text>
        </TouchableOpacity> */}
        {/* </View> */}
      </View>}
      {/* Popular movies */}
     {popularMovies &&  <View style={styles.carousel}> 
        <List navigation={navigation} title="Popular Movies" content={popularMovies} /> 
       </View>}
      {/* family movies */}
      {familyMovie &&  <View style={styles.carousel}>
        <List navigation={navigation} title="Family Movies" content={familyMovie} />
       </View>}
       {/* horror movies */}
       {horrorMovies && <View style={styles.carousel}>
        <List navigation={navigation} title="Horror Movies" content={horrorMovies} />
       </View>}
       {/* romantic movies */}
       {romanticMovies && <View style={styles.carousel}>
        <List navigation={navigation} title="Romantic Movies" content={romanticMovies} />
       </View>}
       {/* documentry */}
      {documentry &&  <View style={styles.carousel}>
        <List navigation={navigation} title="Documentary" content={documentry} />
       </View>}
              
      </ScrollView>}
       {!loaded &&  <ActivityIndicator size={'large'} color={'#E50914'} style={styles.loader}/>}
      {error && <Error/>}
      </View>
    );
}

const styles=StyleSheet.create({
    body:{
        backgroundColor:'black'
    },
    sliderContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    
    carousel:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
      
          
    },
    favOuter:{
        position:'relative',
        alignItems:'flex-start',
    //   height:'100%',
       
    },
    favicon:{
        position:'absolute',
        alignSelf:'flex-start',
        height:100,
        width:100,
        alignItems:'center',
        justifyContent:'center',
      
    },
    favtext:{
        fontSize:15,
        textAlign:'center',
        color:'white',
        fontFamily:'Poppins-Regular',
        backgroundColor:'black',
    }
    
})
export default Home;































