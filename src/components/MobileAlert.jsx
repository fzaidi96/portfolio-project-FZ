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
        <h4>FYI: this portfolio has been optimized for desktop.</h4>
        <p style={{ fontSize: '8px' }}>Please see the web version for more content and full functionality :)</p>
        <div className={styles.closeButton} onClick={() => setIsMobile(false)}>X</div>
      </div>
    </div>
  );
};

export default MobileAlert;
