import React from 'react';
import './Profile.css';


export interface ProfileProps {
  title: string;
  
}

const ProfileElem: React.FC<ProfileProps> = (props) => {
    const [ color, setColor ] = React.useState('red');
    console.log('dentro de ProfileElem');
    const r = Math.random(); 
  
    const styles: React.CSSProperties = {
      backgroundColor: color,
    };
  
    const changeColor = () => {
      setColor(`rgb(200, 200, ${Math.floor(Math.random() * 255)})`);
    }
  
    return (<article className="ProfileElem"
      onClick={changeColor}
      style={styles}>
      <h2>{props.title}</h2>
    </article>);
  }
  
  export default ProfileElem;