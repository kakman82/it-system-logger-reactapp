import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

function TechSelectOptions({ getTechs, tech: { techs, loading } }) {
  useEffect(() => {
    getTechs();
  }, [getTechs]);

  return (
    !loading &&
    techs !== null &&
    techs.map((el) => (
      <option value={`${el.firstName} ${el.lastName}`} key={el.id}>
        {el.firstName} {el.lastName}
      </option>
    ))
  );
}

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
