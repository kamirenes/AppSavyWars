
import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { Text, View, ScrollView } from "react-native"

const ALL_SPECIES_QUERY = gql`
query{
  allSpecies{
    name
    averageHeight
  	averageLifespan
  	classification
  	designation
  	eyeColor
  	hairColor
  	isPublished
  	language
    skinColor
    films{
      title
    }
  }
}
`
export default function EspeciesScreen(props) {
  const { loading, error, data } = useQuery(ALL_SPECIES_QUERY)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error!!</Text>
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{"\n"}</Text>
      <ScrollView >
        {data.allSpecies.map((specie, key) => (
          <View style= {{ width: 330,borderWidth: 1, borderColor: 'green'}}>  
            <Text style={{
              fontSize:19, 
              color:"purple",
              fontWeight: "bold", 
              margin:10}}>
              <Text key={key} >{specie.name}</Text>
            </Text>  
            <Text style={{
              fontSize:14, 
              color:"purple",
              fontWeight: "bold", 
              margin:10}}>
              <Text>Descripción General</Text>
            </Text>               
            <Text style={{
              fontSize:12, 
              color:"black", 
              marginHorizontal:5}}>
              <Text key={key}> Vida Promedio: {specie.averageLifespan}</Text>
            </Text>
            <Text style={{
              fontSize:12, 
              color:"black", 
              marginHorizontal:5}}>
              <Text key={key}> Clasificación: {specie.classification}</Text>
            </Text>
            <Text style={{
              fontSize:12, 
              color:"black", 
              marginHorizontal:5}}>
              <Text key={key}> Designación: {specie.designation}</Text>
            </Text>
            <Text style={{
              fontSize:12, 
              color:"black", 
              marginHorizontal:5}}>
              <Text key={key}> Publicado: {specie.isPublished}</Text>
            </Text>
            <Text style={{
              fontSize:12, 
              color:"black", 
              marginHorizontal:5}}>
              <Text key={key}> Idioma: {specie.language}</Text>
            </Text>
            <Text style={{
              fontSize:14, 
              color:"purple",
              fontWeight: "bold", 
              margin:10}}>
              <Text>Características Físicas</Text>
            </Text>  
            <Text style={{
              fontSize:12, 
              color:"black", 
              marginHorizontal:5}}>
              <Text key={key}> Color de Ojos: {specie.eyeColor}</Text>
            </Text>
            <Text style={{
              fontSize:12, 
              color:"black", 
              marginHorizontal:5}}>
              <Text key={key}> Color de Cabello: {specie.hairColor}</Text>
            </Text>
            <Text style={{
              fontSize:12, 
              color:"black", 
              marginHorizontal:5}}>
              <Text key={key}> Color de Piel: {specie.skinColor}</Text>
            </Text>
            <Text style={{
              fontSize:12, 
              color:"black", 
              marginHorizontal:5}}>
              <Text key={key}> Altura Media: {specie.averageHeight}</Text>
            </Text>
            <Text style={{
              fontSize:12, 
              color:"black", 
              marginHorizontal:5}}>
              <Text> Peliculas en las que aparece:</Text>
            </Text>
          </View>                    
        ))}
        
      </ScrollView>      
    </View>
  )
}

EspeciesScreen.navigationOptions = {
  title: 'ESPECIES',
};