import React from "react";
import "./App.css";
import * as AWS from "aws-sdk";
import FileUploader from "./components/FileUploader";

function App() {
  return (
    <main>
      <h1>Upload a file:</h1>
      <FileUploader />
    </main>
  );
}

export default App;
