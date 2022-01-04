import React from "react";
import CssOptionList from "./CssOptionsList.js";
import SelectedCssOption from "./SelectedCssOption.js";

/*
  TODO: import and render the presentational components
  needed to finish decomposing our app into small react components,
  each of which is responsible for a small, simple part of the UI
*/

const CssOptions = (props) => (
  <div>
    <h2>CSS Color Options</h2>
    <div className="color-options-row">
      <CssOptionList selectColor={props.selectColor} />
      <SelectedCssOption
        palette={props.palette}
        selectedColor={props.selectedColor}
        addToPalette={props.addToPalette}
      />
    </div>
  </div>
);

export default CssOptions;
