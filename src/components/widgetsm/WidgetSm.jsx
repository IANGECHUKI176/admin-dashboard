import "./widgetsm.css";
import React from "react";
import {Visibility} from '@material-ui/icons'
const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New join members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='user'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Ian Ochako</span>
            <span className='widgetSmUserTitle'>Software engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='user'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Ian Ochako</span>
            <span className='widgetSmUserTitle'>Software engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='user'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Ian Ochako</span>
            <span className='widgetSmUserTitle'>Software engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='user'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Ian Ochako</span>
            <span className='widgetSmUserTitle'>Software engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            className='widgetSmImg'
            src='https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='user'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Ian Ochako</span>
            <span className='widgetSmUserTitle'>Software engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
