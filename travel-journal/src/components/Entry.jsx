import mapMarker from "../assets/marker.png";
export default function (props) {
  return (
    <main>
      <article className="journal-entry">
        <div className="main-image-container">
          <img className="main-image" src={props.img.src} alt={props.img.alt} />
        </div>
        <div className="info-container">
          <img className="marker" src={mapMarker} alt="Map marker icon" />
          <span className="country">{props.location}</span>
          <a href={props.googleMapsLink} target="_blank">
            View on Google Maps
          </a>
          <h2 className="entry-title">{props.title}</h2>
          <p className="trip-dates">{props.datesTraveled}</p>
          <p className="entry-text">{props.description}</p>
        </div>
      </article>
    </main>
  );
}
