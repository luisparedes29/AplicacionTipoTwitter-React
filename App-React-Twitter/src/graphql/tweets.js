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
