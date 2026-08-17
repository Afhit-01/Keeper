import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import notebook from "./notebook";

const App = () => {
  return (
    <>
      <Header />
      {notebook.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      ;
      <Footer />
    </>
  );
};

export default App;
