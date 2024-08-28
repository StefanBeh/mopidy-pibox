import React from "react";
import Search from "components/search/Search";
import { Transition } from "react-transition-group";

export default class SearchOverlay extends React.Component {
  render() {
    const defaultStyle = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "fixed",
      background: "rgba(0, 0, 0, 0)",
      overflowY: "scroll",
      zIndex: 1100,
      transition: "background 100ms ease-in-out",
    };

    const transitionStyles = {
      entering: { background: "rgba(0, 0, 0, 0)" },
      entered: { background: "rgba(0, 0, 0, 0.9)" },
    };

    return (
      <Transition appear={true} in={true} timeout={100}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Search
              playbackState={this.props.playbackState}
              search={this.props.search}
              onSearch={this.props.onSearch}
              queueTrack={this.props.queueTrack}
            />
          </div>
        )}
      </Transition>
    );
  }
}
