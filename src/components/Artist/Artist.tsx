import React from 'react';
import './Artist.css';


interface ArtistProps {
  title: string;
  descrip: string;
  url: string;
}

export const Artist: React.FC<ArtistProps> = (props) => {
   

    let className ='imgArtist';
   
  return <div className="artistDiv"><img className={className} src ={props.url} alt=""/> <h1>
    {props.title}
  </h1><p>{props.descrip}</p> </div>;
}