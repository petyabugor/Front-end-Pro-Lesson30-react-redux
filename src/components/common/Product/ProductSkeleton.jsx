import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={270}
    height={350}
    viewBox="0 0 270 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="270" height="350" />
  </ContentLoader>
)

export default ProductSkeleton