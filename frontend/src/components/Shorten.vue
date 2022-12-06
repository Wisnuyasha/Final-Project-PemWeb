<template>

</template>

<script>
import { collectionGroup } from '@firebase/firestore';
import {useApp} from '../stores/index';

export default {
  setup() {
    const App = useApp();
    return {
      App,
    }
  },
  created() {
    // let url = ""
    // this.App.getlinks().then(() => {

    //     this.App.links.forEach((link)=>{
    //         // console.log(link)
    //         if(this.$route.params.custom == link.customlinks) {
    //             url = link.rawlinks
    //         }
    //     })
    //     console.log(url)
    //     window.location.href = url
    // })
  }
}
</script>
