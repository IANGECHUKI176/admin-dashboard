import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chat/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='https://media.istockphoto.com/photos/modern-wireless-bluetooth-headphones-with-charging-case-on-a-blue-picture-id1346147559?b=1&k=20&m=1346147559&s=170667a&w=0&h=ofy428m_H-K6na3JpFded3U66TVsIp56D1Z6ffflkk0='
              className='productInfoImg'
              alt=''
            />
            <span className='productName'>Apple Airpods</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>1452</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Sales:</span>
              <span className='productInfoValue'>$ 45050</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>active</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>In Stock:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input type='text' placeholder='airpod pro' />
            <label>In Stock</label>
            <select name='inStock' id='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src='https://media.istockphoto.com/photos/modern-wireless-bluetooth-headphones-with-charging-case-on-a-blue-picture-id1346147559?b=1&k=20&m=1346147559&s=170667a&w=0&h=ofy428m_H-K6na3JpFded3U66TVsIp56D1Z6ffflkk0='
                alt=''
                className='productUploadImg'
              />
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' name='file' id='file' hidden />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
