import { gql, useQuery } from "@apollo/client";
import { MeQuery } from "../gql/types";

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
    }
  }
`;

export const useMe = () => {
  return useQuery<MeQuery>(ME_QUERY);
};
