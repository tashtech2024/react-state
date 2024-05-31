import PropTypes from "prop-types";
import PeopleListItem from "../PeopleListItem/PeopleListItem";

function PeopleList({ people }) {
    console.log(people);
  const peopleJSX = people.map((item) => (
    <PeopleListItem person={item} key={item.id} />
  ));

  return (
    <div>
      <h2>People List</h2>

      {peopleJSX}
      
    </div>
  );
}

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
