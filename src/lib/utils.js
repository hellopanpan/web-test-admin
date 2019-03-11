export default {
  // 格式化金额
  formatAmount(amount) {
    if (amount == null || amount == undefined) return
    return Number(amount).toFixed(2)
  },

  // 格式化日期，fmt: yyyy-MM-dd hh:mm:ss
  formatDate(second, fmt, isMs) {
    if (!second || !fmt || isNaN(second)) {
      return ''
    }
    let date = new Date(isMs ? second : second * 1000)
    let tObj = {
      M: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds()
    }
    fmt = fmt.replace(/y+/, date.getFullYear())
    for (let key in tObj) {
      if (new RegExp(`(${key}+)`).test(fmt)) {
        if (RegExp.$1.length == 1) {
          fmt = fmt.replace(RegExp.$1, tObj[key])
        } else {
          fmt = fmt.replace(
            RegExp.$1,
            ('00' + tObj[key]).slice((tObj[key] + '').length)
          )
        }
      }
    }
    return fmt
  },

  // 获取值对应的index
  getIndex(val, list, valueField) {
    if (val == null || !list || !list.length) {
      return -1
    }
    for (let i = 0, len = list.length; i < len; i++) {
      if (val == list[i][valueField]) {
        return i
      }
    }
    return -1
  },

  showToast(msg, type = 'success') {
    if (!msg) return
    this.$message({
      message: msg,
      type: type
    })
  },

  getMaskTel(tel) {
    return (tel && tel.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')) || ''
  },

  formatByFileds(obj, fomatArr) {
    if (!obj || !fomatArr || !Array.isArray(fomatArr)) {
      return
    }
    fomatArr.forEach(key => {
      if (obj[key]) {
        obj[key] = this.formatAmount(obj[key])
      }
    })
  },

  toFixed(num, s) {
    var times = Math.pow(10, s)
    var des = num * times + 0.5
    des = parseInt(des, 10) / times
    return des + ''
  },

  getQueryString(str, name) {
    if (!str || !name) return
    var reg = new RegExp(`${name}=([^&]+)`, 'g');
    var arr = str.match(reg);
    if (arr) {
      return (arr[arr.length - 1] || '').replace(`${name}=`, '') || '';
    }
  },

  getCookieString(str, name) {
    if (!str || !name) return
    var reg = new RegExp(`${name}=([^;]+)`, 'g');
    var arr = str.match(reg);
    if (arr) {
      return (arr[arr.length - 1] || '').replace(`${name}=`, '') || '';
    }
  },

  // 包装神策埋点数据
  saData(name, options) {
    let ua = navigator.userAgent.toLowerCase();
    let isWeibo = /weibo/i.test(ua); //是否在微博中
    let isWeixin = /micromessenger/i.test(ua); //是否在微信中
    let isQQ = /qq/i.test(ua); // 是否在qq中
    let isJumei = /jumei/i.test(ua);
    let plat = 'others';
    if (isWeibo) {
      plat = 'weibo'
    } else if (isWeixin) {
      plat = 'weixin'
    } else if (isQQ) {
      plat = 'qq'
    } else if (isJumei) {
      plat = 'jumei'
    }

    let defaultProp = {
      name: 'jumei0get',
      plat: plat,
      source: localStorage.sceneSrc || 'jumeiFinance'
    }
    if (window.jmjr_sa) {
      window.jmjr_sa.track(name, Object.assign({}, defaultProp, options))
    }
  },

  // 截取num位小数
  formatDecimal(amount, num) {
    if (!amount || !num || num < 0) {
      return 0
    }
    let base = Math.pow(10, num)
    amount = Math.floor(amount * base) / base
    return amount.toFixed(num)
  },

  // app分享设置
  invoke: function (api, param, options) {
    var defaultOptions = {
      title: '',
      description: '',
      imgUrl: 'default',
      webpageUrl: ''
    }
    var opts = Object.assign({}, defaultOptions, options)
    var val = `share&title=${opts.title}&description=${opts.description}&image=${opts.imgUrl}&webpageUrl=` + encodeURIComponent(opts.webpageUrl);

    var ua = navigator.userAgent;
    var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1;
    var isIphone = ua.indexOf('iPhone') > -1;
    var isJumei = /jumei/i.test(navigator.userAgent) ? true : false;
    if (isJumei && isIphone) {
      var url = 'jmweb://' + api + (param ? '?' + param + '=' + val : (val ? '?' + val : ''));
      top.location.href = url;
    }
    if (isJumei && isAndroid) {
      var hybridMethod = 'JMWebViewAndroid.' + api + '(' + (val ? 'val' : '') + ')';
      try {
        eval(hybridMethod);
      }
      catch (e) {
        console.error('AndroidPlugin.ts', e.message);
      }
    }
  },
  // 微博中打开
  jumpInWeibo(url, callback) {
    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.display = 'none';
    iframe.style.padding = '0';
    iframe.style.margin = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);
    if (callback) {
      window.checkOpen(callback);
    }
    setTimeout(function () {
      document.body.removeChild(iframe);
    }, 3000)
  }
}
