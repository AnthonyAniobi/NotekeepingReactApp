import useSound from 'use-sound';

import fanfareSfx from '../../sounds/fanfare.mp3';

const FanfareButton = () => {
    const [play, { stop }] = useSound(fanfareSfx);

    return (
        <button onMouseEnter={() => play()} onMouseLeave={() => stop()}>
            <span role="img" aria-label="trumpet">
                🎺
            </span>
        </button>
    );
}