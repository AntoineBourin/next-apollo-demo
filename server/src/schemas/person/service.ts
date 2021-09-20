import casual from "casual";
import { Person } from "./type";

const definePersonObject = (): void => {
  casual.define('person', () => ({
    name: casual.name,
    address: casual.address,
    email: casual.email,
    phoneNumber: casual.phone,
  }));
}

const getPersonsRandomList = (count: number): Array<Person> => {
  definePersonObject();
  const array_of = function(times: number, generator: Person) {
    const result = [];

    for (let i = 0; i < times; ++i) {
      result.push(generator);
    }

    return result;
  };
  // @ts-ignore
  return array_of(count, casual.person);
};

export default getPersonsRandomList;