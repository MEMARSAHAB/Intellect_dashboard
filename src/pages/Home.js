import '../styles/home.css';
import Card from '../components/Card';
import { ReactComponent as Intro } from '../assets/intro.svg';

export default function Home() {
  return (
    <div className='home_page_cont'>
      <div className='banner'>
        <div className='text_disc'>
          <h2>Welcome</h2>
          <h1>Deepak Meena</h1>
          <button>RJ, INDIA </button>
        </div>
        <div className='intro_image'>
          <Intro />
        </div>
      </div>

      <div className='states_cont'>
        <Card>
          <img
            src='https://github-readme-stats.vercel.app/api/top-langs/?username=memarsahab'
            alt='Most used Languages svg image'
            className='lng_card'
          />
        </Card>
        <Card>
          <img
            src='https://github-readme-stats.vercel.app/api?username=memarsahab&count_private=true&show_icons=true&include_all_commits=true'
            alt='Profile State svg image'
            className='state_card'
          />
        </Card>
      </div>
    </div>
  );
}
