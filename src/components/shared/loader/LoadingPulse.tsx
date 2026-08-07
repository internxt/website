import styles from './LoadingPulse.module.scss';

export default function LoadingPulse(): JSX.Element {
  return (
    <div className={styles['loader-container']}>
      <div className={styles.loader06}></div>
    </div>
  );
}
