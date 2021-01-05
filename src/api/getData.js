/*
* 统一管理从服务端获取的数据，方便后期维护
* 通过export  暴露封装的获取数据方法
* */
import netWork from '@/api/netWork'

// 获取Banner
export const getBanner = () => netWork.get('banner?type=2')
// 获取推荐歌单
export const getPersonalized = () => netWork.get('personalized?limit=6')
// 获取最新专辑
export const getAlbum = () => netWork.get('album/newest')
// 获取推荐新音乐
export const getNewSongs = () => netWork.get('/personalized/newsong')
