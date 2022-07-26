import React from 'react';
import { connect } from 'react-redux';
import telPad from '../../constants/telPad';
import { updateInput } from '../../redux/converter/converterActions';

const mapDispatchToProps = dispatch => ({
  updateInput: (input) => dispatch(updateInput({ input })),
});

const DialTones = ({ updateInput }) => {

  const output = Object.entries(telPad).map(element => (
      <button key={element[0]} className="dialButton" onClick={() => updateInput(element[1] ? element[0] : '')}>
        {element[0]}<br/>{element[1] ? element[1].join('') : <>&nbsp;</>}
      </button>
    )
  );

  return (
    <div id="phoneButtons">
      {[...output.slice(1,11), output[0], output[11]]}
    </div>
  );

};

export default connect(null, mapDispatchToProps)(DialTones);