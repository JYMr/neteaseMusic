/**
 * @name:
 * @description:
 * @author: Cris <1023244978@qq.com>
 * @time: 2020/3/9
 */
import { request } from '@/plugins/axios'

// search
export function search (params: any) {
  return request.get(`/search`, { params })
}
