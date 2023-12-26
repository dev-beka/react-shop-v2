import React from 'react';
import ContentLoader from "react-content-loader"

const Skeleton = () => {
  return (
    <ContentLoader className="skeleton"
      speed={2}
      width={300}
      height={274}
      viewBox="0 0 300 274"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="9" ry="9" width="300" height="274" />
    </ContentLoader>
  );
};

export default Skeleton;