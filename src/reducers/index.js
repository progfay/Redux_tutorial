import { handleActions } from 'redux-actions'

const initState = {
  count: 0
}

export default handleActions({
  'COUNT_UP': (state) => ({ count: state.count + 1 }),
  'COUNT_DOWN': (state) => ({ count: state.count - 1 })
}, initState)
