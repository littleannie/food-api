import React from 'react';
import Skeleton from 'react-loading-skeleton';


const CardSkeleton = ({cards}) => {

  return (
    Array(cards).fill(0).map((_, i) =>
    <div className="card-skeleton" key={i}>
      <div className="top">
        <Skeleton height={180}/>
      </div>
      <div className="bottom">
        <Skeleton className="skeleton-title"/>
        <Skeleton className="skeleton-text"/>
      </div>
    </div>
    )
  )
}

export default CardSkeleton;
