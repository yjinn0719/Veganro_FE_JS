// 현재 위치 받아오는 함수
export const getCurrentPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenterMove({
          ...centerMove,
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          isLoading: false,
        });
      },
      (err) => {
        setCenterMove({
          ...centerMove,
          errMsg: err.message,
          isLoading: false,
        });
      },
    );
  } else {
    setCenterMove({
      ...centerMove,
      errMsg: '현재 위치를 불러올 수 없습니다.',
      isLoading: false,
    });
  }
};
