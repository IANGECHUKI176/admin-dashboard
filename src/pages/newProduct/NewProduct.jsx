import { Button } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "./newProduct.css";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export default function NewProduct() {
  const classes = useStyles();

  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>New Product</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label htmlFor='file'>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
              startIcon={<CloudUpload />}
              component='span'
            >
              Upload Image
            </Button>
          </label>
          <input type='file' id='file' hidden />
        </div>
        <div className='addProductItem'>
          <label>Name</label>
          <input type='text' placeholder='Apple Airpods' />
        </div>
        <div className='addProductItem'>
          <label>Stock</label>
          <input type='text' placeholder='123' />
        </div>
        <div className='addProductItem'>
          <label>Active</label>
          <select name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <Button className='addProductButton' variant='contained'>
          Create
        </Button>
      </form>
    </div>
  );
}
