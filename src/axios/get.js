import { ajax } from './index'
/**
 * @retrun array[]
 */
export const getfulldata = (param) => {
  ajax.post('/v2/getfulldata', param).then(res => res).catch(err => err)
}
