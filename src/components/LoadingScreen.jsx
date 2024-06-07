import { useState, useEffect } from 'react';
import styles from "@/app/page.module.css";


const LoadingScreen = () => {
    const languages = ['hello.', 'hallo.','bonjour.','안녕하세요.','buongiorno.','.السلام علیکم'];
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
      }, 150);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className={styles.loading}>
        <h1>{languages[currentLanguageIndex]}</h1>
      </div>
    );
  };
  
  export default LoadingScreen;
