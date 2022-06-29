import './pages.css';
import pageNotFound from '../assets/page-not-found.png'
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {


  return (
    <section className="container-main">
      <Header />
      <div className="container-content not-found-page">
      <img className='not-found-img' src={pageNotFound} alt="" />
      </div>
      <Footer />
    </section>
  );
};

export default NotFoundPage;
