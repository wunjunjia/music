const express = require('express');
const encoding = require('encoding');
const https = require('https');
const axios = require('axios');

const router = express.Router();

const instance = axios.create({
  headers: {
    Origin: 'https://y.qq.com',
    Referer: 'https://y.qq.com/portal/player.html',
    'Sec-Fetch-Mode': 'cors',
  },
});

router.get('/songList', (req, res, next) => {
  const paramString = Object.keys(req.query).reduce((result, key) => {
    result.push(`${key}=${req.query[key]}`);
    return result;
  }, []).join('&');

  https.get(`https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?${paramString}`, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com',
    },
  }, (result) => {
    let data = '';
    const buf = [];
    let length = 0;
    result.on('data', (chunk) => {
      buf.push(chunk);
      length += chunk.length;
      data += chunk.toString();
    });
    result.on('end', () => {
      res.setHeader('Content-Type', 'application/json; charset=utf8');
      res.send(encoding.convert(Buffer.concat(buf, length), 'UTF-8', 'GB2312'));
    });
  });
});

router.get('/vkey', (req, res, next) => {
  instance.get('https://u.y.qq.com/cgi-bin/musicu.fcg', {
      params: {
        '-': 'getplaysongvkey925406070364283',
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        data: {
          req: {
            module: 'CDN.SrfCdnDispatchServer',
            method: 'GetCdnDispatch',
            param: {
              guid: '7761666132',
              calltype: 0,
              userip: '',
            },
          },
          req_0: {
            module: 'vkey.GetVkeyServer',
            method: 'CgiGetVkey',
            param: {
              guid: '7761666132',
              songmid: [req.query.songmid],
              songtype: [0],
              uin: '0',
              loginflag: 1,
              platform: '20',
            },
          },
          comm: {
            uin: 0,
            format: 'json',
            ct: 24,
            cv: 0,
          },
        },
      },
    })
    .then((result) => {
      res.json(result.data);
    });
});

router.get('/lyric', (req, res, next) => {
  instance.get('https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg', {
      params: {
        '-': 'MusicJsonCallback_lrc',
        pcachetime: Date.now(),
        songmid: req.query.songmid,
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf8',
        notice: 0,
        platform: 'yqq.json',
        needNewCode: 0,
      },
    })
    .then((result) => {
      res.json(result.data);
    });
});

module.exports = router;
