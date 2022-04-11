import "./newUser.css";

const NewUser = () => {
  return (
    <div className='newUser'>
      <span className='newUserTitle'>New User</span>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' placeholder='john' />
        </div>
        <div className='newUserItem'>
          <label>Full Name</label>
          <input type='text' placeholder='john doe' />
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input type='email' placeholder='john@gmail.com' />
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input type='email' placeholder='password' />
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input type='tel' placeholder='+254 751667204' />
        </div>
        <div className='newUserItem'>
          <label>Address</label>
          <input type='text' placeholder='NY | USA' />
        </div>
        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label htmlFor='male'>male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label htmlFor='female'>Female</label>
            <input type='radio' name='gender' id='other' value='other' />
            <label htmlFor='other'>Other</label>
          </div>
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select className='newUserSelect' name='active' id='active'>
            <option value='yes'>yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
