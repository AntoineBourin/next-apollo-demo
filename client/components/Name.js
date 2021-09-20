import { gql, useQuery } from '@apollo/client';

const GET_NAME = gql`
  query name {
    name
  }
`;

const Component = () => {
  const { loading, error, data } = useQuery(GET_NAME);

  if (loading) return 'Loading...';
  if (error) {
    return `Error! ${error.message}`;
  }
  return (
    <span>
      {loading ? '..' : data.name}
    </span>
  );
};

export default Component
