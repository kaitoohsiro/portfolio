var Vue = new Vue({
    el:'#app',
    data:{
        name01: {
            name01: "red",
            hp01: 500,
            mp01: 200,
            lv01: 10
          },
          name02: {
            name02: "green",
            hp02: 450,
            mp02: 250,
            lv02: 10
          },
          name03: {
            name03: "pink",
            hp03: 350,
            mp03: 500,
            lv03: 10
          },
          name04: {
            name04: "black",
            hp04: 400,
            mp04: 400,
            lv04: 10
          },
          boss: {
            hp: 1000
          },
          show1:true,
          show2:false
    },
    methods:{
      fight:function(list) {
        if(this.boss.hp > 0) {
          if (list === 'list1') {
            var sucore = Math.floor(Math.random() * Math.floor(100));
            this.boss.hp = this.boss.hp - sucore;
          }
        } else if(this.boss.hp) {
          this.boss.hp = 0;
          this.show1=false;
          this.show2=true;
        }
      }
    }
})