import { ajax } from './index'
/**
 * interface CpInfoParams {
 *    id : Number;
 *    password : string;
 *    name : string;
 * }
 *   @param params CpInfoParams
 *   @return Promise<unfinded>
*/
// 获取全职数据
export const getfulldata = () =>
  ajax.get('/getfulldata').then(res => res)
/**
 * interface registerparam{
 *    username : string;
 *    password: string;
 * }
 *   @param params param
 */
// 注册
export const register = (param) => ajax.post('/v1/register', param).then(res => res)
// 注册1
export const register1 = (param) => ajax.post('/v2/register1', param).then(res => res)
/**
 * interface loginparam{
 *   username : string;
 *   password : string;
 * }
 * @param {*} param
 */
// 登录
export const login = (param) => ajax.post('/v1/login', param).then(res => res)

// 职位排序

export const getfullsort = (param) => ajax.post('/v2/fullsort', param).then(res => res)

// 职位详情

export const getdetail = (param) => ajax.post('/v2/positiondetail', param).then(res => res)
