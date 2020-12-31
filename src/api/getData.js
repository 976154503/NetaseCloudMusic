/*
* 统一管理从服务端获取的数据，方便后期维护
* 通过export  暴露封装的获取数据方法
* */
import netWork from '@/api/netWork'

// 获取Banner
export const getBanner = () => netWork.get('http://127.0.0.1:3000/banner?type=2')
