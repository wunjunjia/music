(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-52d22c3c'], {
'41d8': function (t, e, n) {},
'65e7': function (t, e, n) {
const r = n('41d8'); const a = n.n(r); a.a;
},
'948d': function (t, e, n) {
n.r(e); const r = function () {
 const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', {staticClass: 'rank'}, [n('ScrollView', {ref: 'scrollView', attrs: {dataSource: t.ranks}}, [n('ul', {staticClass: 'list'}, t._l(t.ranks, (function (e) {
 return n('li', {key: e.id, staticClass: 'rank', on: {click(n) { return t.gotoDetail(e.id); }}}, [n('div', {staticClass: 'avatar'}, [n('img', {
directives: [{
name: 'lazy', rawName: 'v-lazy', value: e.picUrl, expression: 'rank.picUrl',
}],
attrs: {alt: 'avatar'},
})]), n('ul', {staticClass: 'songs'}, t._l(e.tops, (function (e, r) { return n('li', {key: e.songname, staticClass: 'song'}, [n('p', [t._v(`${t._s(r + 1)}.${t._s(e.songname)}-${t._s(e.singername)}`)])]); })), 0)]);
})), 0)]), t.loading ? n('Loading') : t._e(), n('transition', {attrs: {name: 'detail'}}, [n('router-view')], 1)], 1);
}; const a = []; const i = (n('a4d3'), n('4de4'), n('4160'), n('e439'), n('dbb4'), n('b64b'), n('159b'), n('2fa7')); const s = n('2f62'); const o = n('781b'); const c = n('b4e2'); const l = n('4624'); function u(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function d(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? u(n, !0).forEach((function (e) { Object(i.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const p = l.a.bottom; const f = {
name: 'Rank', data() { return {loading: !1}; }, mixins: [p], computed: d({}, Object(s.e)('rank', {ranks(t) { return t.ranks; }})), components: {Loading: o.a, ScrollView: c.a}, methods: d({gotoDetail(t) { this.$router.history.push({path: '/rank/'.concat(t)}); }}, Object(s.b)('rank', ['getRankList'])), created() { const t = this; this.loading = !0, this.getRankList().then((function () { t.loading = !1; })); },
}; const b = f; const g = (n('65e7'), n('2877')); const k = Object(g.a)(b, r, a, !1, null, '1b2d86d2', null); e.default = k.exports;
},
}]);
// # sourceMappingURL=chunk-52d22c3c.16883d0f.js.map
