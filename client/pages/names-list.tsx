import React, { useEffect, useState } from 'react';
import getApolloClient from "../lib/with-apollo";
import PERSONS_QUERY, { Person } from "../lib/queries/persons-query";
import Loading from "../components/global/Loading";
import SearchInput from "../components/search/SearchInput";
import PersonCard from "../components/person/PersonCard";
import styles from '../styles/Persons.module.scss';

interface NamesListProps {
  persons: Array<Person>;
}

const NAME_LIST_LIMIT = 20;

const NamesList: React.FC<NamesListProps> = ({ persons }) => {
  const [queryStart, setQueryStart] = useState<number>(0);
  const [personsList, setPersonsList] = useState<Array<Person>>(persons);
  const [isLoadingNames, setIsLoadingNames] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const loadMoreNames = async () => {
    const { loading, error, data } = await getApolloClient().query({
      query: PERSONS_QUERY,
      variables: {
        limit: NAME_LIST_LIMIT,
        start: queryStart
      }
    });
    if (loading) {
      setIsLoadingNames(true);
    }
    if (Array.isArray(data?.getPersons)) {
      setPersonsList(persons.concat(data?.getPersons));
      setQueryStart(queryStart + NAME_LIST_LIMIT);
      setIsLoadingNames(false);
    }
  };

  const getFilteredPersonsList = (personsList: Person[]): Person[] => {
    if (searchValue.length < 2 || personsList.length === 0) {
      return personsList;
    }
    return personsList.filter(person => person.name.includes(searchValue, 0));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Persons list</h1>
      <SearchInput
        handleNewSearchValue={setSearchValue}
      />
      <div className={styles.personsList}>
        {getFilteredPersonsList((personsList || [])).map(person => (
          <PersonCard person={person} />
        ))}
      </div>
      {isLoadingNames && (
        <Loading />
      )}
      {getFilteredPersonsList((personsList || [])).length === 0 && !isLoadingNames && (
        <p>Sorry, no results were found for your search.</p>
      )}
      {getFilteredPersonsList((personsList || [])).length > 0 && (
        <button
          onClick={() => loadMoreNames()}
          disabled={isLoadingNames}
        >
          Load more...
        </button>
      )}
    </div>
  );
};

export async function getStaticProps(context) {
  const { data, error } = await getApolloClient().query({
    query: PERSONS_QUERY,
    variables: {
      limit: NAME_LIST_LIMIT,
      start: 0
    }
  });

  if (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      persons: data?.getPersons,
    },
  };
}

export default NamesList;