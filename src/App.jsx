import Header from './components/Header/Header';
import HeaderClass from './components/HeaderClass/HeaderClass';
import Home from './components/Home/Home';
import HomeClass from './components/HomeClass/HomeClass';
import PersonClass from './components/PersonClass/PersonClass';
import PersonFunc from './components/PersonFunc/PersonFunc';

const bioItems = [
  `Nací en un Sueca, una pequeña ciudad de Valencia rodeada de arrozales 🌾🌾 y naranjos 🍊🍊, en una familia dedicada al cultivo 🚜 del arroz 🌾 desde hace siglos ⌛.`,
  `Mis grandes pasiones son la informática 🖥️ y la educación 👨‍🏫.`,
  `Comencé con los ordenadores a finales de los años 80 (con un MSX... ¡qué tiempos!), y me he dedicado a aprender por mi cuenta varios lenguajes, aplicaciones y gestores de contenido: BASIC, ObjectPascal, C, HTML, Python, PHP, MySQL, SQLite, JavaScript, CSS; Delphi, Lazarus, C++Builder, HotMetal, RPGMaker, GIMP, Ren’Py, WordPress, CPanel, moodle, CSS, Nodejs, Express, MongoDB, Sequelize, XML, Mongoose, React...`,
  `He realizado aplicaciones web de aprendizaje y he colaborado con la gestión informática de varios proyectos académicos.`,
  `Soy Doctor en Ciencias Bíblicas 📖, y he sido docente universitario 🎓 durante 16 años en Barcelona y Roma.`
];

function App() {
  return (
    <div className="container">
      <h1>React Day 1 - Exercises</h1>

      <div className='my-5'>
        <h3>Exercise 2. Personal Page</h3>
        <p className='text-muted ps-5'>
          🗹 Extra: Responsive<br />
          🗹 Extra: Use classes<br />
        </p>
        <div className='border border-dark rounded my-2'>
          <Header name="Xavi (func)" nick="xavimat" img="logo" />
          <Home img="joprof" bioItems={bioItems} />
        </div>
        <div className='border border-dark rounded my-2'>
          <HeaderClass name="Xavi (class)" nick="xavimat" img="logo" />
          <HomeClass img="joprof" bioItems={bioItems} />
        </div>
      </div>

      <h3>Exercise 1.2. Component "Person"</h3>
      <h5>Functional Component</h5>
      <div className="mb-3">
        <PersonFunc name="Name1" surname="Surname1" age="40" />
        <PersonFunc name="Name2" surname="Surname2" age="50" />
        <PersonFunc name="Name3" surname="Surname3" age="60" />
      </div>
      <div className="mb-3">
        <h5>Class Component</h5>
        <PersonClass name="Name4" surname="Surname4" age="70" />
        <PersonClass name="Name5" surname="Surname5" age="80" />
        <PersonClass name="Name6" surname="Surname6" age="90" />
      </div>

    </div>
  );
}

export default App;
