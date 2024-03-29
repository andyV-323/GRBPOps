import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileImport } from '@fortawesome/free-solid-svg-icons';

function CommunityOPS() {
  return (
    <div className="community-menu">
      <h4>Community Dashboard</h4>
      <br />
      <FontAwesomeIcon style={{ color: 'cyan' }} icon={faPlus} />
      <a href="/community/create"> Create</a>
      <br />
      <FontAwesomeIcon style={{ color: 'cyan' }} icon={faFileImport} />
      <a href="/community/import"> Import</a>
    </div>
  );
}

export default CommunityOPS;
