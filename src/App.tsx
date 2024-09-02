import './App.css';
import Header from './components/Header/Header.tsx';
import Hero from './components/Hero/Hero.tsx';
import News from './components/News/News.tsx';
import Calendar from './components/Calendar/Calendar.tsx';
import Results from './components/Results/Results.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<News />
			<Calendar />
			<Results />
			<Footer />
		</>
	);
}

export default App;
