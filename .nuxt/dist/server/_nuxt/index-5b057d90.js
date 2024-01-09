import { ref, computed, mergeProps, useSSRContext, watch } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "h3";
import "destr";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
const Counter_vue_vue_type_style_index_0_scoped_9dc89490_lang = "";
const _seconds = 1e3;
const _sfc_main$2 = {
  __name: "Counter",
  __ssrInlineRender: true,
  props: ["year", "month", "date", "hour", "minute", "second", "millisecond"],
  setup(__props) {
    const props = __props;
    const displayDays = ref(0);
    const displayHours = ref(0);
    const displayMinutes = ref(0);
    const displaySeconds = ref(0);
    const loaded = ref(false);
    ref(false);
    const _minutes = computed(() => _seconds * 60);
    const _hours = computed(() => _minutes.value * 60);
    computed(() => _hours.value * 24);
    computed(() => {
      return new Date(
        props.year,
        props.month - 1,
        props.date,
        props.hour,
        props.minute,
        props.second,
        props.millisecond
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "countdown__text-wrap bordered" }, _attrs))} data-v-9dc89490><p class="hard-coded" data-v-9dc89490>${ssrInterpolate(__props.month)}-${ssrInterpolate(__props.date)}-${ssrInterpolate(__props.year)}</p>`);
      if (loaded.value) {
        _push(`<div class="row" data-v-9dc89490><div class="date" data-v-9dc89490><span class="days" data-v-9dc89490>${ssrInterpolate(displayDays.value)}</span><div class="label countdown__text-info" data-v-9dc89490>D</div></div><span class="leading-snug" data-v-9dc89490>:</span><div class="date" data-v-9dc89490><span class="hours" data-v-9dc89490>${ssrInterpolate(displayHours.value)}</span><div class="label countdown__text-info" data-v-9dc89490>H</div></div><span class="leading-snug" data-v-9dc89490>:</span><div class="date" data-v-9dc89490><span class="minutes" data-v-9dc89490>${ssrInterpolate(displayMinutes.value)}</span><div class="label countdown__text-info" data-v-9dc89490>M</div></div><span class="leading-snug" data-v-9dc89490>:</span><div class="date" data-v-9dc89490><span class="seconds" data-v-9dc89490>${ssrInterpolate(displaySeconds.value)}</span><div class="label countdown__text-info" data-v-9dc89490>S</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Counter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9dc89490"]]);
const CountDown_vue_vue_type_style_index_0_scoped_7b415a44_lang = "";
const _sfc_main$1 = {
  __name: "CountDown",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedDateTime = ref("");
    const formattedSelectedDateTime = ref("");
    const selectedYear = ref();
    const selectedMonth = ref();
    const selectedDate = ref();
    const selectedHour = ref();
    const selectedMinute = ref();
    const selectedSecond = ref();
    const selectedMillisecond = ref();
    watch(selectedDateTime, () => {
      const dateTime = new Date(selectedDateTime.value);
      selectedYear.value = dateTime.getFullYear();
      selectedMonth.value = dateTime.getMonth() + 1;
      selectedDate.value = dateTime.getDate();
      selectedHour.value = dateTime.getHours();
      selectedMinute.value = dateTime.getMinutes();
      selectedSecond.value = dateTime.getSeconds();
      selectedMillisecond.value = dateTime.getMilliseconds();
      formattedSelectedDateTime.value = dateTime.toLocaleString();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Counter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7b415a44><h1 data-v-7b415a44>Dynamic Counter</h1><div class="counter" data-v-7b415a44><h2 data-v-7b415a44>Select a Date and Time</h2><input type="datetime-local" id="selectedDateTime"${ssrRenderAttr("value", selectedDateTime.value)} data-v-7b415a44>`);
      if (selectedDateTime.value) {
        _push(`<p class="input" data-v-7b415a44>You Selected : ${ssrInterpolate(formattedSelectedDateTime.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedDateTime.value) {
        _push(ssrRenderComponent(_component_Counter, {
          year: selectedYear.value,
          month: selectedMonth.value,
          date: selectedDate.value,
          hour: selectedHour.value,
          minute: selectedMinute.value,
          second: selectedSecond.value,
          millisecond: selectedMillisecond.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CountDown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7b415a44"]]);
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CountDown = __nuxt_component_0;
  const _component_Counter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "counter__home" }, _attrs))}><div class="grid">`);
  _push(ssrRenderComponent(_component_CountDown, null, null, _parent));
  _push(ssrRenderComponent(_component_CountDown, null, null, _parent));
  _push(ssrRenderComponent(_component_CountDown, null, null, _parent));
  _push(`</div><div class="grid"><div><h2>Hard Coded Dates</h2><div class="counter">`);
  _push(ssrRenderComponent(_component_Counter, {
    year: 2024,
    month: 2,
    date: 22,
    hour: 23,
    minute: 23,
    second: 22,
    millisecond: 22
  }, null, _parent));
  _push(`</div></div><div><h2>Hard Coded Dates</h2><div class="counter">`);
  _push(ssrRenderComponent(_component_Counter, {
    year: 2024,
    month: 2,
    date: 21,
    hour: 23,
    minute: 23,
    second: 22,
    millisecond: 22
  }, null, _parent));
  _push(`</div></div><div><h2>Hard Coded Dates</h2><div class="counter">`);
  _push(ssrRenderComponent(_component_Counter, {
    year: 2024,
    month: 2,
    date: 10,
    hour: 23,
    minute: 23,
    second: 22,
    millisecond: 22
  }, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-5b057d90.js.map
