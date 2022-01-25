import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Blocks(props) {
  return (
    <div className='comma'>
      <img className="image" src={props.image} alt='image not found'/>
      <div className="para">
       
        <h4><b />{props.head}</h4>
        <p className="des">{props.description}</p>
        <a className="anch" href={props.link}>Click Here</a>
      </div>
    </div>

  );
}
ReactDOM.render(
  <>
    <div className="container">
      <Blocks  image="http://cdn.wallpaperhi.com/2560x1600/20120302/flowers%20orange%20macro%20roses%202560x1600%20wallpaper_www.wallpaperhi.com_21.jpg"
        head="Category"
        description="Lorem Ipsum dolor sit amet, consectetuer adipiscingelit.
        Duis tellus. Donec ante dolor, iaculis nec,"
        link="#"
      />
      <Blocks image="https://tse2.mm.bing.net/th?id=OIP.hc1BYiakuG8bMWkfXnMXwwHaEo&pid=Api&P=0&w=283&h=177"
        head="Category"
        description="Lorem Ipsum dolor sit amet, consectetuer adipiscingelit.
        Duis tellus. Donec ante dolor, iaculis nec,"
        link="#"
      />
      <Blocks image="https://tse1.mm.bing.net/th?id=OIP.MBZCHIkz4xONzP_MDRIJzgHaEo&pid=Api&P=0&w=275&h=171"
        head="Category"
        description="Lorem Ipsum dolor sit amet, consectetuer adipiscingelit.
        Duis tellus. Donec ante dolor, iaculis nec, "
        link="#"
      />
    </div>
  </>,
  document.getElementById('root')
);