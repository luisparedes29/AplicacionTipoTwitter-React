import { gql } from '@apollo/client';

export const GET_TWEETS = gql`
{
        tweets{
            id
            user
            tweet
            favorite
            fecha
            hora
        }
}
`;

export const CREATE_TWEET = gql`
mutation($user:String, $tweet:String, $fecha:String,$hora:String){
  addTweet(user:$user,tweet: $tweet, favorite:false, fecha:$fecha, hora: $hora) {
    id
    user
    tweet
    fecha
    hora
    favorite
  }
}`;

export const UPDATE_TWEET = gql`
mutation($id: ID!, $tweet: String!) {
  updateTweet(id: $id, tweet: $tweet) {
    tweet
  }
}
`;


export const DELETE_TWEET = gql`
mutation ($deleteTweetId: ID) {
  deleteTweet(id: $deleteTweetId) {
    id
  }
}
`;
