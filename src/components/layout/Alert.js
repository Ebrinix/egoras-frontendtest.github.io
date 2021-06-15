import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Alert = ({ alerts }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map(alert => (
          <div className='custom-alert'>
            {/* <div key={alert.id} className={`alert alert-${alert.alertType}`}> */}
            <div key={alert.id} className='custom-alert-inner'>
              {/* {alert.msg} */}
              <div class="MuiSnackbarContent-message">{alert.msg}</div>
              {/* <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeSmall ml-auto" tabindex="0" type="button" aria-label="close">
                <span class="MuiIconButton-label">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </button> */}
            </div>
          </div>

        ))
      }
      
    </div>

  )
}
  

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
