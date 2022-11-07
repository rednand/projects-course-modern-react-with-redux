import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const qualquerNomemasGeralmenteEhmapStateToProps = (state) => {
  //sempre recebe state e retorna um objeto
  return {
    song: state.selectedSong,
  };
};

//quando passar a funçao dentro da connect function ela chama automaticamente um action
export default connect(qualquerNomemasGeralmenteEhmapStateToProps)(SongDetail);
