import '../styles/linkbutton.css';
import { Link } from 'react-router-dom';

export default function LinkButton({ name, to, src }) {
  return (
    <div className='link_cont'>
      <div className='link_face'>
        <img src={require(`../assets/${src}`)} alt='fhjg' />
        <Link to={'/setting'}>{name}</Link>
      </div>
      <img src={require('../assets/arrow.png')} alt='ufuig' />
    </div>
  );
}
