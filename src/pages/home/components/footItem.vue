<template>
  <li>
    <img :src="'//fuss10.elemecdn.com/'+item.image_hash.slice(0,1)+'/'+item.image_hash.slice(1,3)+'/'+item.image_hash.slice(3,item.image_hash.length)+'.jpeg'" alt="">
    <p>{{item.name}}</p>
  </li>
</template>

<script>
export default {
  name: 'banner',
  props: ['item']
}
</script>

<style scoped lang="less">
li{
  width: 20%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: center;
  float: left;
  margin-bottom: 0.4rem;
  img{
    width: 55%;
    margin-bottom: 0.5rem;
  }
  p{
    font-size: 0.6rem;
    color: #666;
  }
}
</style>
