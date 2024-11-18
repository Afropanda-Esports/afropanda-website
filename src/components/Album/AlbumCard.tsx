interface AlbumCardP {
  id: number;
  src: string;
  alt: string;
  className: string;
}

interface AlbumCardProps {
  image: AlbumCardP;
}

export default function AlbumCard({ image }: AlbumCardProps) {
  return (
    <div
      className={`${image.className} group relative overflow-hidden rounded-xl`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className='class="w-full h-auto object-cover rounded-xl"'
      />
    </div>
  );
}
