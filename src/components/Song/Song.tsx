import React from 'react';
import './Song.css';


interface SongProps {
  title: string;
  descrip: string;
  url: string;
}

export const Song: React.FC<SongProps> = (props) => {
   

    let className ='imgAlbum';
   
  return <div className="albumDiv"><img className={className} src ={props.url} alt=""/> <h1>
    {props.title}
  </h1><p>{props.descrip}</p> </div>;
}