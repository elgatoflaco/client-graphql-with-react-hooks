import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Skeleton from './Skeleton'

const getCharacter = gql`
  query getCharacter($id: ID) {
    character(id: $id) {
      id
      name
      status
      species
      image
    }
  }
`

export const SingleCharacter = character => {
  const { loading, data, error } = useQuery(getCharacter, { variables: { id: character.id}} )
  if (loading) return <Skeleton />
  return (
    <div>
      
        <div className="card">
          <div className="content">
            <img src={data.character.image} alt=""/>
            <h1>{data.character.name}</h1>
            <p>{data.character.status}</p>
          </div>
        </div>
      
    </div>
  )
}