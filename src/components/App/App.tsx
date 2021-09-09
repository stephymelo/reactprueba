import React from 'react';
import { Link } from '../Link/Link';
import { Song } from '../Song/Song';
import { Artist } from '../Artist/Artist';
import './App.css';
import logo from '../../recursos/logo.png';
import profile from '../../recursos/profile.png';
import donda from '../../recursos/dondaAlbum.jpeg';
import radio from '../../recursos/radioheadAlbum.png';
import johnmayor from '../../recursos/johnMayor.jpeg';
import kavinsky from '../../recursos/kavinsky.jpeg';
import eraser from '../../recursos/eraserAlbum.jpg';
import artic from '../../recursos/articmonkeys.jpeg';
import avenged from '../../recursos/avenged.jpg';



function App() {
  return (
    <div className="app">
      <nav className="nav">
        <img className="logo" src={logo} alt="logo" />

        <Link
          text="Home"
        />
        <Link
          text="Explore"
        ></Link>
        <Link
          text="Library"
        ></Link>
        <Link
          text="Search"
        ></Link>
        <img className="profile" src={profile} alt="profile" />
      </nav>

      <article className="favoritesArticle">
        <h1>Your favorites</h1>

        <section className="favoritesSection">
          <Song
            title="DONDA"
            descrip="Album-Kanye Weste"
            url={donda}
          ></Song>

          <Song
            title="OK Computer"
            descrip="Album-RadioHead"
            url={radio}
          ></Song>

          <Artist
            title="John Mayor"
            descrip="20k subscribers"
            url={johnmayor}
          ></Artist>

          <Artist
            title="Kavinsky"
            descrip="5k monthy listeners"
            url={kavinsky}
          ></Artist>
          <Song
            title="Nightmare"
            descrip="Album-Avenged Sevenfold"
            url={avenged}
          ></Song>

          <img className="button" src={profile} alt="button" />

        </section>


      </article>


      <article className="similarArticle">
        <h1>Similar to</h1>
        <p>Radiohead</p>

        <section className="similarSection">
          <Song
            title="Eraser"
            descrip="Album-Thom Yorke"
            url={eraser}
          ></Song>

          <Song
            title="OK Computer"
            descrip="Album-RadioHead"
            url={radio}
          ></Song>

          <Artist
            title="Artic Monkeys"
            descrip="55k subscribers"
            url={artic}
          ></Artist>

          <Artist
            title="Kavinsky"
            descrip="5k monthy listeners"
            url={kavinsky}
          ></Artist>

          <Song
            title="Nightmare"
            descrip="Album-Avenged Sevenfold"
            url={avenged}
          ></Song>

          <img className="button2" src={profile} alt="button" />
        </section>
      </article>







    </div>
  );
}

export default App;
