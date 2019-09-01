
import React from "react"
import gql from "graphql-tag"
import { useQuery} from "@apollo/react-hooks"
import { Text, View, ScrollView } from "react-native"

const FILMS_DESCRIP_QUERY = gql`
query{
   allFilms{
    species{
        name
        eyeColor
        hairColor
        skinColor
        language
        averageHeight
    } 
    title
    director
    producers
    releaseDate   
  }
}`
var cont =0
export default function FilmDescripScreen(props) {
  const { loading, error, data } = useQuery(FILMS_DESCRIP_QUERY)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error!!</Text>
  return(
    <View style={{backgroundColor:"rgb(223,226,231)"}}>
      <ScrollView>
      {data.allFilms.map((film,f) =>(
          
          <View>
          <Text>{"\n"}</Text>  
          <Text style= {{width: 300, 
                        borderColor: 'violet', 
                        borderWidth: 1, 
                        color : "purple", 
                        fontSize:25 , 
                        textAlign:"center",
                        alignSelf:"center", 
                        fontWeight: "bold",
                        backgroundColor:"rgb(223,226,231)"}}><Text key={f}>{film.title}</Text></Text>
            <Text style= {{ 
                        color : "purple", 
                        fontSize:19 , 
                        margin:10, 
                        fontWeight: "bold",
                        textAlign:"center"}}>Información Básica de la Película</Text>
            <Text key={f} style= {{ 
                          color : "green", 
                          fontSize:15 , 
                          margin:8, 
                          fontWeight: "bold",
                          textAlign:"center"}}>Director:{film.director}</Text>
            <Text key={f} style= {{ 
                          color : "green", 
                          fontSize:15 , 
                          margin:8, 
                          fontWeight: "bold",
                          textAlign:"center"}}>Productores:{film.producers[0]} - {film.producers[1]}</Text>
            <Text key={f} style= {{ 
                          color : "green", 
                          fontSize:15 , 
                          margin:8, 
                          fontWeight: "bold",
                          textAlign:"center"}}>Fecha:{film.releaseDate}</Text>
            <Text style= {{ 
                        color : "purple", 
                        fontSize:19 , 
                        margin:10, 
                        fontWeight: "bold",
                        textAlign:"center"}}>Especies que aparecen:</Text>
            <View>
              <ScrollView key={f}>
                {film.species.map((specie,s)=>(
                  <View style={{width: 250, 
                        borderColor: 'purple', 
                        borderWidth: 1,
                        alignSelf:"center",
                        backgroundColor: "rgb(187,192,198)" }}>
                  <Text>{"\n"}</Text> 
                    <Text key={s} style= {{ 
                          color : "blue", 
                          fontSize:16 , 
                          marginHorizontal:60, 
                          fontWeight: "bold"}}>Nombre:{specie.name}</Text>
                    <Text style= {{ 
                          color : "blue", 
                          fontSize:14 , 
                          marginHorizontal:40, 
                          fontWeight: "bold"}}>Características físicas</Text>
                    <Text key={s} style= {{ 
                          color : "blue", 
                          fontSize:12 , 
                          marginHorizontal:20, 
                          fontWeight: "bold"}}>Color de ojos:<Text style={{fontWeight: "normal"}}> {specie.eyeColor}</Text></Text>
                    <Text key={s} style= {{ 
                          color : "blue", 
                          fontSize:12 , 
                          marginHorizontal:20, 
                          fontWeight: "bold"}}>Color de cabello:<Text style={{fontWeight: "normal"}}> {specie.hairColor}</Text></Text>
                    <Text key={s} style= {{ 
                          color : "blue", 
                          fontSize:12 , 
                          marginHorizontal:20, 
                          fontWeight: "bold"}}>Color de piel:<Text style={{fontWeight: "normal"}}> {specie.skinColor}</Text></Text>
                    <Text key={s} style= {{ 
                          color : "blue", 
                          fontSize:12 , 
                          marginHorizontal:20, 
                          fontWeight: "bold"}}>Idioma:<Text style={{fontWeight: "normal"}}> {specie.language}</Text></Text>
                    <Text>{"\n"}</Text>
                          
                </View>                  
              ))}
            </ScrollView>
          </View>
        </View>  
        ))}
      </ScrollView>
    </View>
  )
  
}

FilmDescripScreen.navigationOptions = {
  title: 'PELICULA',
};

