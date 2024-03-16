import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faTachographDigital,
  faHelicopter,
  faPersonRifle,
  faWalkieTalkie,
  faGun,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate('/');
  const onGoDashboardClicked = () => navigate('/Dashboard');
  const onGoMissionGenClicked = () => navigate('/missions');
  const onGoVehicleClicked = () => navigate('/garage');
  const onGoCommunityClicked = () => navigate('/community');
  const onGoArmoryClicked = () => navigate('/armory');

  let goHomeButton = null;
  if (pathname !== '/home') {
    goHomeButton = (
      <button
        className="dash-header__button icon-button"
        title="Home"
        onClick={onGoHomeClicked}
      >
        <FontAwesomeIcon icon={faHouse} />
      </button>
    );
  }
  let goMissionGenButton = null;
  if (pathname !== '/missions') {
    goMissionGenButton = (
      <button
        className="dash-header__button icon-button"
        title="missions"
        onClick={onGoMissionGenClicked}
      >
        <FontAwesomeIcon icon={faPersonRifle} />
      </button>
    );
  }
  let goCommunityButton = null;
  if (pathname !== '/community') {
    goCommunityButton = (
      <button
        className="dash-header__button icon-button"
        title="community"
        onClick={onGoCommunityClicked}
      >
        <FontAwesomeIcon icon={faWalkieTalkie} />
      </button>
    );
  }
  let goArmoryButton = null;
  if (pathname !== '/armory') {
    goArmoryButton = (
      <button
        className="dash-header__button icon-button"
        title="armory"
        onClick={onGoArmoryClicked}
      >
        <FontAwesomeIcon icon={faGun} />
      </button>
    );
  }
  let goVehiclesButton = null;
  if (pathname !== '/garage') {
    goVehiclesButton = (
      <button
        className="dash-header__button icon-button"
        title="garage"
        onClick={onGoVehicleClicked}
      >
        <FontAwesomeIcon icon={faHelicopter} />
      </button>
    );
  }

  let goDashboardButton = null;
  if (pathname !== '/Dashboard') {
    goDashboardButton = (
      <button
        className="dash-header__button icon-button"
        title="Dashboard"
        onClick={onGoDashboardClicked}
      >
        <FontAwesomeIcon icon={faTachographDigital} />
      </button>
    );
  }

  const content = (
    <header className="dash-header">
      <div className="dash-header__container">
        {goHomeButton}
        {goMissionGenButton}
        {goDashboardButton}
        {goVehiclesButton}
        {goCommunityButton}
        {goArmoryButton}
      </div>
    </header>
  );

  return content;
};

export default Header;
