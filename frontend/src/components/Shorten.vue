<template>
<div class="flex w-screen h-screen justify-center items-center">
    <p>Redirecting you to {{App.links.rawlinks}}.....</p>
</div>
</template>

<script>
import { useApp } from "../stores/index";

export default {
  setup() {
    const App = useApp();
    return {
      App,
    };
  },
  created() {
    this.App.check(this.$route.params.custom);
  },
//   created() {
//     let url = ""
//     this.App.check();
//     this.App.getLinks().then(() => {
//         this.App.links.forEach((link)=>{
//             // console.log(link)
//             if(this.$route.params.custom == link.customlinks) {
//                 url = link.rawlinks
//             }
//         })
//         console.log(url)
//         window.location.href = url
//     })
//   },
};
</script>
