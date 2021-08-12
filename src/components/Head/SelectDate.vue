<template>
  <div class="selectDate">
    <button
      v-for="(item, index) in titles"
      :key="index"
      class="button"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      {{ item }}
      <span></span>
    </button>
    <!-- <div
      v-for="(item, index) in titles"
      :key="index"
      class="select_data_item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div> -->
  </div>
</template>

<script>
import { evenBus } from "../../main";

export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // console.log(index);

      //事件总线发送index
      evenBus.$emit("sendIndex", index);
    },
  },
};
</script>

<style lang="less" scoped>
// .active {
//   // background-color: #fff;
//   background-color: #1a4899;
//   border-bottom: 2px solid #fff;
//   span {
//     color: #fff;
//   }
// }

// .selectDate {
//   flex: 2;
//   display: flex;
//   .select_data_item {
//     flex: 1;
//     margin: 5px 10px;
//     cursor: pointer;
//     border-radius: 25%;
//     text-align: center;
//     line-height: 42px;
//     color: #2da8d8;
//   }
// }
.selectDate {
  flex: 2;
  display: flex;
  .button {
    flex: 1;
  }
}

.button {
  border: none;
  display: block;
  position: relative;
  padding: 0.5em 2.2em;
  margin: 10px;
  font-size: normal;
  background: transparent;
  cursor: pointer;
  color: #000;
  overflow: hidden;
}

.button span {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: -1;
  border-top: 3px solid #000;
  border-right: 7px solid #000;
  border-bottom: 3px solid #000;
  border-left: 7px solid #000;
}

.button span::before {
  content: "";
  position: absolute;
  width: 8%;
  height: 500%;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  transition-duration: 1s;
}

.button:hover span::before,
.button:focus span::before {
  transform: translate(-50%, -50%) rotate(-60deg);
  // width: 100%;
  background: #fff;
}

.active {
  color: #fff;
  background: #000;
  border: 2px solid #fff;
  border-radius: 5px;
}
</style>