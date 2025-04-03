export default function Avatar() {
    const avatar = 'https://images.red.com/stories/2022.08-squid-game/01.jpg';
    const description = 'Gregorio Y. Zara';
    return (
      <img
        className="avatar"
        src={avatar}
        alt={description}
        width="500"
        height="600"
      />
    );
  }
  