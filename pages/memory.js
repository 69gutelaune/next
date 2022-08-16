import MemoryGame from "@/components/memory/MemoryLogic.js";
import SingleCard from "@/components/memory/SingleCard";
import styles from "@/styles/components/Memory.module.scss";
import btnStyles from "@/styles/components/buttons.module.scss";

export default function MemoryHtml() {
  const {
    cards,
    selectCard,
    winningScreen,
    playAgain,
    attempts,
    neededTime,
    resetBtn,
  } = MemoryGame();

  // * makes the winning screen visible or invisible
  const winningClass = () => {
    if (winningScreen) {
      return styles.visibleWinningScreen;
    } else {
      return styles.invisibleWinningScreen;
    }
  };
  // * in case of winnig: show Winning Screen
  return (
    <div id="memory" className={styles.mainContainer}>
      <div className={styles.textAndGameContainer}>
        <audio id="cardFlipSound" src="/sounds/card_flip.mp3"></audio>
        <audio id="cardFlipSound2" src="/sounds/card_flip.mp3"></audio>
        <div className={styles.textContainer}>
          <div className={styles.headlineContainer}>
            <h1 className={styles.memoryHeadline}>Magic Memory</h1>
          </div>
          <div className={styles.statsContainer}>
            <h3 className={styles.stats}>Zeit: {neededTime}</h3>
            <button
              onClick={resetBtn}
              className={`${styles.resetBtn} ${btnStyles.transparentBtn}`}
            >
              Neustart
            </button>
            <h3 className={styles.stats}>Versuche: {attempts}</h3>
          </div>
        </div>
        <div className={styles.memoryContainer}>
          <div className={`${winningClass()} ${styles.winningScreen}`}>
            <h1>Gut Gemacht!</h1>
            <button onClick={playAgain}>Gleich Nochmal</button>
          </div>
          <div className={styles.allCards}>
            {cards.map(({ url, closed, id, guessed }) => {
              return (
                <SingleCard
                  key={id}
                  selectCard={selectCard}
                  url={url}
                  closed={closed}
                  id={id}
                  guessed={guessed}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
