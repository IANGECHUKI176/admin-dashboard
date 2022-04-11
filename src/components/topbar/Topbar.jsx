import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { IconButton, Badge } from "@material-ui/core";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>lamaadmin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            className='topbarAvatar'
            alt='topAvatar'
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
