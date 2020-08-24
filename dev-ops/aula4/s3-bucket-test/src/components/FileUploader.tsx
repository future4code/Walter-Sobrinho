import React, { useState } from "react";
import axios from "axios";

export const FileUploader = () => {
  const [link, setLink] = useState(undefined);

  async function handleFile(event: any) {
    try {
      const data = new FormData();
      data.append("file", event.target.files[0]);

      const res: any = await axios.put(
        "http://localhost:3333/files/upload",
        data
      );
      console.log(res.data);
      setLink(res.data.link);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <input type={"file"} onChange={handleFile} />
      <img src={link} alt="img" />
      <p>
        <a href={link}>Link para o arquivo</a>
      </p>
    </div>
  );
};

export default FileUploader;
