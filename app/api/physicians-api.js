import axios from 'axios'

export function getPhysiciansList() {
  return axios.get('http://localhost:3004/physicians')
    .then(response => response.data)
}

export function deletePhysician(physicianId) {
  return axios.delete('http://localhost:3004/physicians/' + physicianId)
}

export function updatePhysician(physicianId, toggleValue) {
  return axios.patch('http://localhost:3004/physicians/' + physicianId, { showSpecialties: toggleValue })
}
