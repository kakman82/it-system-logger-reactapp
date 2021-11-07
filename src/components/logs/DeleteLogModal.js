import React from 'react';
import { connect } from 'react-redux';
import { deleteLog, clearCurrent } from '../../actions/logActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const DeleteLogModal = ({ current, deleteLog, clearCurrent }) => {
  const onDelete = () => {
    deleteLog(current.id);
    M.toast({ html: `Log deleted by ${current.tech}` });
  };

  return (
    <div id='delete-log-modal' className='modal'>
      <div className='modal-content'>
        <h4 className='center red-text'>Are you sure?</h4>
        <h6>This action cannot be undone!</h6>
        <div className='modal-footer'>
          <a
            href='#!'
            className='modal-close waves-effect waves-green btn '
            style={{ marginRight: '10px' }}
            onClick={() => clearCurrent()}>
            Close
          </a>
          <a
            href='#!'
            className='modal-close waves-effect red btn'
            onClick={onDelete}>
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

DeleteLogModal.propTypes = {
  current: PropTypes.object,
  deleteLog: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { deleteLog, clearCurrent })(
  DeleteLogModal
);
