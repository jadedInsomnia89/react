import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./assets/data";

function App() {
  const entries = data.map((entry) => {
    return (
      <Entry
      
        key={entry.id}
        img={{ src: entry.img.src, alt: entry.img.alt }}
        title={entry.title}
        location={entry.country}
        googleMapsLink={entry.googleMapsLink}
        datesTraveled={entry.dates}
        description={entry.text}
      />
    );
  });
  return (
    <>
      <Header />
      <main className="container">{entries}</main>
    </>
  );
}

export default App;
