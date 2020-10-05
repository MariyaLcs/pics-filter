import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

console.log(process.env.REACT_APP_YOUR_ACCESS_KEY);

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID YOUR_ACCESS_KEY",
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
