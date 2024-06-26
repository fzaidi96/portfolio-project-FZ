import { useState, useEffect } from 'react';
import styles from "@/app/page.module.css";

const MobileAlert = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <div className={styles.mobileAlert}>
      <div className={styles.overlay}></div>
      <div className={styles.dialog}>
        <p>This website is optimized for desktop. You can find all the content there.</p>
        <button className={styles.mobileAlertButton} onClick={() => setIsMobile(false)}>Close</button>
      </div>
    </div>
  );
};

export default MobileAlert;
