import React from 'react';
import DialTones from './DialTones';
import { connect } from 'react-redux';
import filterOutput from '../../utils/filterOutput';

const mapStateToProps = state => ({
  displayOutput: state.displayOutput,
  displayInput: state.displayInput,
  filterType: state.filterType,
  isLoading: state.isLoading,
});

const Phone = ({ isLoading, filterType, displayInput, displayOutput }) => (
  <div className="column is-flex is-justify-content-center is-4"> 
    <div id="phoneAntenna"/>
    <div id="phoneBody">
      <textarea id="phoneTextarea" value={
        isLoading
          ? 'Loading...'
          : `INPUT: ${displayInput}\n\nOUTPUT: ${filterOutput(filterType, displayOutput)}`} readOnly
      />
      <DialTones/>
    </div>
  </div>
);

export default connect(mapStateToProps, null)(Phone);