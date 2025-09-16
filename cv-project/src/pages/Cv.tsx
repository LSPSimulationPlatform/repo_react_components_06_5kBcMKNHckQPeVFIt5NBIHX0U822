import { useState } from "react";
import style from "./Cv.module.css";
import ProgressBar from "../components/ProgressBar";

const Cv = () => {
  const [file, setFile] = useState<File | null>(null);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.left}>
          <div className={style.upload}>
            <input 
              type="file" 
              accept="image/*"
              placeholder="Upload your photo" 
              onChange={change} 
            />
            {file && (
              <img 
                src={URL.createObjectURL(file)} 
                alt="Uploaded preview" 
                className={style.previewImg}
              />
            )}
          </div>
          <div className={style.primaryInfo}>
            <h1>Ali Shukur</h1>
            <p>Mechanical Engineer Student - Baku Engineering University</p>
          </div>
<div className={style.links}>
        <p>📍 Sumgait, Azerbaijan</p>
        <a href="mailto:yaalishukur@gmail.com" className={style.link}>
          ✉️ yaalishukur@gmail.com
        </a>
        <a href="https://github.com/alishukur2" target="_blank" rel="noopener noreferrer" className={style.link}>
          ⌖ github.com/alishukur2
        </a>
        <a href="https://www.linkedin.com/in/ali-shukur-bba141335" target="_blank" rel="noopener noreferrer" className={style.link}>
          🔗 www.linkedin.com/in/ali-shukur-bba141335
        </a>
      </div>
      <div className={style.skills}>
        <ProgressBar></ProgressBar>
      </div>
      <div className={style.languages}>
      </div>
        </div>
        <div className={style.right}></div>
      </div>
    </>
  );
};

export default Cv;
