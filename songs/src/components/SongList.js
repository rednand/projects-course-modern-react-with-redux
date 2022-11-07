import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

/* ABORDAGEM COM FUNCTION - trocar CONNECT por USESELECTOR */
// function SongList({ songs }) {
//   console.log(songs);
//   const dispatch = useDispatch();
//   const accountDetails = useSelector((state) => state.songs);

//   return <div>dsdsds</div>;
// }

/* ABORDAGEM COM CLASS - trocar CONNECT por CLASS*/

class _SongList extends React.PureComponent {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const qualquerNomemasGeralmenteEhmapStateToProps = (state) => {
  //sempre recebe state e retorna um objeto
  return {
    songs: state.songs,
  };
};

//quando passar a funçao dentro da connect function ela chama automaticamente um action
export default connect(qualquerNomemasGeralmenteEhmapStateToProps, {
  selectSong,
})(_SongList);
