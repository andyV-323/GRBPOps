import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faRedditAlien,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const content = (
    <footer className="dash-footer">
      <div className="copyright-container">
        <p>
          Connect with the community:{' '}
          <a
            href="https://discordapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} />{' '}
          </a>
          <a
            href="https://reddit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faRedditAlien} />{' '}
          </a>
          Collaborate:{' '}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />{' '}
          </a>
          Contact:{' '}
          <a href="mailto:andyvalencia.cs@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </p>
      </div>
    </footer>
  );

  return content;
};

export default Footer;
