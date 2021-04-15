import { defineComponent, Ref, ref } from "vue";


const App = defineComponent({
  render() {
    return (
      <div id='app'>
        <router-view />
      </div>
    );
  },
});

export default App;
