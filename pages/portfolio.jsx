import Layout from '../components/Layout'

const Portfolio = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">Portfolio</h1>
        <p className="mt-4 text-lg">Check out some of our latest projects:</p>
        <ul className="mt-8 text-xl">
          <li className="mb-4"><a href="https://example-project1.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Example Project 1</a></li>
          <li className="mb-4"><a href="https://example-project2.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Example Project 2</a></li>
          <li className="mb-4"><a href="https://example-project3.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Example Project 3</a></li>
          <li className="mb-4"><a href="https://example-project4.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Example Project 4</a></li>
        </ul>
      </div>
    </Layout>
  )
}

export default Portfolio
