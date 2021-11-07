import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';
import LogItem from './LogItem';
import PreLoader from '../layout/PreLoader';
import PropTypes from 'prop-types';

// tüm state aldığımız için distructure ile state ve action metodunu props olarak belirtiyoruz
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, [getLogs]);

  if (loading || logs === null) {
    return <PreLoader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center teal-text'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>There are no logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};
// yararlanacağımız state değişkenlerinin yer aldığı bölüm
const mapStateToProps = (state) => ({
  // ister bu şekilde state.log ile tüm state alalım
  // istersek de log: state.log.logs, loading: state.log.loading ile tek tek alalım, ihtiyaca göre değişir
  log: state.log,
});

// connet ile redux state ile bağlantı kuruyoruz, state için mapStateToProps'u, kullandığımız action metodlarını ise ayrı bir object olarak parametre şeklinde belirtiyoruz
export default connect(mapStateToProps, { getLogs })(Logs);
