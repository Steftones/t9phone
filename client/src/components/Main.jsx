import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Phone from './Phone/Phone';
import Options from './Options/Options';
import telPad from '../constants/telPad';
import { updateInput } from '../redux/converter/converterActions';

const mapDispatchToProps = dispatch => ({
    updateInput: (input) => dispatch(updateInput({ input })),
});

const Main = ({ updateInput }) => {

  // allows the user to type in numbers via their keyboard
  useEffect(() => {
    const keyPress = event => telPad[event.key] && updateInput(event.key);
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  });

  return (
    <div>
      <div id="topSection" className="column" />
      <div className="columns">
        <div className="column is-2" />
        <Phone />
        <Options />
        <div className="column is-2" />
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Main);
