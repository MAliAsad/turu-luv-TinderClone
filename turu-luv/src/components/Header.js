
import "../css/header.css";
import FaceIcon from '@material-ui/icons/Face';
import IconButton from '@material-ui/core/IconButton';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';


const Header = () => {
    return (
        <div className="header">
            <IconButton>
            <FaceIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src="https://iconarchive.com/download/i108694/google/noto-emoji-people-family-love/12151-revolving-hearts.ico" alt="" /> 
            <IconButton>
            <ForumOutlinedIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header
