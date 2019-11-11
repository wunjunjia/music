(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-d29b1f78'], {
5011(t, e, r) {
r.r(e); const n = function () {
 const t = this; const e = t.$createElement; const r = t._self._c || e; return r('div', {staticClass: 'singer'}, [r('ScrollView', {ref: 'scrollView', attrs: {handleScroll: t.handleScroll}}, [r('ul', {
directives: [{
name: 'show', rawName: 'v-show', value: !t.loading, expression: '!loading',
}],
}, t._l(t.groups, (function (e, n) {
 return r('li', {
key: n, ref: 'group', refInFor: !0, staticClass: 'group',
}, [r('h1', {staticClass: 'title'}, [t._v(t._s(e.text))]), r('ul', {staticClass: 'singerList'}, t._l(e.singers, (function (e) {
 return r('li', {key: e.id, staticClass: 'item', on: {click(r) { return t.gotoDetail(e.serial); }}}, [r('img', {
directives: [{
name: 'lazy', rawName: 'v-lazy', value: e.image, expression: 'singer.image',
}],
attrs: {alt: 'avatar'},
}), r('p', {staticClass: 'name'}, [t._v(t._s(e.name))])]);
})), 0)]);
})), 0)]), t.loading ? r('Loading') : t._e(), r('h1', {ref: 'cue', staticClass: 'cue title'}, [t._v('热门')]), r('ul', {staticClass: 'letterList', on: {touchstart(e) { return e.stopPropagation(), e.preventDefault(), t.handleTouchStart(e); }, touchmove(e) { return e.stopPropagation(), e.preventDefault(), t.handleTouchMove(e); }}}, t._l(t.groups, (function (e, n) {
 return r('li', {
key: n, ref: 'letter', refInFor: !0, staticClass: 'item', class: {active: t.currentIndex === n},
}, [t._v(` ${t._s(e.text === '热门' ? '热' : e.text)} `)]);
})), 0), r('transition', {attrs: {name: 'detail'}}, [r('router-view')], 1)], 1);
}; const s = []; const i = (r('a4d3'), r('99af'), r('4de4'), r('c740'), r('4160'), r('d81d'), r('e439'), r('dbb4'), r('b64b'), r('159b'), r('2fa7')); const o = r('2f62'); const a = r('b4e2'); const c = r('781b'); const u = (r('b0c0'), r('9f12')); const l = function t(e) { const r = e.name; const n = e.serial; const s = e.letter; const i = e.id; const o = e.songs; const a = void 0 === o ? [] : o; Object(u.a)(this, t), this.name = r, this.serial = n, this.letter = s, this.image = 'https://y.gtimg.cn/music/photo_new/T001R300x300M000'.concat(n, '.jpg?max_age=2592000'), this.id = i, this.songs = a; }; const h = l; const f = r('ed08'); const g = r('db49'); const d = r('d567'); const p = r('4624'); function v(t, e) { const r = Object.keys(t); if (Object.getOwnPropertySymbols) { let n = Object.getOwnPropertySymbols(t); e && (n = n.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), r.push.apply(r, n); } return r; } function m(t) { for (let e = 1; e < arguments.length; e++) { var r = arguments[e] != null ? arguments[e] : {}; e % 2 ? v(r, !0).forEach((function (e) { Object(i.a)(t, e, r[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(r).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)); })); } return t; } const x = p.a.bottom; const b = {
name: 'Singer',
data() {
 return {
currentIndex: 0, loading: !1, startY: 0, startIndex: 0, groups: [{text: '热门', singers: []}].concat(Object.keys(g.j).map((function (t) { return {text: t, singers: []}; }))),
};
},
mixins: [x],
methods: m({
handleTouchStart(t) { this.startY = t.targetTouches[0].clientY, this.startIndex = this.$refs.letter.findIndex((function (e) { return e === t.target; })), this.currentIndex = this.startIndex, this.$refs.scrollView.scrollToElement(this.$refs.group[this.currentIndex]), this.$refs.cue.innerHTML = this.groups[this.currentIndex].text; }, handleTouchMove(t) { const e = this.startIndex + Math.floor((t.targetTouches[0].clientY - this.startY) / 18); e >= 0 && e < this.groups.length && (this.currentIndex = e, this.$refs.scrollView.scrollToElement(this.$refs.group[this.currentIndex]), this.$refs.cue.innerHTML = this.groups[this.currentIndex].text); }, handleScroll(t) { if (t.y > 0) this.$refs.cue.style.top = ''.concat(t.y, 'px'); else for (let e = Math.abs(t.y), r = this.$refs.group, n = this.$refs.cue, s = r.length - 1; s >= 0; --s) if (e >= r[s].offsetTop) { if (this.currentIndex !== s && (n.innerHTML = this.groups[s].text, this.currentIndex = s), s < r.length - 1) { const i = r[s + 1].offsetTop - e; n.style.top = ''.concat(-30 + (i <= 30 ? i : 30), 'px'); } else n.style.top = 0; return; } }, gotoDetail(t) { this.$router.history.push({path: '/singer/'.concat(t)}); },
}, Object(o.d)('singer', [d.a])),
components: {ScrollView: a.a, Loading: c.a},
created() {
 const t = this; this.loading = !0, Object(f.a)('https://c.y.qq.com/v8/fcg-bin/v8.fcg', g.n).then((function (e) {
 if (e.code === g.g) {
 const r = e.data.list.map((function (t) {
 return new h({
id: t.Fsinger_id, name: t.Fsinger_name, serial: t.Fsinger_mid, letter: t.Findex,
});
})); t.BATCH_ADD(r); for (let n = 0; n < 10; ++n)t.groups[0].singers.push(r[n]); r.forEach((function (e) { g.j[e.letter] && t.groups[g.j[e.letter]].singers.push(e); })), t.groups = t.groups.filter((function (t) { return t.singers.length > 0; })), t.loading = !1, t.refresh();
}
}));
},
activated() { const t = this; this.currentIndex = 0, this.$nextTick((function () { t.$refs.cue.innerHTML = '热门'; })); },
}; const y = b; const w = (r('7e26'), r('2877')); const O = Object(w.a)(y, n, s, !1, null, '1c85fa06', null); e.default = O.exports;
},
5849(t, e, r) {},
'7e26': function (t, e, r) {
const n = r('5849'); const s = r.n(n); s.a;
},
}]);
// # sourceMappingURL=chunk-d29b1f78.4021834e.js.map
