import getPersonsRandomList from "./service";
import { Person } from "./type";

const Query = {
    getPersons: (_: any, { limit = 2000, start = 0 }): Person[] => (
        getPersonsRandomList(limit)
    ),
};

export default { Query };