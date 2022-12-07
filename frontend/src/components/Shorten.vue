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
    let url = ""
    this.App.getlinks().then(() => {
        this.App.links.forEach((link)=>{
            // console.log(link)
            if(this.$route.params.custom == link.customlinks) {
                url = link.rawlinks
            }
        })
        console.log(url)
        window.location.href = url
    })
    this.App.getlinks();
  },
};
</script>
