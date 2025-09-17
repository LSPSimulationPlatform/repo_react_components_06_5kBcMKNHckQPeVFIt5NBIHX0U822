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
            <h2>Ali Shukur</h2>
            <p className={style.primaryParagraph}>Mechanical Engineer Student - Baku Engineering University</p>
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
        <h2>Languages</h2>
        <div className={style.minorPartLang}>
          <p>Azerbaijani</p> <p>Native</p>
        </div>
        <div className={style.minorPartLang}>
          <p>English</p> <p>Professional</p>
        </div>
        <div className={style.minorPartLang}>
          <p>Spanish</p> <p>Beginner</p>
        </div>
      </div>
      <div className={style.education}>
        <label className={style.educationHead}>Education &rarr; </label>
        <p className={style.educationParagraph}>Baku Engineering University -- Mechanical Engineering (ENG) </p>
      </div>
        </div>
        <div className={style.right}>
          <div className={style.profile}>
            <div className={style.profileHead}>
            <h2>Profile</h2>
            <button className={style.profileButton} disabled>Open to Work</button>
            </div>
            <div className={style.profileParagraph}><p>I am an engineer</p>
            </div>
          </div>
            <div className={style.experience}>
              <div className={style.experienceHead}>
                <h2>Experience</h2> <p className={style.experienceHeadParagraph}>Most Recent First</p>
              </div>
              <div className={style.experienceParagraph}>
                <div className={style.experienceParagraphParts}>
                  <h4>Front End Developer - KitGid</h4>
                  <p className={style.date}>July 2025 - Still Continuing</p>
                  <p className={style.paragraph}>Worked as a UI designer.</p>
                </div>
                <div className={style.experienceParagraphParts}>
                  <h4>BackEnd Developer - Kit Gid</h4>
                  <p className={style.date}>Januray 2025 - June 2025</p>
                  <p className={style.paragraph}>Created the whole BackEnd</p>
                </div>
              </div>
            </div>
            <div className={style.projects}>
              <div className={style.projectsHead}>
              <h2>Selected Projects</h2><p className={style.paragraph}>Links & Short Descriptions</p>
              </div>
              <div className={style.projectsParagraph}>
                <div className={style.parts}>
                  <h4>Project #1</h4><br />
                  <p>React Components</p>
                </div>
                <div className={style.parts}>
                  <h4>Project #2</h4><br />
                  <p>React Components</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cv;
