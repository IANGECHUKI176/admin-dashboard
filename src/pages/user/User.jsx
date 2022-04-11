import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Create user</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src='https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Ian Ochako</span>
              <span className='userShowUserTitle'>programmer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Contact Details</span>
            <div className='userShowInfo'>
              {" "}
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>ian ochako</span>
            </div>
            <div className='userShowInfo'>
              {" "}
              <CalendarToday className='userShowIcon' />
              <span className='userShowInfoTitle'>01.05.2002</span>
            </div>
            <div className='userShowInfo'>
              {" "}
              <PhoneAndroid className='userShowIcon' />
              <span className='userShowInfoTitle'>+254751667204</span>
            </div>
            <div className='userShowInfo'>
              {" "}
              <MailOutline className='userShowIcon' />
              <span className='userShowInfoTitle'>iangechuki@gmial.com</span>
            </div>
            <div className='userShowInfo'>
              {" "}
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>NY ,USA</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='ombogo'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor='username'>Full Name</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='ombogo ombima'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor='username'>Email</label>
                <input
                  type='email'
                  className='userUpdateInput'
                  placeholder='example@gmail.com'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor='username'>Phone</label>
                <input
                  type='tel'
                  className='userUpdateInput'
                  placeholder='+254 751667204'
                />
              </div>
              <div className='userUpdateItem'>
                <label htmlFor='username'>Address</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='NY | USA'
                />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  className='userUpdateImg'
                  src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                />
                <label htmlFor='file'>
                  <Publish className='userUpdateIcon' />
                </label>
                <input type='file' id='file' style={{ display: "none" }} />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
