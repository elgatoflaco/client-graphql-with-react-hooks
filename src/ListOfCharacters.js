import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Link } from "@reach/router";
import Skeleton from './Skeleton'
const getCharacters = gql`
query getCharacters {
  characters {
    results {
      id
      name
      status
      species
      image
    }
  }
}
`

export const ListOfCharacters = () => {
  const { loading, data } = useQuery(getCharacters)
  if (loading) return <Skeleton />
  return (
    <div>
      {data.characters.results.map(post => (
        <Link to={`character/${post.id}`}>
        <div className="card" key={post.id}>
          <div className="content">
            <img src={post.image} alt=""/>
            <h1>{post.name}</h1>
            <p>{post.status}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  )
}

