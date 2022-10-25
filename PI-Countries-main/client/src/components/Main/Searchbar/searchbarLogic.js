import { filterByRegion, filterByActivity, sortByAz, sortByPopulation, resetModified} from "../../../Redux/actions";

export function onRegionChange(evento, dispatch) {
  dispatch(filterByRegion(evento.target.value))
  evento.target.disabled = true
}

export function onActivityChange(evento, dispatch) {
  dispatch(filterByActivity(evento.target.value))
  evento.target.disabled = true
}

export function onAzChange(evento, dispatch) {
  dispatch(sortByAz(evento.target.value))
  evento.target.disabled = true
}

export function onPopulationChange(evento, dispatch) {
  dispatch(sortByPopulation(evento.target.value))
  evento.target.disabled = true
}

export function onInputChange(str, seInput) {
  seInput(str)
}

export function resetSelect(arr, dispatch) {
  dispatch(resetModified())
  arr.forEach((ref) => {
    let element = ref.current;
    if(element.id === 'search') {
      element.value = ''
    }
    else {
      element.disabled = false
      element.value = 'default'
    }
  })
}