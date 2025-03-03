var isDev = window.location.hostname.match(/localhost|192.168/)
window.$ou = {

    apiBaseUrl: 'https://api.oneu66.com',
    wsBaseUrl: 'wss://api.oneu66.com/game/ws',
    TMAUrl: 'https://t.me/tmxiongBot/oneU',
    manifestUrl: 'https://oneu-tom.github.io/tonconnect-manifest.json',



    termsOfService: 'https://oneu.com/terms-of-services',
    // 时间差
    secondOffset: 0,
    canSkipLogin: false,
    // 商户id
    tenantId: '131847238522515456',
    // 最低提现佣金
    minCommission: 10,
    // 最大购买数量
    maxPurchaseCount: 10000,
    version: '1.6.2',
    // 小游戏开奖时间
    miniGameDrawTimeSeconds: 30
};