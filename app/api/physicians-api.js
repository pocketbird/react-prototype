import axios from 'axios'

// LOCAL
// export function getPhysiciansList() {
//   return axios.get('http://localhost:3004/physicians')
//     .then(response => response.data)
// }

// export function deletePhysician(physicianId) {
//   return axios.delete('http://localhost:3004/physicians/' + physicianId)
// }

// export function updatePhysician(physicianId, toggleValue) {
//   return axios.patch('http://localhost:3004/physicians/' + physicianId, { showSpecialties: toggleValue })
// }

// EXTERNAL (FIREBASE)
const CREDENTIAL = 'ZnFbXGbC7FYlJmCQKqvhFjXthB5Y0cYwcV506tnz'
const DATABASEURL = 'https://fadmaa-97f61.firebaseio.com'

export function getPhysiciansList() {
  return axios.get(DATABASEURL + '/physicians.json?auth=' + CREDENTIAL)
    .then(response => response.data)
}

export function deletePhysician(physicianId) {
  return axios.delete('http://localhost:3004/physicians/' + physicianId)
}

export function updatePhysician(physicianId, toggleValue) {
  // return axios.put(DATABASEURL + '/physicians/' + physicianId + '.json?auth=' + CREDENTIAL + '?showSpecialties=' + toggleValue)
  // return axios.patch('http://localhost:3004/physicians/' + physicianId, { showSpecialties: toggleValue })
  return axios({
    method: 'patch',
    url: DATABASEURL + '/physicians/' + physicianId + '/.json?auth=' + CREDENTIAL,
    data: {
      showSpecialties: toggleValue
    }
  });
}
