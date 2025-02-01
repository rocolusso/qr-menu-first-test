// import React from 'react';
//
// const useMySwipe = () => {
//   const [touchStart, setTouchStart] = React.useState(null);
//   const [swipe, setSwipe] = React.useState(null);
//
//   const onTouchMove = React.useCallback((e) => {
//
//     if (e.touches[0].screenX < touchStart) {
//       setSwipe('left');
//     }
//
//     if (e.touches[0].screenX > touchStart) {
//       setSwipe('right');
//     }
//   }, [touchStart, setSwipe]);
//
//   const onTouchStart = (e) => {
//     setTouchStart(e.touches[0].screenX);
//   };
//   return {
//     touchStart, setTouchStart, swipe, setSwipe, onTouchMove, onTouchStart,
//   };
// };
//
// export default useMySwipe;
