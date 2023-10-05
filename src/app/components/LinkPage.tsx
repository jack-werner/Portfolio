import { LinkCard } from "./LinkCard";

export const LinkPage = () => {
  return (
    <div className="bg-black flex flex-row flex-wrap items-center justify-center h-screen w-screen p-8">
      <div className="flex flex-row flex-shrink-0 flex-wrap items-center justify-center w-full">
        <LinkCard text="Software" link="https://github.com/jack-werner" />
        <LinkCard text="Blog" link="https://jackwerner.substack.com" />
        <LinkCard
          text="Music"
          link="https://soundcloud.com/jack-wolfgang-music"
        />
        <LinkCard
          text="Art"
          link="https://www.flickr.com/photos/198848904@N05"
        />
      </div>
    </div>
  );
};
