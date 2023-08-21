export default function ImageShow({image}) {
  return (
    <div>
      <a target="_blank" href={image.links.html}><img src={image.urls.small} alt={image.alt_description} /></a>
    </div>
  );
}