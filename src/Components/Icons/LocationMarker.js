import React from 'react'

const LocationMarker = ({width="100",height="101"}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M84 0.216797H16C7.16344 0.216797 0 7.38024 0 16.2168V84.2168C0 93.0534 7.16345 100.217 16 100.217H84C92.8366 100.217 100 93.0534 100 84.2168V16.2168C100 7.38024 92.8366 0.216797 84 0.216797Z" fill="#C9E3F7"></path><path fillRule="evenodd" clipRule="evenodd" d="M50 85.2169L71.2133 64.7143C75.4089 60.6592 78.266 55.4928 79.4236 49.8684C80.5811 44.2439 79.987 38.414 77.7163 33.1159C75.4457 27.8178 71.6005 23.2894 66.6671 20.1034C61.7336 16.9174 55.9334 15.2169 50 15.2169C44.0666 15.2169 38.2664 16.9174 33.3329 20.1034C28.3995 23.2894 24.5543 27.8178 22.2837 33.1159C20.013 38.414 19.4189 44.2439 20.5764 49.8684C21.734 55.4928 24.5911 60.6592 28.7867 64.7143L50 85.2169ZM50 52.4044C55.098 52.4044 59.2308 48.4869 59.2308 43.6544C59.2308 38.8219 55.098 34.9044 50 34.9044C44.902 34.9044 40.7692 38.8219 40.7692 43.6544C40.7692 48.4869 44.902 52.4044 50 52.4044Z" fill="white"></path><path d="M37.2721 30.2015C44.3015 23.172 55.6985 23.172 62.7279 30.2015C69.7574 37.2309 69.7574 48.6279 62.7279 55.6573C55.6985 62.6867 44.3015 62.6867 37.2721 55.6573C30.2426 48.6279 30.2426 37.2309 37.2721 30.2015Z" fill="#0A0777"></path></svg>
  )
}

export default LocationMarker