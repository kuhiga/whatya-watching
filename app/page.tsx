'use client';
import { Board } from '@/src/feature';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Board />
    </main>
  );
}
