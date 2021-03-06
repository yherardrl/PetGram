import React from "react";

import { PhotoCard } from "../components/PhotoCard";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = () => (
  <Query query={query}>{() => <PhotoCard />}</Query>
);
