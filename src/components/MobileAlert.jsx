import { useState, useEffect } from 'react';
import styles from "@/app/page.module.css";

const MobileAlert = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

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

  useEffect(() => {
    if (isMobile && !sessionStorage.getItem('alertShown')) {
      setShowDialog(true);
      sessionStorage.setItem('alertShown', 'true');
    }
  }, [isMobile]);

  if (!isMobile || !showDialog) {
    return null;
  }

  return (
    <div className={styles.mobileAlert}>
      <div className={styles.overlay}></div>
      <div className={styles.dialog}>
        <p style={{ fontSize: '12px' }}>Please see the web version for more content and full functionality.</p>
        <div className={styles.closeButton} onClick={() => setShowDialog(false)}>x</div>
      </div>
    </div>
  );
};

export default MobileAlert;
