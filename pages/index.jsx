import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">HighDevs Pvt. Ltd.</h1>
        <p className="mt-4 text-lg">We offer a wide range of services:</p>
        <ul className="mt-8 text-xl">
          <li className="mb-4"><i className="fas fa-mobile-alt mr-2"></i>Mobile Application Development</li>
          <li className="mb-4"><i className="fas fa-globe mr-2"></i>Web Application Development</li>
          <li className="mb-4"><i className="fas fa-robot mr-2"></i>Machine Learning and AI</li>
          <li className="mb-4"><i className="fas fa-chart-bar mr-2"></i>Data Science</li>
          <li className="mb-4"><i className="fas fa-code mr-2"></i>Programming Projects in Various Languages</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Home
