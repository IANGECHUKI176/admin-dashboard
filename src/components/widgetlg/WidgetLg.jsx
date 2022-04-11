import "./widgetlg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={`widgetLgButton ` + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
      <h3 className='widgetSmTitle'>latest transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Ian Ochako</span>
          </td>
          <td classNamw='widgetLgDate'>1St May 3030</td>
          <td classNamw='widgetLgAmount'>44050509</td>
          <td classNamw='widgetLgStatus'>
            <Button type='approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Ian Ochako</span>
          </td>
          <td classNamw='widgetLgDate'>1St May 3030</td>
          <td classNamw='widgetLgAmount'>44050509</td>
          <td classNamw='widgetLgStatus'>
            <Button type='pending' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Ian Ochako</span>
          </td>
          <td classNamw='widgetLgDate'>1St May 3030</td>
          <td classNamw='widgetLgAmount'>44050509</td>
          <td classNamw='widgetLgStatus'>
            <Button type='declined' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Ian Ochako</span>
          </td>
          <td classNamw='widgetLgDate'>1St May 3030</td>
          <td classNamw='widgetLgAmount'>44050509</td>
          <td classNamw='widgetLgStatus'>
            <Button type='approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Ian Ochako</span>
          </td>
          <td classNamw='widgetLgDate'>1St May 3030</td>
          <td classNamw='widgetLgAmount'>44050509</td>
          <td classNamw='widgetLgStatus'>
            <Button type='pending' />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
