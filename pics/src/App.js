import React from "react";
import { SearchBar } from "./components/SearchBar";
import { ImageList } from "./components/ImageList";
import api from "./services/api";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await api.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
