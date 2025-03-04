var isDev = window.location.hostname.match(/localhost|192.168/)
window.$ou = {
    // api接口地址
    apiBaseUrl: 'https://api.oneu66.com',
    // ws接口地址
    wsBaseUrl: 'wss://api.oneu66.com/game/ws',
    // TG邀请链接
    TMAUrl: 'https://t.me/tmxiongBot/oneU',
    // ton钱包连接时显示图标与名称
    manifestUrl: 'https://oneu-tom.github.io/tonconnect-manifest.json',
    // 商户id
    tenantId: '131847238522515456',


    termsOfService: 'https://oneu.com/terms-of-services',
    // 时间差
    secondOffset: 0,
    // 最低提现佣金
    minCommission: 10,
    // 最大购买数量
    maxPurchaseCount: 10000,
    version: '1.6.2',
    // 小游戏开奖时间
    miniGameDrawTimeSeconds: 30
};