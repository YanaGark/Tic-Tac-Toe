import React from 'react';
import './index.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SquareButton = withStyles({
    root: {
      borderRadius: '0',
      background: 'white',
      '&:hover': {background: '#21CBF3',},
      border: '1px',
      borderStyle: 'solid',
      borderColor: 'black',
      color: 'black',
      height: '100px',
      width: '100px',
      fontSize: '3em',
    },
    disabled: {
      borderRadius: '0',
      background: 'white',
      borderStyle: 'solid',
      border: '1px',
      borderColor: 'black',
      height: '100px',
      width: '100px',
      fontSize: '3em',
      color: 'black',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

    function Square(props){
        return (

            <SquareButton disabled={props.disabled} onClick = {props.onClick}>
                {props.value}
            </SquareButton>

        )
    }

export default Square;
