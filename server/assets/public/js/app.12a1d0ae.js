(function (t) {
 function e(e) { for (var r, i, s = e[0], c = e[1], l = e[2], u = 0, f = []; u < s.length; u++)i = s[u], Object.prototype.hasOwnProperty.call(o, i) && o[i] && f.push(o[i][0]), o[i] = 0; for (r in c)Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]); d && d(e); while (f.length)f.shift()(); return a.push.apply(a, l || []), n(); } function n() { for (var t, e = 0; e < a.length; e++) { for (var n = a[e], r = !0, i = 1; i < n.length; i++) { const s = n[i]; o[s] !== 0 && (r = !1); }r && (a.splice(e--, 1), t = c(c.s = n[0])); } return t; } const r = {}; const i = {app: 0}; var o = {app: 0}; var a = []; function s(t) {
 return `${c.p}public/js/${{}[t] || t}.${{
'chunk-2d0e908b': '2bbd0a29', 'chunk-2d21d511': '82a0b2a4', 'chunk-43c0dc61': '193a7241', 'chunk-45ccca0a': '26cb3858', 'chunk-52d22c3c': '16883d0f', 'chunk-5fa69296': '38f8be2b', 'chunk-76983986': '44c0ac85', 'chunk-d29b1f78': '4021834e',
}[t]}.js`;
} function c(e) { if (r[e]) return r[e].exports; const n = r[e] = {i: e, l: !1, exports: {}}; return t[e].call(n.exports, n, n.exports, c), n.l = !0, n.exports; }c.e = function (t) {
 const e = []; const n = {
'chunk-43c0dc61': 1, 'chunk-45ccca0a': 1, 'chunk-52d22c3c': 1, 'chunk-5fa69296': 1, 'chunk-76983986': 1, 'chunk-d29b1f78': 1,
}; i[t] ? e.push(i[t]) : i[t] !== 0 && n[t] && e.push(i[t] = new Promise((function (e, n) {
 for (var r = `public/css/${{}[t] || t}.${{
'chunk-2d0e908b': '31d6cfe0', 'chunk-2d21d511': '31d6cfe0', 'chunk-43c0dc61': '1d32fde2', 'chunk-45ccca0a': '745d3e19', 'chunk-52d22c3c': 'aa3f7102', 'chunk-5fa69296': '48e9fb2a', 'chunk-76983986': '4f416456', 'chunk-d29b1f78': '741f881e',
}[t]}.css`, o = c.p + r, a = document.getElementsByTagName('link'), s = 0; s < a.length; s++) { var l = a[s]; var u = l.getAttribute('data-href') || l.getAttribute('href'); if (l.rel === 'stylesheet' && (u === r || u === o)) return e(); } const f = document.getElementsByTagName('style'); for (s = 0; s < f.length; s++) { l = f[s], u = l.getAttribute('data-href'); if (u === r || u === o) return e(); } const d = document.createElement('link'); d.rel = 'stylesheet', d.type = 'text/css', d.onload = e, d.onerror = function (e) { const r = e && e.target && e.target.src || o; const a = new Error(`Loading CSS chunk ${t} failed.\n(${r})`); a.code = 'CSS_CHUNK_LOAD_FAILED', a.request = r, delete i[t], d.parentNode.removeChild(d), n(a); }, d.href = o; const p = document.getElementsByTagName('head')[0]; p.appendChild(d);
})).then((function () { i[t] = 0; }))); let r = o[t]; if (r !== 0) if (r)e.push(r[2]); else { const a = new Promise((function (e, n) { r = o[t] = [e, n]; })); e.push(r[2] = a); let l; const u = document.createElement('script'); u.charset = 'utf-8', u.timeout = 120, c.nc && u.setAttribute('nonce', c.nc), u.src = s(t); const f = new Error(); l = function (e) { u.onerror = u.onload = null, clearTimeout(d); const n = o[t]; if (n !== 0) { if (n) { const r = e && (e.type === 'load' ? 'missing' : e.type); const i = e && e.target && e.target.src; f.message = `Loading chunk ${t} failed.\n(${r}: ${i})`, f.name = 'ChunkLoadError', f.type = r, f.request = i, n[1](f); }o[t] = void 0; } }; var d = setTimeout((function () { l({type: 'timeout', target: u}); }), 12e4); u.onerror = u.onload = l, document.head.appendChild(u); } return Promise.all(e);
}, c.m = t, c.c = r, c.d = function (t, e, n) { c.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n}); }, c.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(t, '__esModule', {value: !0}); }, c.t = function (t, e) { if (1 & e && (t = c(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; const n = Object.create(null); if (c.r(n), Object.defineProperty(n, 'default', {enumerable: !0, value: t}), 2 & e && typeof t !== 'string') for (const r in t)c.d(n, r, function (e) { return t[e]; }.bind(null, r)); return n; }, c.n = function (t) { const e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return c.d(e, 'a', e), e; }, c.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, c.p = '/', c.oe = function (t) { throw console.error(t), t; }; let l = window.webpackJsonp = window.webpackJsonp || []; const u = l.push.bind(l); l.push = e, l = l.slice(); for (let f = 0; f < l.length; f++)e(l[f]); var d = u; a.push([0, 'chunk-vendors']), n();
}({
0(t, e, n) { t.exports = n('56d7'); },
'2a9e': function (t, e, n) {
n.d(e, 'a', (function () { return r; })), n.d(e, 'e', (function () { return i; })), n.d(e, 'd', (function () { return o; })), n.d(e, 'b', (function () { return a; })), n.d(e, 'c', (function () { return s; })); var r = 'BATCH_ADD'; var i = 'UPDATE_SONGS_DATA'; var o = 'UPDATE_RESERVE'; var a = 'UPDATE_INDEX'; var s = 'UPDATE_MORE';
},
'2cfe': function (t, e, n) {},
'2e5d': function (t, e, n) {},
'328f': function (t, e, n) {
n.d(e, 'a', (function () { return r; })), n.d(e, 'e', (function () { return i; })), n.d(e, 'd', (function () { return o; })), n.d(e, 'b', (function () { return a; })), n.d(e, 'c', (function () { return s; })); var r = 'BATCH_ADD'; var i = 'UPDATE_SONGS_DATA'; var o = 'UPDATE_RESERVE'; var a = 'UPDATE_INDEX'; var s = 'UPDATE_MORE';
},
'393b': function (t, e, n) {},
4624(t, e, n) {
n('a4d3'), n('4de4'), n('4160'), n('e439'), n('dbb4'), n('b64b'), n('159b'); const r = n('2fa7'); const i = n('2f62'); function o(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function a(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? o(n, !0).forEach((function (e) { Object(r.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const s = {
computed: a({}, Object(i.e)('global', {bottom(t) { return t.bottom; }})), watch: {bottom() { this.refresh(); }}, methods: {refresh() { this.$refs.scrollView.refresh(); }}, activated() { this.refresh(); },
}; const c = (n('7db0'), n('d3b7'), n('ddb0'), function () {
 const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', {staticClass: 'detail', style: {bottom: t.bottom}}, [n('div', {staticClass: 'header'}, [n('span', {staticClass: 'icon', on: {click: t.back}}, [n('i', {staticClass: 'icon-back'})]), n('p', {staticClass: 'name'}, [t._v(t._s(t.target.text))])]), n('div', {ref: 'avatar', staticClass: 'avatar', style: {backgroundImage: `url(${t.target.image})`}}, [n('div', {staticClass: 'mask'}), n('div', {
ref: 'play', staticClass: 'play', class: t.loading ? 'disable' : '', on: {click: t.randomPlay},
}, [t._m(0), n('span', [t._v('随机播放全部')])])]), n('div', {ref: 'content', staticClass: 'content'}, [n('ScrollView', {ref: 'scrollView', staticStyle: {overflow: 'visible', position: 'absolute', bottom: '0'}, attrs: {handleScroll: t.handleScroll, dataSource: t.target.songs}}, [n('ul', {ref: 'songList', staticClass: 'songList'}, t._l(t.target.songs, (function (e, r) { return n('li', {key: e.songid, staticClass: 'song', on: {click(n) { return t.gotoPlay(e); }}}, [t._t('default', null, {index: r}), n('div', {staticClass: 'content'}, [n('p', {staticClass: 'primary', class: e.canplay ? '' : 'disable'}, [t._v(t._s(e.songname))]), n('p', {staticClass: 'secondary'}, [t._l(e.authors, (function (e) { return n('span', {key: e}, [t._v(t._s(e))]); })), t._v(`·${t._s(e.albumname)} `)], 2)])], 2); })), 0)])], 1), t.target.songs.length === 0 ? n('Loading', {staticStyle: {'padding-top': '40px'}}) : t._e()], 1);
}); const l = [function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('span', {staticClass: 'icon'}, [n('i', {staticClass: 'icon-play'})]); }]; const u = (n('e25e'), n('781b')); const f = n('b4e2'); const d = n('5dff'); const p = n('cf6f'); const h = n('db49'); function g(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function m(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? g(n, !0).forEach((function (e) { Object(r.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : g(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const b = {
name: 'Detail',
data() { return {flag: !1}; },
props: {target: {type: Object, required: !0}, more: {type: Boolean, required: !0}, loadMore: {type: Function, required: !0}},
components: {Loading: u.a, ScrollView: f.a},
methods: m({
back() { this.$router.history.go(-1); }, randomPlay() { const t = this; this.loading || (this.mode !== h.c && this[p.j](h.c), this.random(this.target.songs.filter((function (t) { return t.canplay; }))).then((function (e) { e && t.bottom === '0px' && t[d.a]('60px'); }))); }, gotoPlay(t) { const e = this; t.canplay && !this.loading && this.choose({mutation: p.a, song: t}).then((function (t) { t && e.bottom === '0px' && e[d.a]('60px'); })); }, handleScroll(t) { const e = this; const n = this.$refs.avatar.offsetHeight; if (t.y >= 0) this.$refs.avatar.style.transform = 'scale('.concat((n + t.y) / n, ')'); else { const r = n + t.y >= 40 ? n + t.y : 40; if (this.$refs.content.style.top = ''.concat(r, 'px'), this.more && this.$refs.songList.offsetHeight + t.y <= this.$refs.scrollView.$el.offsetHeight + 128) { if (this.flag) return; this.flag = !0, this.loadMore(), this.$nextTick((function () { e.$refs.scrollView.refresh(); })); var i = setTimeout((function () { clearTimeout(i), e.flag = !1; }), 1e3); } } }, refresh() { const t = this.$refs.avatar.offsetHeight; this.$refs.content.style.top = ''.concat(t, 'px'), this.$refs.scrollView.$el.style.height = ''.concat(document.documentElement.clientHeight - t - parseInt(this.bottom, 10), 'px'), this.$refs.scrollView.refresh(); },
}, Object(i.b)('play', ['choose', 'random']), {}, Object(i.d)('global', [d.a]), {}, Object(i.d)('play', [p.j])),
computed: m({}, Object(i.e)('play', {songs(t) { return t.songs; }, loading(t) { return t.loading; }, mode(t) { return t.mode; }}), {}, Object(i.e)('global', {bottom(t) { return t.bottom; }})),
watch: {bottom(t) { const e = this.$refs.avatar.offsetHeight; this.$refs.scrollView.$el.style.height = ''.concat(document.documentElement.clientHeight - e - parseInt(t, 10), 'px'), this.$refs.scrollView.refresh(); }},
}; const y = b; const v = (n('915b'), n('2877')); const O = Object(v.a)(y, c, l, !1, null, '0b7f54a1', null); const j = O.exports; function w(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function P(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? w(n, !0).forEach((function (e) { Object(r.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : w(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const A = {
data() { return {target: null}; }, components: {Detail: j}, methods: {init(t) { const e = this; this.target = P({}, t), this.target.text = t[this.keys[1]], this.target.songs.length === 0 && this.getDetail(t[this.keys[0]]).then((function () { e.target.songs = t.songs, e.process(); })), this.process(), this.$nextTick((function () { e.$refs.detail.refresh(); })); }, monitor(t) { const e = this; var n = setTimeout((function () { clearTimeout(n); const r = e.find(t); r ? e.init(r) : e.monitor(t); }), 20); }, process() {}}, created() { const t = this.$router.history.current.params[this.keys[0]]; const e = this.find(t); e ? this.init(e) : this.monitor(t); },
}; const C = {
data() {
 return {
active: !1, startX: 0, startY: 0, index: 0,
};
},
computed: {width() { return this.$refs.container.offsetWidth / this.total; }},
methods: {
activeTip() { const t = this; this.active = !0; var e = setTimeout((function () { clearTimeout(e), t.active = !1; }), 1500); }, toggleIndex(t) { this.index = t, this.$refs.container.style.transform = 'translateX('.concat(-this.index * this.width, 'px)'); }, touchStart(t) { this.startX = t.targetTouches[0].clientX, this.startY = t.targetTouches[0].clientY, this.$refs.container.style.transitionDuration = '0s'; }, touchMove(t) { const e = t.targetTouches[0].clientX - this.startX; const n = t.targetTouches[0].clientY - this.startY; Math.abs(n) >= Math.abs(e) || e < 0 && this.index === this.total - 1 || e > 0 && this.index === 0 || (this.$refs.container.style.transform = 'translateX('.concat(-this.index * this.width + e, 'px)')); }, touchEnd(t) { this.$refs.container.style.transitionDuration = '.4s'; const e = t.changedTouches[0].clientX - this.startX; Math.abs(e) < 50 ? this.$refs.container.style.transform = 'translateX('.concat(-this.index * this.width, 'px)') : e < 0 && this.index === this.total - 1 || e > 0 && this.index === 0 || (this.index = e > 50 ? this.index - 1 : this.index + 1, this.$refs.container.style.transform = 'translateX('.concat(-this.index * this.width, 'px)')); },
},
}; e.a = {bottom: s, detail: A, tab: C};
},
4750(t, e, n) {
const r = function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', {staticClass: 'songList'}, [n('ScrollView', {ref: 'scrollView'}, [n('ul', {staticClass: 'list'}, t._l(t.list, (function (e) { return n('li', {key: e.songmid, staticClass: 'song', on: {click(n) { return t.handleClick(e); }}}, [n('p', {staticClass: 'primary'}, [t._v(t._s(e.songname))]), n('p', {staticClass: 'secondary'}, [t._l(e.authors, (function (r, i) { return n('span', {key: r, class: i < e.authors.length - 1 ? 'dividing' : ''}, [t._v(t._s(r))]); })), n('span', [t._v(`·${t._s(e.albumname)}`)])], 2)]); })), 0)]), t.list.length === 0 ? n('div', {staticClass: 'empty'}, [n('div', {staticClass: 'bg'}), n('p', {staticClass: 'title'}, [t._v('暂无相关数据')])]) : t._e()], 1); }; const i = []; const o = (n('a4d3'), n('4de4'), n('4160'), n('e439'), n('dbb4'), n('b64b'), n('159b'), n('2fa7')); const a = n('2f62'); const s = n('b4e2'); const c = n('cf6f'); const l = n('5dff'); function u(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function f(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? u(n, !0).forEach((function (e) { Object(o.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const d = {
name: 'SongList', props: {list: {type: Array, required: !0}, callback: {type: Function, default() {}}}, computed: f({}, Object(a.e)('play', {loading(t) { return t.loading; }}), {}, Object(a.e)('global', {bottom(t) { return t.bottom; }})), components: {ScrollView: s.a}, methods: f({refresh() { this.$refs.scrollView.refresh(); }, handleClick(t) { const e = this; this.loading || this.choose({mutation: c.a, song: t}).then((function (t) { t && (e.callback(), e.bottom === '0px' && e[l.a]('60px')); })); }}, Object(a.b)('play', ['choose']), {}, Object(a.d)('global', [l.a])),
}; const p = d; const h = (n('91a3'), n('2877')); const g = Object(h.a)(p, r, i, !1, null, 'a74abc6a', null); e.a = g.exports;
},
4776(t, e, n) {},
'4cdd': function (t, e, n) {},
'51b5': function (t, e, n) {},
5275(t, e, n) {
const r = n('a8cb'); const i = n.n(r); i.a;
},
5284(t, e) { t.exports = 'data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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'; },
'54dc': function (t, e, n) {
const r = n('9f12'); const i = n('cf05'); const o = n.n(i); const a = function t(e) { const n = e.albumname; const i = void 0 === n ? '' : n; const a = e.albummid; const s = void 0 === a ? '' : a; const c = e.songname; const l = void 0 === c ? '' : c; const u = e.songmid; const f = void 0 === u ? '' : u; const d = e.authors; const p = void 0 === d ? [] : d; const h = e.audioSrc; const g = void 0 === h ? '' : h; const m = e.interval; const b = void 0 === m ? 0 : m; const y = e.canplay; const v = void 0 === y || y; const O = e.lyric; const j = void 0 === O ? '' : O; const w = e.love; const P = void 0 !== w && w; Object(r.a)(this, t), this.authors = p, this.albumname = i, this.albummid = s, this.songname = l, this.songmid = f, this.audioSrc = g, this.interval = b, this.canplay = v, this.lyric = j, this.image = s === '' ? o.a : 'https://y.gtimg.cn/music/photo_new/T002R300x300M000'.concat(s, '.jpg?max_age=2592000'), this.love = P; }; e.a = a;
},
'56d7': function (t, e, n) {
n.r(e); n('e260'), n('e6cf'), n('cca6'), n('a79d'); const r = n('2b0e'); const i = n('caf9'); const o = n('229e'); const a = n('2bb4'); const s = function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', {staticClass: 'app', attrs: {id: 'app'}}, [n('Header'), n('ul', {staticClass: 'nav'}, [n('li', {staticClass: 'item'}, [n('router-link', {attrs: {to: '/recommend'}}, [t._v('推荐')])], 1), n('li', {staticClass: 'item'}, [n('router-link', {attrs: {to: '/singer'}}, [t._v('歌手')])], 1), n('li', {staticClass: 'item'}, [n('router-link', {attrs: {to: '/rank'}}, [t._v('排行')])], 1), n('li', {staticClass: 'item'}, [n('router-link', {attrs: {to: '/search'}}, [t._v('搜索')])], 1)]), n('div', {staticClass: 'container', style: {bottom: t.bottom}}, [n('keep-alive', [n('router-view')], 1), n('Play'), n('PlayList')], 1), n('Confirm')], 1); }; const c = []; const l = (n('a4d3'), n('4de4'), n('4160'), n('e439'), n('dbb4'), n('b64b'), n('159b'), n('2fa7')); const u = n('2f62'); const f = function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', {staticClass: 'header'}, [n('span', {staticClass: 'logo'}), n('span', {staticClass: 'title'}, [t._v('Chicken Music')]), n('span', {staticClass: 'icon', on: {click: t.gotoUserCenter}}, [n('i', {staticClass: 'icon-mine'})])]); }; const d = []; const p = {name: 'Header', methods: {gotoUserCenter() { this.$router.history.push({path: '/user'}); }}}; const h = p; const g = (n('cf6c'), n('2877')); const m = Object(g.a)(h, f, d, !1, null, '244f9bc6', null); const b = m.exports; const y = function () {
 const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', [n('NormalPlay', {ref: 'normalPlay', attrs: {getMiniAvatarStyles: t.getMiniAvatarStyles, currentTime: t.currentTime, updateCurrentTime: t.updateCurrentTime}}), n('MiniPlay', {ref: 'miniPlay', attrs: {currentTime: t.currentTime}}), t.song.audioSrc ? n('audio', {
ref: 'audio',
attrs: {src: t.song.audioSrc},
on: {
loadeddata: t.loadeddata, canplay: t.canplay, ended: t.ended, error: t.error, timeupdate: t.timeUpdate,
},
}) : t._e()], 1);
}; const v = []; const O = (n('e25e'), function () {
 const t = this; const e = t.$createElement; const n = t._self._c || e; return n('transition', {
attrs: {name: 'normal-play'},
on: {
'before-enter': t.beforeEnter, enter: t.enter, leave: t.beforeEnter, 'after-enter': t.afterEnter,
},
}, [n('div', {
directives: [{
name: 'show', rawName: 'v-show', value: t.fullscreen, expression: 'fullscreen',
}],
staticClass: 'normal-play',
}, [n('div', {staticClass: 'background'}, [n('img', {attrs: {src: t.song.image, alt: 'image'}})]), n('div', {staticClass: 'top'}, [n('span', {staticClass: 'icon', on: {click: t.close}}, [n('i', {staticClass: 'icon-back'})]), n('h1', {staticClass: 'songname'}, [t._v(t._s(t.song.songname))]), n('h2', {staticClass: 'author'}, [t._v(t._s(t.song.authors[0]))])]), n('Middle', {ref: 'middle', attrs: {toggleIndex: t.toggleIndex, lyric: t.lyric}}), n('div', {staticClass: 'bottom'}, [n('div', {staticClass: 'dot-wrapper'}, [n('span', {staticClass: 'dot', class: t.index === 0 ? 'active' : ''}), n('span', {staticClass: 'dot', class: t.index === 1 ? 'active' : ''})]), n('Progress', {attrs: {updateCurrentTime: t.updateCurrentTime, currentTime: t.currentTime, seek: t.seek}}), n('ControlPanel', {attrs: {updateCurrentTime: t.updateCurrentTime, seek: t.seek}})], 1)], 1)]);
}); const j = []; const w = (n('a9e3'), n('3c75')); const P = n.n(w); const A = function () {
 const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', {staticClass: 'middle', on: {touchstart: t.touchStart, touchmove: t.touchMove, touchend: t.touchEnd}}, [n('div', {ref: 'avatar-wrapper', staticClass: 'panel avatar-wrapper'}, [n('div', {ref: 'normal-avatar', staticClass: 'normal-avatar'}, [n('img', {staticClass: 'rotation', class: t.playState ? '' : 'pause', attrs: {src: t.song.image, alt: 'image'}})]), n('div', {staticClass: 'text'}, [n('p', [t._v(t._s(t.txt))])])]), n('div', {ref: 'lyric-wrapper', staticClass: 'panel lyric-wrapper'}, [n('ScrollView', {ref: 'scrollView', attrs: {dataSource: t.lyric.lines}}, [n('ul', {staticClass: 'list'}, [t._l(t.lyric.lines, (function (e, r) {
 return n('li', {
key: r, ref: 'line', refInFor: !0, class: t.lineNum === r ? 'active' : '',
}, [n('p', [t._v(t._s(e.txt))])]);
})), t.lyric.lines.length === 0 ? n('li', {ref: 'line', staticClass: 'single'}, [n('p', [t._v('此歌曲为没有填词的纯音乐，请您欣赏')])]) : t._e()], 2)])], 1)]);
}; const C = []; const S = n('b4e2'); function x(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function k(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? x(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : x(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const D = {
name: 'PlayMiddle',
data() {
 return {
startX: 0, startY: 0, txt: '', lineNum: 0, index: 0,
};
},
props: {lyric: {type: Object, required: !0}, toggleIndex: {type: Function, required: !0}},
computed: k({}, Object(u.e)('play', {fullscreen(t) { return t.fullscreen; }, playState(t) { return t.playState; }}), {}, Object(u.c)('play', ['song'])),
watch: {lyric() { this.txt = ''; }},
components: {ScrollView: S.a},
methods: {
touchStart(t) { this.startX = t.targetTouches[0].clientX, this.startY = t.targetTouches[0].clientY, this.$refs['avatar-wrapper'].style.transitionDuration = '0s', this.$refs['lyric-wrapper'].style.transitionDuration = '0s'; }, touchMove(t) { const e = t.targetTouches[0].clientX - this.startX; const n = t.targetTouches[0].clientY - this.startY; if (!(Math.abs(n) > Math.abs(e))) if (e < 0 && this.index === 0) { const r = Math.abs(e); const i = 1 - r / document.documentElement.clientWidth; this.$refs['avatar-wrapper'].style.opacity = i; const o = document.documentElement.clientWidth - r; this.$refs['lyric-wrapper'].style.left = ''.concat(o, 'px'); } else if (e > 0 && this.index === 1) { const a = e / document.documentElement.clientWidth; this.$refs['avatar-wrapper'].style.opacity = a, this.$refs['lyric-wrapper'].style.left = ''.concat(e, 'px'); } }, touchEnd(t) { this.$refs['avatar-wrapper'].style.transitionDuration = '0.4s', this.$refs['lyric-wrapper'].style.transitionDuration = '0.4s'; const e = t.changedTouches[0].clientX - this.startX; e < 0 && this.index === 1 || e > 0 && this.index === 0 || (Math.abs(e) > 50 && (this.index = this.index === 0 ? 1 : 0, this.toggleIndex(this.index)), this.touchHandle()); }, touchHandle() { this.index === 0 ? (this.$refs['lyric-wrapper'].style.left = '100%', this.$refs['avatar-wrapper'].style.opacity = 1) : (this.$refs['lyric-wrapper'].style.left = 0, this.$refs['avatar-wrapper'].style.opacity = 0); }, lyricHandle(t, e) { this.lineNum = t; const n = t > 5 ? t - 5 : 0; this.$refs.scrollView.scrollToElement(this.$refs.line[n], 1e3), this.txt = e; }, beforeEnter(t, e) { const n = e.marginBottom; const r = e.height; const i = document.querySelector('.normal-avatar'); const o = window.getComputedStyle(i); const a = parseInt(o.borderWidth, 10); i.style.width = t.width, i.style.height = t.height, i.style.left = ''.concat(parseInt(t.marginLeft, 10) + parseInt(t.width, 10) / 2, 'px'), i.style.top = ''.concat(document.documentElement.clientHeight - parseInt(n, 10) - parseInt(r, 10) - parseInt(t.height, 10) - parseInt(t.paddingBottom, 10) - a, 'px'); }, enter() { const t = document.querySelector('.normal-avatar'); t.style.width = '280px', t.style.height = '280px', t.style.top = 0, t.style.left = '50%', t.style.transform = 'translateX(-50%)', t.style.transition = 'all .4s ease'; }, afterEnter() { const t = this; this.$refs.scrollView.refresh(), this.$nextTick((function () { const e = t.lyric.lines.length === 0 ? t.$refs.line : t.$refs.line[t.lineNum > 5 ? t.lineNum - 5 : 0]; t.$refs.scrollView.scrollToElement(e); })); },
},
}; const E = D; const T = (n('68da'), Object(g.a)(E, A, C, !1, null, '22cffb1e', null)); const _ = T.exports; const I = function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', {staticClass: 'progress-panel'}, [n('span', [t._v(t._s(t._f('format')(t.currentTime)))]), n('div', {ref: 'progress-wrapper', staticClass: 'progress-wrapper', on: {touchstart: t.touchStart, touchmove: t.touchMove, touchend: t.touchEnd}}, [n('div', {ref: 'behind', staticClass: 'behind'}), n('div', {ref: 'front', staticClass: 'front'}), n('div', {ref: 'btn-wrapper', staticClass: 'btn-wrapper'}, [n('div', {staticClass: 'btn'})])]), n('span', [t._v(t._s(t._f('format')(t.song.interval)))])]); }; const M = []; const N = (n('99af'), n('cf6f')); function L(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function q(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? L(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : L(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } function H(t) { return ''.concat(t >= 10 ? t : '0'.concat(t)); } const R = {
name: 'Progress',
data() { return {move: !1}; },
props: {currentTime: {type: Number, required: !0}, updateCurrentTime: {type: Function, required: !0}, seek: {type: Function, required: !0}},
computed: q({maxWidth() { return this.$refs.behind.offsetWidth - 16; }}, Object(u.e)('play', {playState(t) { return t.playState; }}), {}, Object(u.c)('play', ['song'])),
methods: q({
updateProgress(t) { this.$refs['btn-wrapper'].style.transform = 'translateX('.concat(t, 'px)'), this.$refs.front.style.width = ''.concat(t, 'px'); }, handle(t) { let e = parseInt(t - this.$refs['progress-wrapper'].offsetLeft, 10); e < 0 ? e = 0 : e > this.maxWidth && (e = this.maxWidth); const n = parseInt(e / this.maxWidth * this.song.interval, 10); this.updateCurrentTime(n), this.seek(1e3 * n), this.updateProgress(e); }, touchStart(t) { this.handle(t.changedTouches[0].clientX), this.playState || this[N.k](!0); }, touchMove(t) { this.move = !0; let e = parseInt(t.targetTouches[0].clientX - this.$refs['progress-wrapper'].offsetLeft, 10); e < 0 ? e = 0 : e > this.maxWidth && (e = this.maxWidth), this.updateProgress(e); }, touchEnd(t) { this.move && (this.handle(t.changedTouches[0].clientX), this.move = !1); },
}, Object(u.d)('play', [N.k])),
watch: {currentTime(t) { if (!this.move) { const e = parseInt(t / this.song.interval * this.maxWidth, 10); this.updateProgress(e); } }},
filters: {format(t) { const e = Math.floor(t / 60); const n = t % 60; return ''.concat(H(e), ':').concat(H(n)); }},
}; const U = R; const V = (n('8a8e'), Object(g.a)(U, I, M, !1, null, '67796031', null)); const $ = V.exports; const B = function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', {staticClass: 'control-panel'}, [n('span', {staticClass: 'icon left'}, [n('i', {class: t.icon, on: {click: t.toggleMode}})]), n('span', {staticClass: 'icon left', class: t.loading ? 'disable' : ''}, [n('i', {staticClass: 'icon-prev', on: {click(e) { t.toggleSong(t.toggle.bind(this, 'prev')); }}})]), n('span', {staticClass: 'icon center'}, [n('i', {class: t.playState ? 'icon-pause' : 'icon-play', on: {click: t.togglePlayState}})]), n('span', {staticClass: 'icon right', class: t.loading ? 'disable' : ''}, [n('i', {staticClass: 'icon-next', on: {click(e) { t.toggleSong(t.toggle.bind(this, 'next')); }}})]), n('span', {staticClass: 'icon right', class: {love: t.song.love}}, [n('i', {class: t.song.love ? 'icon-favorite' : 'icon-not-favorite', on: {click: t.toggleLove}})])]); }; const G = []; const J = n('db49'); function W(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function z(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? W(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : W(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const Z = {
name: 'ControlPanel',
props: {updateCurrentTime: {type: Function, required: !0}, seek: {type: Function, required: !0}},
methods: z({
toggleSong(t) { const e = this; if (!this.loading) { const n = this.index; t().then((function () { e.index === n && (e.updateCurrentTime(0), e.seek(0), e.playState || e[N.k](!0)); })); } }, togglePlayState() { this[N.k](!this.playState); }, toggleMode() { this[N.j]((this.mode + 1) % 3); }, toggleLove() { this[N.o](this.song); },
}, Object(u.b)('play', ['toggle']), {}, Object(u.d)('play', [N.j, N.k, N.o])),
computed: z({}, Object(u.e)('play', {
playState(t) { return t.playState; }, loading(t) { return t.loading; }, index(t) { return t.index; }, mode(t) { return t.mode; },
}), {}, Object(u.c)('play', ['song']), {icon() { return this.mode === J.a ? 'icon-loop' : this.mode === J.c ? 'icon-random' : 'icon-sequence'; }}),
}; const F = Z; const Y = (n('cecb'), Object(g.a)(F, B, G, !1, null, '878c3ec0', null)); const Q = Y.exports; function X(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function K(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? X(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : X(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const tt = {
name: 'NormalPlay',
data() { return {lyric: {lines: []}, index: 0}; },
props: {getMiniAvatarStyles: {type: Function, required: !0}, currentTime: {type: Number, required: !0}, updateCurrentTime: {type: Function, required: !0}},
computed: K({}, Object(u.e)('play', {fullscreen(t) { return t.fullscreen; }, playState(t) { return t.playState; }}), {}, Object(u.c)('play', ['song'])),
watch: {song(t, e) { t.songmid !== e.songmid && (this.lyric.lines.length !== 0 && this.lyric.stop(), this.lyric = new P.a(t.lyric, this.lyricHandle)); }, playState(t) { if (this.lyric) { if (this.lyric.state === 1 && t) return; this.lyric.togglePlay(); } }},
components: {Progress: $, ControlPanel: Q, Middle: _},
methods: K({
beforeEnter() { const t = this.getMiniAvatarStyles(); const e = document.querySelector('.top'); this.$refs.middle.beforeEnter(t, window.getComputedStyle(e)); }, enter(t) { t.offsetHeight; this.$refs.middle.enter(); }, afterEnter() { this.$refs.middle.afterEnter(); }, close() { this[N.g](!1); }, lyricHandle(t) { const e = t.lineNum; const n = t.txt; this.$refs.middle.lyricHandle(e, n); }, seek(t) { this.lyric.seek(t); }, play() { this.lyric.play(); }, toggleIndex(t) { this.index = t; },
}, Object(u.d)('play', [N.g])),
}; const et = tt; const nt = (n('92e8'), Object(g.a)(et, O, j, !1, null, '8a8c0b30', null)); const rt = nt.exports; const it = function () {
 const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', {
directives: [{
name: 'show', rawName: 'v-show', value: !t.fullscreen && t.songs.length > 0, expression: '!fullscreen && songs.length > 0',
}],
staticClass: 'mini-play',
on: {click: t.open},
}, [n('img', {staticClass: 'mini-avatar rotation', class: t.playState ? '' : 'pause', attrs: {src: t.song.image, alt: 'image'}}), n('div', {staticClass: 'desc'}, [n('p', {staticClass: 'songname'}, [t._v(t._s(t.song.songname))]), n('p', {staticClass: 'author'}, [t._v(t._s(t.song.authors[0]))])]), n('span', {staticClass: 'icon'}, [n('svg', {
attrs: {
width: '32', height: '32', viewBox: '0 0 100 100', version: '1.1', xmlns: 'http://www.w3.org/2000/svg',
},
}, [n('circle', {
staticClass: 'behind',
attrs: {
r: '50', cx: '50', cy: '50', fill: 'transparent',
},
}), n('circle', {
staticClass: 'front',
attrs: {
r: '50', cx: '50', cy: '50', fill: 'transparent', 'stroke-dasharray': 100 * Math.PI, 'stroke-dashoffset': t.dashoffset,
},
})]), n('i', {class: t.playState ? 'icon-pause-mini' : 'icon-play-mini', on: {click(e) { return e.stopPropagation(), e.preventDefault(), t.togglePlayState(e); }}})]), n('span', {staticClass: 'icon'}, [n('i', {staticClass: 'icon-playlist', on: {click(e) { return e.stopPropagation(), e.preventDefault(), t.toggleShow(e); }}})])]);
}; const ot = []; const at = 'UPDATE_SHOW'; function st(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function ct(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? st(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : st(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const lt = {
name: 'MiniPlay',
props: {currentTime: {type: Number, required: !0}},
computed: ct({}, Object(u.e)('play', {fullscreen(t) { return t.fullscreen; }, songs(t) { return t.songs; }, playState(t) { return t.playState; }}), {}, Object(u.e)('playList', {show(t) { return t.show; }}), {}, Object(u.c)('play', ['song']), {dashoffset() { return (1 - this.currentTime / this.song.interval) * Math.PI * 100; }}),
methods: ct({
open() { this[N.g](!0); }, getAvatarStyles() { return window.getComputedStyle(document.querySelector('.mini-avatar')); }, toggleShow() { this[at](!this.show); }, togglePlayState() { this[N.k](!this.playState); },
}, Object(u.d)('playList', [at]), {}, Object(u.d)('play', [N.k, N.g])),
}; const ut = lt; const ft = (n('c908'), Object(g.a)(ut, it, ot, !1, null, '1230ffbe', null)); const dt = ft.exports; function pt(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function ht(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? pt(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pt(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const gt = {
name: 'Play',
data() { return {currentTime: 0}; },
computed: ht({}, Object(u.e)('play', {playState(t) { return t.playState; }, index(t) { return t.index; }}), {}, Object(u.c)('play', ['song'])),
watch: {playState(t) { this.$refs.audio && (t ? this.$refs.audio.play() : this.$refs.audio.pause()); }},
methods: ht({
loadeddata() { this.$refs.audio.play(), this.$refs.normalPlay.play(); }, canplay() {}, ended() { const t = this; const e = this.index; this.toggle('next').then((function () { e === t.index && (t.updateCurrentTime(0), t.$refs.normalPlay.seek(0), t.$refs.audio.play()); })); }, error() {}, updateCurrentTime(t) { this.$refs.audio.currentTime = t; }, timeUpdate() { this.$refs.audio && (this.currentTime = parseInt(this.$refs.audio.currentTime, 10)); }, getMiniAvatarStyles() { return this.$refs.miniPlay.getAvatarStyles(); },
}, Object(u.b)('play', ['toggle'])),
components: {MiniPlay: dt, NormalPlay: rt},
}; const mt = gt; const bt = Object(g.a)(mt, y, v, !1, null, null, null); const yt = bt.exports; const vt = function () {
 const t = this; const e = t.$createElement; const n = t._self._c || e; return n('transition', {attrs: {name: 'playList'}, on: {enter: t.enter}}, [n('div', {
directives: [{
name: 'show', rawName: 'v-show', value: t.show, expression: 'show',
}],
staticClass: 'playList',
on: {click(e) { return e.target !== e.currentTarget ? null : t.close(e); }},
}, [n('div', {staticClass: 'container'}, [n('div', {staticClass: 'header'}, [n('div', {staticClass: 'mode'}, [n('span', {staticClass: 'icon'}, [n('i', {class: t.icon, on: {click: t.toggleMode}})]), n('span', [t._v(t._s(t.text))])]), n('span', {staticClass: 'clear', on: {click: t.handleClick}}, [n('i', {staticClass: 'icon icon-clear'})])]), n('ScrollView', {ref: 'scrollView', staticStyle: {'max-height': '240px'}, attrs: {dataSource: t.songs}}, [n('ul', {staticClass: 'list'}, t._l(t.songs, (function (e, r) {
 return n('li', {
key: e.songmid, ref: 'song', refInFor: !0, staticClass: 'song', attrs: {'data-songmid': e.songmid}, on: {click(n) { return t.play(e); }},
}, [n('span', {staticClass: 'icon', style: {visibility: r === t.index ? 'visible' : 'hidden'}}, [n('i', {staticClass: 'icon-play'})]), n('p', {staticClass: 'name', class: {active: r === t.index, disable: !e.canplay}}, [t._v(t._s(e.songname))]), n('span', {staticClass: 'icon', class: {love: e.love}, on: {click(n) { return n.stopPropagation(), n.preventDefault(), t.toggleLove(e); }}}, [n('i', {class: e.love ? 'icon-favorite' : 'icon-not-favorite'})]), n('span', {staticClass: 'icon', on: {click(e) { return e.stopPropagation(), e.preventDefault(), t.remove(r); }}}, [n('i', {staticClass: 'icon-delete'})])]);
})), 0)]), n('div', {staticClass: 'add-btn', on: {click: t.toggleShow}}, [n('span', {staticClass: 'icon'}, [n('i', {staticClass: 'icon-add'})]), n('span', [t._v('添加歌曲到队列')])]), n('div', {staticClass: 'footer', on: {click: t.close}}, [t._v('关闭')])], 1), n('ChooseSong', {ref: 'choose-song'})], 1)]);
}; const Ot = []; const jt = (n('7db0'), n('5dff')); const wt = n('f255'); const Pt = function () {
 const t = this; const e = t.$createElement; const n = t._self._c || e; return n('transition', {attrs: {name: 'detail'}, on: {enter: t.enter}}, [n('div', {
directives: [{
name: 'show', rawName: 'v-show', value: t.show, expression: 'show',
}],
staticClass: 'root',
}, [n('div', {staticClass: 'header'}, [n('span', [t._v('添加歌曲到列表')]), n('span', {staticClass: 'icon', on: {click: t.close}}, [n('i', {staticClass: 'icon-close'})])]), n('div', {staticClass: 'main'}, [n('SearchInput', {ref: 'search-input', attrs: {callback: t.activeTip}}), n('div', {staticClass: 'content'}, [n('ul', {staticClass: 'nav'}, t._l(t.navItems, (function (e, r) {
 return n('li', {
key: e, staticClass: 'item', class: r === t.index ? 'active' : '', on: {click(e) { return t.toggleIndex(r); }},
}, [t._v(t._s(e))]);
})), 0), n('ul', {ref: 'container', staticClass: 'container', on: {touchstart: t.touchStart, touchmove: t.touchMove, touchend: t.touchEnd}}, [n('li', {staticClass: 'panel'}, [n('SongList', {ref: 'recentPlay', attrs: {callback: t.activeTip, list: t.recentPlay}})], 1), n('li', {staticClass: 'panel'}, [n('SearchHistory', {ref: 'searchHistory', attrs: {setSearch: t.setSearch}})], 1)])])], 1), n('Tip', {attrs: {active: t.active}})], 1)]);
}; const At = []; const Ct = n('6261'); const St = n('c7d8'); const xt = n('4750'); const kt = n('81d6'); const Dt = n('4624'); function Et(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function Tt(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Et(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Et(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const _t = Dt.a.tab; const It = {
name: 'ChooseSong',
data() { return {show: !1, total: 2, navItems: ['最近播放', '搜索历史']}; },
mixins: [_t],
computed: Tt({}, Object(u.e)('play', {recentPlay(t) { return t.recentPlay; }})),
components: {
SearchInput: Ct.a, SearchHistory: St.a, SongList: xt.a, Tip: kt.a,
},
methods: {
setSearch(t) { this.$refs['search-input'].setSearch(t); }, toggleShow() { this.show = !this.show; }, close() { this.setSearch(''), this.toggleShow(); }, enter() { this.$refs.recentPlay.refresh(), this.$refs.searchHistory.refresh(); },
},
}; const Mt = It; const Nt = (n('c99d'), Object(g.a)(Mt, Pt, At, !1, null, '7c7a9e4d', null)); const Lt = Nt.exports; function qt(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function Ht(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? qt(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qt(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const Rt = {
name: 'playList',
computed: Ht({}, Object(u.e)('playList', {show(t) { return t.show; }}), {}, Object(u.e)('play', {
index(t) { return t.index; }, songs(t) { return t.songs; }, loading(t) { return t.loading; }, mode(t) { return t.mode; },
}), {}, Object(u.c)('play', ['song']), {icon() { return this.mode === J.a ? 'icon-loop' : this.mode === J.c ? 'icon-random' : 'icon-sequence'; }, text() { return this.mode === J.a ? '循环播放' : this.mode === J.c ? '随机播放' : '顺序播放'; }}),
components: {ScrollView: S.a, ChooseSong: Lt},
methods: Ht({
enter() { const t = this; this.$refs.scrollView.refresh(), this.$nextTick((function () { const e = t.$refs.song; const n = e.find((function (e) { return e.dataset.songmid === t.song.songmid; })); t.$refs.scrollView.scrollToElement(n); })); }, close() { this[at](!1); }, confirm() { this[jt.a]('0px'), this[at](!1), this[N.d](); }, handleClick() { this[wt.b](!0), this[wt.c]('是否清空播放列表'), this[wt.a](this.confirm); }, toggleShow() { this.$refs['choose-song'].toggleShow(); }, toggleMode() { this[N.j](this.mode < 2 ? this.mode + 1 : 0); }, toggleLove(t) { this[N.o](t); }, play(t) { t.canplay && !this.loading && this.choose({mutation: N.c, song: t}); }, remove(t) { const e = this; const n = function () { e[N.e](t), e.songs.length === 0 && (e[jt.a]('0px'), e[at](!1)); }; this.loading || (this.songs.length !== 1 && this.index === t ? this.toggle('next').then((function () { e.index === t ? e.clear() : n(); })) : n()); },
}, Object(u.d)('play', [N.e, N.d, N.j, N.o]), {}, Object(u.d)('playList', [at]), {}, Object(u.d)('global', [jt.a]), {}, Object(u.d)('confirm', [wt.b, wt.c, wt.a]), {}, Object(u.b)('play', ['choose', 'toggle'])),
}; const Ut = Rt; const Vt = (n('7ed3'), Object(g.a)(Ut, vt, Ot, !1, null, '11cd7c77', null)); const $t = Vt.exports; const Bt = function () {
 const t = this; const e = t.$createElement; const n = t._self._c || e; return n('transition', {attrs: {name: 'confirm'}}, [n('div', {
directives: [{
name: 'show', rawName: 'v-show', value: t.show, expression: 'show',
}],
staticClass: 'confirm',
}, [n('div', {staticClass: 'container'}, [n('h1', {staticClass: 'title'}, [t._v(t._s(t.title))]), n('div', {staticClass: 'btn'}, [n('span', {on: {click: t.cancel}}, [t._v('取消')]), n('span', {on: {click: t.ensure}}, [t._v('清空')])])])])]);
}; const Gt = []; function Jt(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function Wt(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Jt(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Jt(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const zt = {name: 'Confirm', computed: Wt({}, Object(u.e)('confirm', {show(t) { return t.show; }, title(t) { return t.title; }, execute(t) { return t.execute; }})), methods: Wt({cancel() { this[wt.b](!1); }, ensure() { this[wt.b](!1), this.execute(); }}, Object(u.d)('confirm', [wt.b]))}; const Zt = zt; const Ft = (n('ba22'), Object(g.a)(Zt, Bt, Gt, !1, null, 'b86ab70c', null)); const Yt = Ft.exports; function Qt(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function Xt(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Qt(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qt(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const Kt = {
name: 'App',
computed: Xt({}, Object(u.e)('global', {bottom(t) { return t.bottom; }})),
components: {
Header: b, Play: yt, PlayList: $t, Confirm: Yt,
},
}; const te = Kt; const ee = (n('5c0b'), Object(g.a)(te, s, c, !1, null, null, null)); const ne = ee.exports; const re = (n('d3b7'), n('8c4f')); r.a.use(re.a); let ie; const oe = new re.a({mode: 'history', base: '/', routes: [{path: '/', redirect: '/recommend'}, {path: '/recommend', component() { return n.e('chunk-5fa69296').then(n.bind(null, '8bce')); }, children: [{path: ':id', component() { return n.e('chunk-2d21d511').then(n.bind(null, 'd17e')); }}]}, {path: '/singer', component() { return n.e('chunk-d29b1f78').then(n.bind(null, '5011')); }, children: [{path: ':serial', component() { return n.e('chunk-2d0e908b').then(n.bind(null, '8c8b')); }}]}, {path: '/rank', component() { return n.e('chunk-52d22c3c').then(n.bind(null, '948d')); }, children: [{path: ':id', component() { return n.e('chunk-76983986').then(n.bind(null, '75d0')); }}]}, {path: '/search', component() { return n.e('chunk-45ccca0a').then(n.bind(null, '79ce')); }}, {path: '/user', component() { return n.e('chunk-43c0dc61').then(n.bind(null, 'f79a')); }}]}); const ae = (n('d81d'), n('fb6a'), n('b0c0'), n('284c')); const se = n('ed08'); const ce = n('d567'); const le = n('54dc'); function ue(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function fe(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? ue(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ue(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const de = {
singers: [], count: 20, index: {}, reserve: {}, mores: {},
}; const pe = {find(t) { return function (e) { return t.singers.find((function (t) { return t.serial === e; })); }; }}; const he = {
getSingerDetail(t, e) {
 const n = t.commit; return Object(se.a)('https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg', Object.assign({singermid: e}, J.m)).then((function (t) {
 if (t.code === J.g) {
 const r = t.data; const i = r.list.map((function (t) {
 return new le.a({
authors: t.musicData.singer.map((function (t) { return t.name; })), songmid: t.musicData.songmid, albumname: t.musicData.albumname, albummid: t.musicData.albummid, songname: t.musicData.songname, interval: t.musicData.interval,
});
})); n(ce.d, {songs: i, serial: e}), n(ce.b, e), n(ce.c, e), n(ce.e, e);
}
}));
},
}; const ge = (ie = {}, Object(l.a)(ie, ce.a, (function (t, e) { t.singers = e; })), Object(l.a)(ie, ce.d, (function (t, e) { const n = e.songs; const r = e.serial; t.reserve = fe({}, t.reserve, Object(l.a)({}, r, n)); })), Object(l.a)(ie, ce.b, (function (t, e) { t.index = fe({}, t.index, Object(l.a)({}, e, 0)); })), Object(l.a)(ie, ce.c, (function (t, e) { t.mores = fe({}, t.mores, Object(l.a)({}, e, !0)); })), Object(l.a)(ie, ce.e, (function (t, e) { const n = t.singers.find((function (t) { return t.serial === e; })); const r = t.reserve[e]; const i = t.index[e]; n.songs = [].concat(Object(ae.a)(n.songs), Object(ae.a)(r.slice(i * t.count, (i + 1) * t.count))), t.index = fe({}, t.index, Object(l.a)({}, e, i + 1)), n.songs.length === r.length && (t.mores = fe({}, t.mores, Object(l.a)({}, e, !1))); })), ie); const me = {
namespaced: !0, state: de, getters: pe, actions: he, mutations: ge,
}; const be = (n('c740'), n('a434'), n('3ca3'), n('ddb0'), n('e587')); const ye = n('bc3a'); const ve = n.n(ye); const Oe = n('27ae'); function je(t, e, n) { return new Promise((function (r, i) { function o(a) { if (a < 3) try { ve.a.get(t, {params: e}).then((function (t) { const e = n(t.data); e ? o(a + 1) : r(t.data); })); } catch (s) { i(s); } else r(null); }o(1); })); } function we(t, e, n) { const r = e.song.songmid; return Promise.all([je('/api/vkey', {songmid: r}, (function (t) { return t.req_0.data.midurlinfo[0].vkey === ''; })), je('/api/lyric', {songmid: r}, (function () { return !1; }))]).then((function (r) { const i = Object(be.a)(r, 2); const o = i[0]; const a = i[1]; return o ? (n(e), t(N.p, Oe.Base64.decode(a.code === J.g ? a.lyric : '')), t(N.m, o.req_0.data.midurlinfo[0]), !0) : (t(N.n, e.song), !1); }), (function (t) { return Promise.reject(t); })); } let Pe; let Ae; let Ce; const Se = {prev(t, e) { return t === 0 ? e - 1 : t - 1; }, next(t, e) { return t === e - 1 ? 0 : t + 1; }}; const xe = {random(t, e) { const n = t.commit; n(N.i, !0); const r = parseInt(Math.random() * e.length, 10); function i(t) { const r = t.song; n(N.i, !1); const i = e.filter((function (t) { return t.canplay; })); const o = i.findIndex((function (t) { return t.songmid === r.songmid; })); n(N.b, {songs: i, index: o}); } return new Promise((function (t, o) { function a(s) { if (s === r) return n(N.i, !1), void t(!1); const c = Se.next(s, e.length); const l = e[c]; l.audioSrc === '' ? we(n, {song: l}, i).then((function (e) { e ? t(!0) : a(c); })).catch((function (t) { n(N.i, !1), o(t); })) : (i({song: l}), t(!0)); }e[r].audioSrc === '' ? a(Se.next(r, e.length)) : (i({song: e[r]}), t(!0)); })); }, toggle(t, e) { const n = t.state; const r = t.commit; const i = n.index; function o(t) { const e = t.current; r(N.i, !1), r(N.f, e); } return new Promise((function (t, a) { function s(c) { if (c === i) return o({current: c}), void t(); const l = n.songs[c]; const u = Se[e](c, n.songs.length); l.canplay ? l.audioSrc === '' ? we(r, {song: l, current: c}, o).then((function (e) { e ? t() : s(u); })).catch((function (t) { r(N.i, !1), a(t); })) : (o({current: c}), t()) : s(u); } if (n.songs.length !== 1 && n.mode !== J.a) if (r(N.i, !0), n.mode !== J.f) { if (n.mode === J.c) { for (var c = [], l = 0; l < n.songs.length; ++l)c.push(l); c.splice(i, 1), s(c.length === 1 ? c[0] : c[parseInt(Math.random() * c.length, 10)]); } } else s(Se[e](i, n.songs.length)); else t(); })); }, choose(t, e) { const n = t.state; const r = t.commit; const i = e.mutation; const o = e.song; function a(t) { const e = t.song; r(i, e); } return new Promise((function (t, e) { o.audioSrc === '' ? (r(N.i, !0), we(r, {song: o}, a).then((function (e) { e && n.recentPlay.findIndex((function (t) { return t.songmid === o.songmid; })) === -1 && r(N.l, o), t(e); })).catch((function (t) { e(t); })).finally((function () { r(N.i, !1); }))) : (a({song: o}), t(!0)); })); }}; const ke = (Pe = {}, Object(l.a)(Pe, N.a, (function (t, e) { const n = t.songs.findIndex((function (t) { return t.songmid === e.songmid; })); if (n === -1) { t.songs = [].concat(Object(ae.a)(t.songs), [e]); const r = t.loves.find((function (t) { return t.songmid === e.songmid; })); t.songs[t.songs.length - 1].love = !!r; }t.index = n === -1 ? t.songs.length - 1 : n, t.fullscreen = !0, t.playState = !0; const i = t.songs[t.index]; i.audioSrc = e.audioSrc, i.lyric = e.lyric; })), Object(l.a)(Pe, N.c, (function (t, e) { t.index = t.songs.findIndex((function (t) { return t.songmid === e.songmid; })), t.playState = !0; })), Object(l.a)(Pe, N.b, (function (t, e) { const n = e.songs; const r = e.index; t.index = r, t.songs = n, t.fullscreen = !0, t.playState = !0, t.songs.forEach((function (e, n) { const r = t.loves.find((function (t) { return t.songmid === e.songmid; })); if (r) { const i = t.songs[n]; i.love = !0, i.audioSrc = r.audioSrc, i.lyric = r.lyric; } })); })), Object(l.a)(Pe, N.e, (function (t, e) { t.songs = t.songs.filter((function (t, n) { return n !== e; })), t.songs.length !== 0 ? e < t.index ? t.index -= 1 : t.index === e && t.index === t.songs.length && (t.index = 0) : t.index = -1; })), Object(l.a)(Pe, N.g, (function (t, e) { t.fullscreen = e; })), Object(l.a)(Pe, N.h, (function (t, e) { t.index = e; })), Object(l.a)(Pe, N.k, (function (t, e) { t.playState = e; })), Object(l.a)(Pe, N.m, (function (t, e) { const n = e.vkey; const r = e.filename; const i = t.songs[t.index]; i.audioSrc = 'http://ws.stream.qqmusic.qq.com/'.concat(r, '?guid=7761666132&vkey=').concat(n); })), Object(l.a)(Pe, N.n, (function (t, e) { const n = e; n.canplay = !1; })), Object(l.a)(Pe, N.p, (function (t, e) { const n = t.songs[t.index]; n.lyric = e; })), Object(l.a)(Pe, N.o, (function (t, e) { const n = t.songs.find((function (t) { return t.songmid === e.songmid; })); n.love = !n.love; const r = t.loves.findIndex((function (t) { return t.songmid === n.songmid; })); n.love && r === -1 && t.loves.push(n), n.love || t.loves.splice(r, 1), localStorage.setItem(J.b, JSON.stringify(t.loves)); })), Object(l.a)(Pe, N.i, (function (t, e) { t.loading = e; })), Object(l.a)(Pe, N.f, (function (t, e) { t.index = e, t.playState = !0; })), Object(l.a)(Pe, N.d, (function (t) { t.index = -1, t.songs = [], t.playState = !1; })), Object(l.a)(Pe, N.j, (function (t, e) { t.mode = e; })), Object(l.a)(Pe, N.l, (function (t, e) { t.recentPlay = [e].concat(Object(ae.a)(t.recentPlay)), localStorage.setItem(J.d, JSON.stringify(t.recentPlay)); })), Pe); const De = {
playState: !1, fullscreen: !1, loading: !1, index: -1, songs: [], mode: J.f, recentPlay: JSON.parse(localStorage.getItem(J.d) || '[]'), loves: JSON.parse(localStorage.getItem(J.b) || '[]'),
}; const Ee = {song(t) { return t.index === -1 ? new le.a({}) : t.songs[t.index]; }}; const Te = {
namespaced: !0, state: De, getters: Ee, actions: xe, mutations: ke,
}; const _e = {bottom: '0px', searchHistory: JSON.parse(localStorage.getItem(J.e) || '[]')}; const Ie = (Ae = {}, Object(l.a)(Ae, jt.a, (function (t, e) { t.bottom = e; })), Object(l.a)(Ae, jt.b, (function (t, e) { Array.isArray(e) ? t.searchHistory = e : t.searchHistory = [e].concat(Object(ae.a)(t.searchHistory)), localStorage.setItem(J.e, JSON.stringify(t.searchHistory)); })), Ae); const Me = {namespaced: !0, state: _e, mutations: Ie}; const Ne = {show: !1}; const Le = Object(l.a)({}, at, (function (t, e) { t.show = e; })); const qe = {namespaced: !0, state: Ne, mutations: Le}; const He = n('2a9e'); const Re = n('9f12'); const Ue = function t(e) { const n = e.author; const r = e.desc; const i = e.image; const o = e.id; const a = e.songs; const s = void 0 === a ? [] : a; Object(Re.a)(this, t), this.author = n, this.desc = r, this.image = i, this.id = o, this.songs = s; }; const Ve = Ue; function $e(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function Be(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? $e(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $e(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } let Ge; const Je = {
cds: [], count: 20, index: {}, reserve: {}, mores: {},
}; const We = {find(t) { return function (e) { return t.cds.find((function (t) { return t.id === e; })); }; }}; const ze = {
getCdList(t) {
 const e = t.commit; return ve.a.get('/api/cdList', {params: J.h}).then((function (t) {
 if (t.data.code === J.g) {
 const n = t.data.data.list.map((function (t) {
 return new Ve({
id: t.dissid, author: {name: t.creator.name}, desc: t.dissname, image: t.imgurl,
});
})); e(He.a, n);
}
})).catch((function (t) { return Promise.reject(t); }));
},
getCdDetail(t, e) {
 const n = t.commit; return ve.a.get('/api/cdDetail', {params: {id: e}}).then((function (t) {
 const r = t.data.cdlist[0].songlist.map((function (t) {
 return new le.a({
authors: t.singer.map((function (t) { return t.name; })), songmid: t.mid, albumname: t.album.name, albummid: t.album.mid, songname: t.name, interval: t.interval,
});
})); n(He.d, {songs: r, id: e}), n(He.b, e), n(He.c, e), n(He.e, e);
}));
},
}; const Ze = (Ce = {}, Object(l.a)(Ce, He.a, (function (t, e) { t.cds = e; })), Object(l.a)(Ce, He.d, (function (t, e) { const n = e.songs; const r = e.id; t.reserve = Be({}, t.reserve, Object(l.a)({}, r, n)); })), Object(l.a)(Ce, He.b, (function (t, e) { t.index = Be({}, t.index, Object(l.a)({}, e, 0)); })), Object(l.a)(Ce, He.c, (function (t, e) { t.mores = Be({}, t.mores, Object(l.a)({}, e, !0)); })), Object(l.a)(Ce, He.e, (function (t, e) { const n = t.cds.find((function (t) { return t.id === e; })); const r = t.reserve[e]; const i = t.index[e]; n.songs = [].concat(Object(ae.a)(n.songs), Object(ae.a)(r.slice(i * t.count, (i + 1) * t.count))), t.index = Be({}, t.index, Object(l.a)({}, e, i + 1)), n.songs.length === r.length && (t.mores = Be({}, t.mores, Object(l.a)({}, e, !1))); })), Ce); const Fe = {
namespaced: !0, state: Je, getters: We, actions: ze, mutations: Ze,
}; const Ye = function t(e) { const n = e.id; const r = void 0 === n ? '' : n; const i = e.picUrl; const o = void 0 === i ? '' : i; const a = e.topTitle; const s = void 0 === a ? '' : a; const c = e.tops; const l = void 0 === c ? [] : c; const u = e.songs; const f = void 0 === u ? [] : u; Object(Re.a)(this, t), this.id = r, this.picUrl = o, this.topTitle = s, this.tops = l, this.songs = f; }; const Qe = Ye; const Xe = n('328f'); function Ke(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function tn(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? Ke(n, !0).forEach((function (e) { Object(l.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ke(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } let en; const nn = {
ranks: [], count: 20, index: {}, reserve: {}, mores: {},
}; const rn = {find(t) { return function (e) { return t.ranks.find((function (t) { return t.id === e; })); }; }}; const on = {
getRankList(t) {
 const e = t.commit; return Object(se.a)('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg', J.l).then((function (t) {
 if (t.code === J.g) {
 const n = t.data.topList.map((function (t) {
 return new Qe({
id: String(t.id), picUrl: t.picUrl, topTitle: t.topTitle, tops: t.songList.map((function (t) { return t; })),
});
})); e(Xe.a, n);
}
}));
},
getRankDetail(t, e) {
 const n = t.commit; return Object(se.a)('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg', Object.assign({topid: e}, J.k)).then((function (t) {
 if (t.code === J.g) {
 const r = t.songlist.map((function (t) {
 return new le.a({
albummid: t.data.albummid, albumname: t.data.albumname, interval: t.data.interval, songmid: t.data.songmid, songname: t.data.songname, authors: t.data.singer.map((function (t) { return t.name; })),
});
})); n(Xe.d, {songs: r, id: e}), n(Xe.b, e), n(Xe.c, e), n(Xe.e, e);
}
}));
},
}; const an = (Ge = {}, Object(l.a)(Ge, Xe.a, (function (t, e) { t.ranks = e; })), Object(l.a)(Ge, Xe.d, (function (t, e) { const n = e.songs; const r = e.id; t.reserve = tn({}, t.reserve, Object(l.a)({}, r, n)); })), Object(l.a)(Ge, Xe.b, (function (t, e) { t.index = tn({}, t.index, Object(l.a)({}, e, 0)); })), Object(l.a)(Ge, Xe.c, (function (t, e) { t.mores = tn({}, t.mores, Object(l.a)({}, e, !0)); })), Object(l.a)(Ge, Xe.e, (function (t, e) { const n = t.ranks.find((function (t) { return t.id === e; })); const r = t.reserve[e]; const i = t.index[e]; n.songs = [].concat(Object(ae.a)(n.songs), Object(ae.a)(r.slice(i * t.count, (i + 1) * t.count))), t.index = tn({}, t.index, Object(l.a)({}, e, i + 1)), n.songs.length === r.length && (t.mores = tn({}, t.mores, Object(l.a)({}, e, !1))); })), Ge); const sn = {
namespaced: !0, state: nn, getters: rn, actions: on, mutations: an,
}; const cn = {show: !1, title: '', execute() {}}; const ln = (en = {}, Object(l.a)(en, wt.b, (function (t, e) { t.show = e; })), Object(l.a)(en, wt.c, (function (t, e) { t.title = e; })), Object(l.a)(en, wt.a, (function (t, e) { t.execute = e; })), en); const un = {namespaced: !0, state: cn, mutations: ln}; r.a.use(u.a); const fn = new u.a.Store({
modules: {
singer: me, play: Te, global: Me, playList: qe, cd: Fe, rank: sn, confirm: un,
},
strict: !0,
}); const dn = fn; const pn = n('cf05'); const hn = n.n(pn); r.a.use(i.a, {loading: hn.a}), o.a.use(a.a), r.a.config.productionTip = !1, new r.a({router: oe, render(t) { return t(ne); }, store: dn}).$mount('#app');
},
'5c0b': function (t, e, n) {
const r = n('9c0c'); const i = n.n(r); i.a;
},
'5dff': function (t, e, n) {
n.d(e, 'a', (function () { return r; })), n.d(e, 'b', (function () { return i; })); var r = 'UPDATE_BOTTOM'; var i = 'UPDATE_SEARCH_HISTORY';
},
6261(t, e, n) {
const r = function () {
 const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', {staticClass: 'serach-input', style: {zIndex: t.songs.length === 0 ? 0 : 999}}, [n('div', {staticClass: 'input-wrapper'}, [t._m(0), n('input', {
directives: [{
name: 'model', rawName: 'v-model', value: t.search, expression: 'search',
}],
staticClass: 'input',
attrs: {type: 'text', placeholder: '搜索歌曲、歌手'},
domProps: {value: t.search},
on: {input(e) { e.target.composing || (t.search = e.target.value); }},
}), n('span', {
directives: [{
name: 'show', rawName: 'v-show', value: t.search !== '', expression: "search !== ''",
}],
staticClass: 'icon close',
on: {click: t.clear},
}, [n('i', {staticClass: 'icon-dismiss'})])]), n('div', {staticClass: 'song-wrapper'}, [n('ScrollView', {ref: 'scrollView', attrs: {dataSource: t.songs, handleScroll: t.handleScroll}}, [n('ul', {ref: 'list', staticClass: 'list'}, t._l(t.songs, (function (e, r) {
 return n('li', {
key: r, ref: 'song', refInFor: !0, staticClass: 'item', on: {click(n) { return t.handleClick(e); }},
}, [n('p', {class: e.canplay ? '' : 'disable'}, [n('span', {staticClass: 'icon'}, [n('i', {staticClass: 'icon-music'})]), n('span', [t._v(t._s(e.songname))]), t._v('-'), t._l(e.authors, (function (e) { return n('span', {key: e, staticClass: 'name'}, [t._v(t._s(e))]); }))], 2)]);
})), 0)])], 1)]);
}; const i = [function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('span', {staticClass: 'icon'}, [n('i', {staticClass: 'icon-search'})]); }]; const o = (n('a4d3'), n('99af'), n('4de4'), n('c740'), n('4160'), n('d81d'), n('b0c0'), n('e439'), n('dbb4'), n('b64b'), n('ac1f'), n('841c'), n('498a'), n('159b'), n('284c')); const a = n('2fa7'); const s = n('bc3a'); const c = n.n(s); const l = n('2f62'); const u = n('b4e2'); const f = n('db49'); const d = n('54dc'); const p = n('cf6f'); const h = n('5dff'); const g = n('4624'); function m(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function b(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? m(n, !0).forEach((function (e) { Object(a.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const y = g.a.bottom; const v = c.a.CancelToken; const O = {
name: 'SearchInput',
data() {
 return {
search: '', timer: null, songs: [], cancel: null, flag: !1, count: 20, pageIndex: 1, more: !0,
};
},
props: {callback: {type: Function, default() {}}},
mixins: [y],
watch: {
search(t) {
 const e = this; this.pageIndex = 1, this.more = !0, this.cancel && this.cancel('中断请求！'), this.timer && clearTimeout(this.timer); const n = t.trim(); n !== '' ? this.timer = setTimeout((function () {
 c.a.get('/api/search', {params: {search: n, count: e.count, pageIndex: e.pageIndex}, cancelToken: new v((function (t) { e.cancel = t; }))}).then((function (t) {
 if (t.data.code === f.g) {
 const n = t.data.data.song; e.songs = n.list.map((function (t) {
 return new d.a({
albummid: t.albummid, albumname: t.albumname, songmid: t.songmid, interval: t.interval, songname: t.songname, authors: t.singer.map((function (t) { return t.name; })),
});
})), Math.ceil(n.totalnum / e.count) === e.pageIndex ? e.more = !1 : e.pageIndex += 1;
}
}));
}), 300) : this.songs = [];
},
},
computed: b({}, Object(l.e)('global', {searchHistory(t) { return t.searchHistory; }}), {}, Object(l.e)('play', {loading(t) { return t.loading; }})),
components: {ScrollView: u.a},
methods: b({
clear() { this.search = ''; },
handleClick(t) { const e = this; t.canplay && !this.loading && this.choose({mutation: p.a, song: t}).then((function (n) { n && (e.callback(), e.bottom === '0px' && e[h.a]('60px'), e.searchHistory.findIndex((function (e) { return e === t.songname; })) === -1 && e[h.b](t.songname)); })); },
setSearch(t) { this.search = t; },
handleScroll(t) {
 const e = this; this.more && this.$refs.list.offsetHeight + t.y <= this.$refs.scrollView.$el.offsetHeight + 80 && !this.flag && (this.flag = !0, c.a.get('/api/search', {params: {search: this.search.trim(), count: this.count, pageIndex: this.pageIndex}}).then((function (t) {
 if (t.data.code === f.g) {
 const n = t.data.data.song; Math.ceil(n.totalnum / e.count) === e.pageIndex ? e.more = !1 : e.pageIndex += 1; const r = n.list.map((function (t) {
 return new d.a({
albummid: t.albummid, albumname: t.albumname, songmid: t.songmid, interval: t.interval, songname: t.songname, authors: t.singer.map((function (t) { return t.name; })),
});
})); return e.songs = [].concat(Object(o.a)(e.songs), Object(o.a)(r)), void e.$nextTick((function () { e.$refs.scrollView.refresh(), e.flag = !1; }));
}e.flag = !1;
})).catch((function () { e.flag = !1; })));
},
}, Object(l.b)('play', ['choose']), {}, Object(l.d)('global', [h.a, h.b])),
}; const j = O; const w = (n('8385'), n('2877')); const P = Object(w.a)(j, r, i, !1, null, '3e117a12', null); e.a = P.exports;
},
'68da': function (t, e, n) {
const r = n('2e5d'); const i = n.n(r); i.a;
},
'6cc2': function (t, e, n) {},
'723a': function (t, e, n) {},
'781b': function (t, e, n) {
const r = function () { const t = this; const e = t.$createElement; t._self._c; return t._m(0); }; const i = [function () { const t = this; const e = t.$createElement; const r = t._self._c || e; return r('div', {staticClass: 'loading'}, [r('img', {attrs: {src: n('5284'), alt: 'loading'}}), r('p', {staticClass: 'title'}, [t._v('加载中...')])]); }]; const o = {name: 'Loading'}; const a = o; const s = (n('abb9'), n('2877')); const c = Object(s.a)(a, r, i, !1, null, '3ce2dad5', null); e.a = c.exports;
},
'7ed3': function (t, e, n) {
const r = n('ba3c'); const i = n.n(r); i.a;
},
'81d6': function (t, e, n) {
const r = function () {
 const t = this; const e = t.$createElement; const n = t._self._c || e; return n('transition', {attrs: {name: 'tip'}}, [n('div', {
directives: [{
name: 'show', rawName: 'v-show', value: t.active, expression: 'active',
}],
staticClass: 'tip',
}, [n('span', {staticClass: 'icon'}, [n('i', {staticClass: 'icon-ok'})]), n('span', [t._v('已添加到播放列表')])])]);
}; const i = []; const o = {name: 'Tip', props: {active: {type: Boolean, required: !0}}}; const a = o; const s = (n('f58f'), n('2877')); const c = Object(s.a)(a, r, i, !1, null, '18295e30', null); e.a = c.exports;
},
8385(t, e, n) {
const r = n('51b5'); const i = n.n(r); i.a;
},
'8a8e': function (t, e, n) {
const r = n('4776'); const i = n.n(r); i.a;
},
'915b': function (t, e, n) {
const r = n('6cc2'); const i = n.n(r); i.a;
},
'91a3': function (t, e, n) {
const r = n('d7c6'); const i = n.n(r); i.a;
},
'92e8': function (t, e, n) {
const r = n('2cfe'); const i = n.n(r); i.a;
},
'9c0c': function (t, e, n) {},
'9e7e': function (t, e, n) {},
a0d2(t, e, n) {},
a232(t, e, n) {},
a8cb(t, e, n) {},
abb9(t, e, n) {
const r = n('c405'); const i = n.n(r); i.a;
},
adc0(t, e, n) {
const r = n('393b'); const i = n.n(r); i.a;
},
b4e2(t, e, n) {
const r = function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', {ref: 'scroll-container', staticClass: 'scroll-container'}, [t._t('default')], 2); }; const i = []; const o = (n('a9e3'), n('229e')); const a = {
name: 'ScrollView',
data() { return {scroll: null}; },
props: {
handleScroll: {type: Function, default() {}},
probeType: {type: Number, default: 3},
click: {type: Boolean, default: !0},
bounce: {
type: Object,
default() {
 return {
top: !0, bottom: !0, left: !0, right: !0,
};
},
},
dataSource: {type: Array, default() { return []; }},
},
watch: {dataSource() { this.refresh(); }},
methods: {refresh() { const t = this; this.$nextTick((function () { t.scroll.refresh(); })); }, scrollToElement(t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; this.scroll.scrollToElement(t, e); }, initScroll() { this.scroll = new o.a(this.$refs['scroll-container'], {probeType: this.probeType, click: this.click, bounce: this.bounce}), this.scroll.on('scroll', this.handleScroll); }},
mounted() { this.initScroll(); },
beforeDestroy() { this.scroll.destroy(); },
}; const s = a; const c = (n('5275'), n('2877')); const l = Object(c.a)(s, r, i, !1, null, '2f9759e8', null); e.a = l.exports;
},
ba22(t, e, n) {
const r = n('a0d2'); const i = n.n(r); i.a;
},
ba3c(t, e, n) {},
c405(t, e, n) {},
c7d8(t, e, n) {
const r = function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', {staticClass: 'searchHistory'}, [n('ScrollView', {ref: 'scrollView', attrs: {dataSource: t.searchHistory}}, [n('ul', {staticClass: 'list'}, t._l(t.searchHistory, (function (e, r) { return n('li', {key: r, staticClass: 'item', on: {click(n) { return t.setSearch(e); }}}, [n('p', [t._v(t._s(e))]), n('span', {staticClass: 'icon', on: {click(e) { return e.stopPropagation(), e.preventDefault(), t.remove(r); }}}, [n('i', {staticClass: 'icon-delete'})])]); })), 0)])], 1); }; const i = []; const o = (n('a4d3'), n('4de4'), n('4160'), n('e439'), n('dbb4'), n('b64b'), n('159b'), n('2fa7')); const a = n('2f62'); const s = n('b4e2'); const c = n('5dff'); const l = n('4624'); function u(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function f(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? u(n, !0).forEach((function (e) { Object(o.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const d = l.a.bottom; const p = {
name: 'SearchHistory', mixins: [d], props: {setSearch: {type: Function, required: !0}}, computed: f({}, Object(a.e)('global', {searchHistory(t) { return t.searchHistory; }})), components: {ScrollView: s.a}, methods: f({remove(t) { this[c.b](this.searchHistory.filter((function (e, n) { return n !== t; }))); }, refresh() { this.$refs.scrollView.refresh(); }}, Object(a.d)('global', [c.b])),
}; const h = p; const g = (n('adc0'), n('2877')); const m = Object(g.a)(h, r, i, !1, null, '8de35632', null); e.a = m.exports;
},
c908(t, e, n) {
const r = n('d12c'); const i = n.n(r); i.a;
},
c99d(t, e, n) {
const r = n('4cdd'); const i = n.n(r); i.a;
},
cecb(t, e, n) {
const r = n('a232'); const i = n.n(r); i.a;
},
cf05(t, e, n) { t.exports = `${n.p}public/img/logo.cbc0e020.png`; },
cf6c(t, e, n) {
const r = n('9e7e'); const i = n.n(r); i.a;
},
cf6f(t, e, n) {
n.d(e, 'a', (function () { return r; })), n.d(e, 'b', (function () { return i; })), n.d(e, 'e', (function () { return o; })), n.d(e, 'g', (function () { return a; })), n.d(e, 'h', (function () { return s; })), n.d(e, 'm', (function () { return c; })), n.d(e, 'k', (function () { return l; })), n.d(e, 'n', (function () { return u; })), n.d(e, 'i', (function () { return f; })), n.d(e, 'f', (function () { return d; })), n.d(e, 'c', (function () { return p; })), n.d(e, 'd', (function () { return h; })), n.d(e, 'j', (function () { return g; })), n.d(e, 'p', (function () { return m; })), n.d(e, 'l', (function () { return b; })), n.d(e, 'o', (function () { return y; })); var r = 'ADD'; var i = 'BATCH_ADD'; var o = 'DELETE'; var a = 'UPDATE_FULLSCREEN'; var s = 'UPDATE_INDEX'; var c = 'UPDATE_SONG_AUDIOSRC'; var l = 'UPDATE_PLAYSTATE'; var u = 'UPDATE_SONG_CANPLAY'; var f = 'UPDATE_LOADING'; var d = 'TOGGLE'; var p = 'CHOOSE'; var h = 'CLEAR'; var g = 'UPDATE_MODE'; var m = 'UPDATE_SONG_LYRIC'; var b = 'UPDATE_RECENT_PLAYBACK'; var y = 'UPDATE_SONG_LOVE';
},
d12c(t, e, n) {},
d567(t, e, n) {
n.d(e, 'a', (function () { return r; })), n.d(e, 'e', (function () { return i; })), n.d(e, 'd', (function () { return o; })), n.d(e, 'b', (function () { return a; })), n.d(e, 'c', (function () { return s; })); var r = 'BATCH_ADD'; var i = 'UPDATE_SONGS_DATA'; var o = 'UPDATE_RESERVE'; var a = 'UPDATE_INDEX'; var s = 'UPDATE_MORE';
},
d7c6(t, e, n) {},
db49(t, e, n) {
n.d(e, 'o', (function () { return s; })), n.d(e, 'h', (function () { return c; })), n.d(e, 'n', (function () { return l; })), n.d(e, 'm', (function () { return u; })), n.d(e, 'l', (function () { return f; })), n.d(e, 'k', (function () { return d; })), n.d(e, 'i', (function () { return p; })), n.d(e, 'g', (function () { return h; })), n.d(e, 'j', (function () { return g; })), n.d(e, 'f', (function () { return m; })), n.d(e, 'c', (function () { return b; })), n.d(e, 'a', (function () { return y; })), n.d(e, 'e', (function () { return v; })), n.d(e, 'd', (function () { return O; })), n.d(e, 'b', (function () { return j; })); n('a4d3'), n('4de4'), n('4160'), n('e439'), n('dbb4'), n('b64b'), n('159b'); const r = n('2fa7'); function i(t, e) { const n = Object.keys(t); if (Object.getOwnPropertySymbols) { let r = Object.getOwnPropertySymbols(t); e && (r = r.filter((function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable; }))), n.push.apply(n, r); } return n; } function o(t) { for (let e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? i(n, !0).forEach((function (e) { Object(r.a)(t, e, n[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)); })); } return t; } const a = {
g_tk: 1928093487, inCharset: 'utf-8', outCharset: 'utf-8', notice: 0, format: 'jsonp', platform: 'yqq', needNewCode: 0,
}; var s = o({}, a, {platform: 'h5', uin: 0, needNewCode: 1}); var c = {
platform: 'yqq', hostUin: 0, sin: 0, ein: 29, sortId: 5, needNewCode: 0, categoryId: 1e7, rnd: Math.random(), format: 'json',
}; var l = o({}, a, {
channel: 'singer', page: 'list', key: 'all_all_all', pagesize: 100, pagenum: 1, hostUin: 0,
}); var u = o({}, a, {
hostUin: 0, order: 'listen', begin: 0, num: 80, songstatus: 1,
}); var f = o({}, a, {uin: 0, needNewCode: 1, platform: 'h5'}); var d = o({}, a, {
needNewCode: 1, uin: 0, tpl: 3, page: 'detail', type: 'top', platform: 'h5',
}); var p = o({}, a, {uin: 0, needNewCode: 1, platform: 'h5'}); var h = 0; var g = {
A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26,
}; var m = 0; var b = 1; var y = 2; var v = 'SEARCH_HISTORY'; var O = 'RECENT_PLAYBACK'; var j = 'LOVE';
},
ed08(t, e, n) {
n.d(e, 'a', (function () { return o; })); n('99af'), n('4160'), n('a15b'), n('0d03'), n('b64b'), n('d3b7'), n('159b'); const r = n('2fa7'); function i(t) { const e = []; return Object.keys(t).forEach((function (n) { const r = t[n]; if (Array.isArray(r)) for (let i = 0; i < r.length; ++i)e.push(''.concat(n, '=').concat(r[i])); else e.push(''.concat(n, '=').concat(r)); })), e.join('&'); } function o(t) { const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'jsonpCallback'; return new Promise((function (o, a) { try { const s = document.createElement('script'); const c = 'callback_'.concat(Date.now()); window[c] = function (t) { delete window[c], document.body.removeChild(s), o(t); }; const l = ''.concat(t, '?').concat(i(Object.assign({}, e, Object(r.a)({}, n, c)))); s.src = l, document.body.appendChild(s); } catch (u) { a(u); } })); }
},
f255(t, e, n) {
n.d(e, 'b', (function () { return r; })), n.d(e, 'c', (function () { return i; })), n.d(e, 'a', (function () { return o; })); var r = 'UPDATE_CONFIRM_SHOW'; var i = 'UPDATE_CONFIRM_TITLE'; var o = 'UPDATE_CONFIRM_EXECUTE';
},
f58f(t, e, n) {
const r = n('723a'); const i = n.n(r); i.a;
},
}));
// # sourceMappingURL=app.12a1d0ae.js.map
