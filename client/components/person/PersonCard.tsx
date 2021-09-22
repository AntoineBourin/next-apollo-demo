import React from 'react';
import { Person } from "../../lib/queries/persons-query";
import style from '../../styles/PersonCard.module.scss';

interface PersonCardProps {
  person: Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <div className={style.person}>
      <p><span>Name</span> : {person.name}</p>
      <p><span>Address</span> : {person.address}</p>
      <p><span>Phone number</span> : {person.phoneNumber}</p>
      <p><span>Email</span> : {person.email}</p>
    </div>
  );
};

export default PersonCard;