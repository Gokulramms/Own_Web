import SongCard from "./SongCard";
import { songs, SongProps } from "./songDetails";
import "../animations/animate.css";

const SongCarousel = () => {
  return (
    <div className="animate absolute bottom-5 flex w-full overflow-hidden">
      <div className="flex animate-marquee gap-4">
        {songs.map((song: SongProps) => (
          <SongCard
            key={song.title} // Use a unique identifier instead of index
            title={song.title}
            artist={song.artist}
            image={song.image}
            link={song.link}
          />
        ))}
        {songs.map((song: SongProps) => (
          <SongCard
            key={song.title + "-duplicate"} // Ensure unique keys for duplicate elements
            title={song.title}
            artist={song.artist}
            image={song.image}
            link={song.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SongCarousel;
