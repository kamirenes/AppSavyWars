
import React, {Component} from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { Text, View, ScrollView ,Platform,TouchableOpacity} from "react-native"


import FilmDescripScreen from "./FilmDescripScreen";

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
 

 
const ALL_FILMS_QUERY = gql`
query{
  allFilms{
    id
    title
    director
    producers
    releaseDate
  }
}
`
export default function HomeScreen(props) {
  const { loading, error, data } = useQuery(ALL_FILMS_QUERY)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error!!</Text>
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style= {{ width: 300, borderColor: 'violet', borderWidth: 1, color : "purple", fontSize:25 , textAlign:"center", fontWeight: "bold"}}>
          Bienvenido a XavyWars!</Text>
      <Text>{"\n"}</Text>
      <ScrollView >
        {data.allFilms.map((film, key) => (
          <View style= {{ width: 330,borderWidth: 1, borderColor: 'purple'}}>
            <Text style={{fontSize:19, color:"black",fontWeight: "bold", margin:10}}>
              <Text key={key} >{film.title} </Text>
            </Text>      
            <Text style={{fontSize:8, color:"black", textAlign:"right", marginVertical:-30, marginHorizontal:5}}>
              <Text>{film.releaseDate}</Text>
            </Text>        
            <Text style={{fontSize:15, color:"darkgray",fontWeight: "bold", marginHorizontal:8, marginVertical:40}}>
              <Text key={key}>{film.director}</Text>
            </Text>         
            <Text style={{
              marginVertical:-5,
              marginHorizontal:25, 
              width:80 ,height:20, 
              backgroundColor:"rgb(255, 177, 203)", 
              borderWidth:1, borderColor:"purple", borderRadius:50 , 
              fontSize:10, color:"purple", 
              fontWeight: "bold", 
              textAlign:"center"}}>
              <Text key={key}>{film.producers[0]}</Text>    
            </Text> 
            <Text style={{ 
              marginVertical:-15,
              marginHorizontal:15,
              width:80,
              height:20, 
              backgroundColor:"rgb(255, 177, 203)", 
              borderWidth:1, 
              borderColor:"purple", 
              borderRadius:50, 
              alignSelf:"center",
              fontSize:10, 
              color:"purple", 
              fontWeight: "bold",
              textAlign:"center"}}>
              <Text key={key}>{film.producers[1]}</Text>                  
             </Text>    
             <View>
                <TouchableOpacity onPress={verMas} >
                  <Text style={{
                  marginVertical:10,
                  textAlign:"right", 
                  color:"darkcyan",
                  fontSize:10, 
                  fontWeight: "bold",
                  marginRight:8}}>
                    Ver más                                      
                    </Text>   
                                 
                </TouchableOpacity>
              </View>
          </View>                    
        ))}
      
      </ScrollView>      
    </View>
  )
}

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const FilmDescripStack = createStackNavigator(
  {
    FilmDescrip: FilmDescripScreen,
  },
  config
);


FilmDescripStack.path = '';

function verMas (){
  <FilmDescripStack/>
}








  
  
 








