import styles from '../assets/styles/LeftVector.module.css';

const LeftVector = () => {
  return (
    <svg
      className={styles.leftVector}
      viewBox='0 0 509 1080'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        opacity='0.15'
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M333.796 320.4C112.222 277.6 388.876 857.7 129.536 1080H0V0H467.638C551.602 121.4 508.095 354.1 333.796 320.4Z'
        fill='#006AD3'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M136.35 774.101C57.048 758.819 140.209 967.49 62 1080H1V441C1 441.111 1 441.221 1.09938 441.332C24.6515 561.705 89.2458 613.973 156.324 637.671C218.931 659.819 212.969 788.94 136.35 774.101Z'
        fill='#006AD3'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.0897061 484.3C0.0897061 484.9 0.0897061 485.4 0 486V0H114.824C140.121 131.7 7.71472 276.1 0.0897061 484.3Z'
        fill='#FF6948'
      />
    </svg>
  );
};

export default LeftVector;
