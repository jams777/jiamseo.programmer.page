import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FeaturedProductStyles } from "./FeaturesStyles"

const FeaturedProduct = ({ feature }) => {
  const { gatsbyPath, headerImage, title, introduction } = feature
  const image = getImage(headerImage)

  return (
    <FeaturedProductStyles>
      <Link to={gatsbyPath}>
        <GatsbyImage
          className="features__item--img"
          image={image}
          alt="직업 이미지"
        />
        {title && introduction && (
          <div className="features__item--content">
            {title && <h4>{title}</h4>}
            {introduction && <p>{introduction}</p>}
            <Button text="자세히 보기" as="span" arrow={true} />
          </div>
        )}
      </Link>
    </FeaturedProductStyles>
  )
}

export default FeaturedProduct
