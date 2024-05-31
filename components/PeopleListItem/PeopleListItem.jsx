import PropTypes from 'prop-types';

function PeopleListItem({person}) {
    return (
        <div>
            <h3>Name: {person.name}</h3>
            <h4>Profession: {person.profession}</h4>
            <h4>Accomplishment: {person.accomplishment}</h4>
            <hr />
        </div>
    )
}




PeopleListItem.propTypes = {
    person: PropTypes.object
}

export default PeopleListItem;