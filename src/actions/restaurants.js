// Geocode.enableDebug(true)

// const url = ``

// export const fetchRestaurants = (address) => {
//    const coords = convertToGeo(address)
//    console.log(coords)

//    // return function (dispatch) {
//    //    dispatch({type: "LOADING"})
//    //    return fetch(url, {
//    //       method: 'GET',
//    //       headers: {
//    //          'Content-Type': 'application/json'
//    //       },
//    //    })
//    //    .then(resp => resp.json())
//    //    .then(json => dispatch({type: "GET_RESTAURANTS", restaurants: json}))
//    // }
// }

// const convertToGeo = (address) => {
//    return dispatch => {
//       dispatch({type: "LOADING"})
//       return Geocode.fromAddress(address).then(
//          response => {
//             dispatch({type: "LOADING", response})
//             const { lat, lon } = response.results[0].geometry.location;
//             console.log(response, lat, lon);
//             return [lat, lon]
//          },
//          error => {
//             console.error(error);
//          }
//       )
//    }
// }
