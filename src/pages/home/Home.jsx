import Chart from "../../components/chat/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from '../../components/widgetsm/WidgetSm'
import WidgetLg from '../../components/widgetlg/WidgetLg'
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='user Analytics'
        grid
        dataKey='Active User'
      />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
};

export default Home;
