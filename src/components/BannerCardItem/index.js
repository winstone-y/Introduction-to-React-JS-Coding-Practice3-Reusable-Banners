// Write your code here.
import './index.css'

const BannerCard = props => {
  const {BannerDetails} = props
  const {headerText, description, className} = BannerDetails
  console.log(className)
  return (
    <div className="list-container">
      <li className={className}>
        <div className="text-container">
          <h1>{headerText}</h1>
          <p>{description}</p>
          <button type="button">Show More</button>
        </div>
      </li>
    </div>
  )
}

export default BannerCard
