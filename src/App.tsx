import { defineComponent, Ref, ref } from "vue";
import { setOsNotify } from "./util/renderMethods";


const App = defineComponent({
  setup(prop, content) {
    let message: Ref<string> = ref('发送')
    return {
      message
    }
  },
  render() {
    return (
      <div>
        <div onClick={() => setOsNotify({
          title: '你好',
          body: '欢迎使用'
        })} >{this.message}</div>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view />
      </div>
    );
  },
});

export default App;
