import marker from "../images/marker.png";

export default function Entry(props) {
  return (
    <div className="container">
    <article className="journal-entry">
      <div className="main-img-container">
        <img
          className="main-img"
          src={props.entry.img.src}
          alt={props.entry.img.alt}
        />
      </div>
      <div className="info-container">
        <img className = "marker-icon " src={marker} alt="marker-icon" />

        <span className="country">{props.entry.country}</span>

        <a href={props.entry.googleMapsLink}>
          View on Google Map
        </a>

        <h2 className="entry-title">{props.entry.title}</h2>
        <p className="trip-date">{props.entry.date}</p>
        <p className="entry-text">{props.entry.text}</p>
      </div>
    </article>
    </div>
  );
}
