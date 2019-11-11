(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-5fa69296'], {
'8bce': function (e, t, i) {
i.r(t); const n = function () {
 const e = this; const t = e.$createElement; const i = e._self._c || t; return i('div', {staticClass: 'recommend'}, [i('ScrollView', {ref: 'scrollView', attrs: {dataSource: e.cds}}, [i('div', {staticClass: 'content'}, [e.slides.length > 0 ? i('Slide', {attrs: {length: e.slides.length}}, [i('ul', {staticClass: 'slide-banner-wrapper'}, e._l(e.slides, (function (t) { return i('li', {key: t.id, staticClass: 'slide-item'}, [i('img', {attrs: {src: t.picUrl, alt: 'image'}, on: {load: e.onload}})]); })), 0)]) : e._e(), i('h1', {staticClass: 'title'}, [e._v('热门歌单推荐')]), i('ul', {staticClass: 'songList'}, e._l(e.cds, (function (t) {
 return i('li', {key: t.id, staticClass: 'item', on: {click(i) { return e.gotoDetail(t.id); }}}, [i('img', {
directives: [{
name: 'lazy', rawName: 'v-lazy', value: t.image, expression: 'item.image',
}],
attrs: {alt: 'image'},
}), i('div', {staticClass: 'content'}, [i('p', {staticClass: 'name'}, [e._v(e._s(t.author.name))]), i('p', {staticClass: 'description'}, [e._v(e._s(t.desc))])])]);
})), 0)], 1)]), e.loading ? i('Loading') : e._e(), i('transition', {attrs: {name: 'detail'}}, [i('router-view')], 1)], 1);
}; const s = []; const r = (i('a4d3'), i('4de4'), i('4160'), i('e439'), i('dbb4'), i('b64b'), i('d3b7'), i('3ca3'), i('159b'), i('ddb0'), i('e587')); const a = i('2fa7'); const o = i('2f62'); const c = function () { const e = this; const t = e.$createElement; const i = e._self._c || t; return i('div', {ref: 'slide', staticClass: 'slide-banner-scroll'}, [e._t('default'), i('div', {staticClass: 'docs-wrapper'}, e._l(e.length, (function (t) { return i('span', {key: t, staticClass: 'doc', class: {active: e.currentPageIndex === t - 1}}); })), 0)], 2); }; const l = []; const d = (i('a9e3'), i('229e')); function u(e) { const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300; let i = null; return function () { for (var n = this, s = arguments.length, r = new Array(s), a = 0; a < s; a++)r[a] = arguments[a]; i && clearTimeout(i), i = setTimeout((function () { e.apply(n, r); }), t); }; } const f = {
name: 'Slide',
props: {length: {type: Number}},
data() { return {currentPageIndex: 0, reset: u((function () { clearTimeout(this.playTimer); const e = this.$refs.slide.children[0]; const t = e.children; e.style.width = ''.concat(document.documentElement.clientWidth * t.length, 'px'); for (let i = 0; i < t.length; ++i)t[i].style.width = ''.concat(document.documentElement.clientWidth, 'px'); this.refresh(), this.autoGoNext(); }), 100).bind(this)}; },
methods: {
refresh() { const e = this; this.$nextTick((function () { e.slide.refresh(); })); },
initScroll() {
 const e = this; this.slide = new d.a(this.$refs.slide, {
scrollX: !0, scrollY: !1, slide: {loop: !0, threshold: 100}, useTransition: !0, momentum: !1, bounce: !1, stopPropagation: !0, probeType: 2,
}), this.slide.on('scrollEnd', (function () { e.autoGoNext(); })), this.slide.on('beforeScrollStart', (function () { clearTimeout(e.playTimer); })), this.slide.on('slideWillChange', (function (t) { e.currentPageIndex = t.pageX; })), window.addEventListener('resize', this.reset), this.autoGoNext();
},
autoGoNext() { const e = this; this.playTimer = setTimeout((function () { clearTimeout(e.playTimer), e.slide.next(); }), 1e3); },
},
mounted() { this.initScroll(); },
activated() { const e = this; this.$nextTick((function () { e.refresh(), e.autoGoNext(); })); },
beforeDestroy() { clearTimeout(this.playTimer), this.slide.destroy(), window.removeEventListener('resize', this.reset); },
}; const h = f; const m = (i('e529'), i('2877')); const p = Object(m.a)(h, c, l, !1, null, '609833a5', null); const g = p.exports; const b = i('781b'); const v = i('b4e2'); const y = i('ed08'); const w = i('db49'); const O = i('4624'); function x(e, t) { const i = Object.keys(e); if (Object.getOwnPropertySymbols) { let n = Object.getOwnPropertySymbols(e); t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), i.push.apply(i, n); } return i; } function j(e) { for (let t = 1; t < arguments.length; t++) { var i = arguments[t] != null ? arguments[t] : {}; t % 2 ? x(i, !0).forEach((function (t) { Object(a.a)(e, t, i[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : x(i).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t)); })); } return e; } const C = O.a.bottom; const T = {
name: 'Recommend', data() { return {slides: [], loading: !1, flag: !1}; }, mixins: [C], components: {Slide: g, Loading: b.a, ScrollView: v.a}, computed: j({}, Object(o.e)('cd', {cds(e) { return e.cds; }})), methods: j({gotoDetail(e) { this.$router.history.push({path: '/recommend/'.concat(e)}); }, onload() { this.flag || (this.flag = !0, this.refresh()); }}, Object(o.b)('cd', ['getCdList'])), created() { const e = this; this.loading = !0, Promise.all([Object(y.a)('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', w.o), this.getCdList()]).then((function (t) { const i = Object(r.a)(t, 1); const n = i[0]; e.loading = !1, n.code === w.g && (e.slides = n.data.slider); })); },
}; const _ = T; const P = (i('cb84'), Object(m.a)(_, n, s, !1, null, '3a6a48fa', null)); t.default = P.exports;
},
a0ae(e, t, i) {},
cb84(e, t, i) {
const n = i('a0ae'); const s = i.n(n); s.a;
},
e529(e, t, i) {
const n = i('fc27'); const s = i.n(n); s.a;
},
fc27(e, t, i) {},
}]);
// # sourceMappingURL=chunk-5fa69296.38f8be2b.js.map
