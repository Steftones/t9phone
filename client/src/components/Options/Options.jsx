import React from 'react';
import { connect } from 'react-redux';
import { resetInput, callApi, changeFilter } from '../../redux/converter/converterActions';

const mapStateToProps = state => ({
  filterType: state.filterType,
  displayInput: state.displayInput,
});

const mapDispatchToProps = dispatch => ({
    changeFilter: (input) => dispatch(changeFilter({ input })),
    callApi: (input) => dispatch(callApi({ input })),
    resetInput: () => dispatch(resetInput()),
});

const Options = ({ filterType, displayInput, resetInput, changeFilter, callApi }) => (
  <div className="column has-text-centered is-4">
    <h1>T9 number to word list converter</h1>

    <div className="section">
      <button onClick={() => callApi(displayInput)}>Convert</button> &nbsp;
      <button onClick={resetInput}>Reset</button>
    </div>

    <div className="section">
      Mode:
      <br/>
      <div className="select">
        <select onChange={(e) => changeFilter(e.target.value)} value={filterType}>
          <option>Decrypt T9</option>
          <option>Filter words</option>
        </select>
      </div>
    </div>

  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Options);