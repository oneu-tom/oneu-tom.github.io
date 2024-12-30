var isDev = window.location.hostname.match(/localhost|192.168/)
window.$ou = {
    termsOfService: 'https://oneu.com/terms-of-services',
    // apiBaseUrl: isDev ? "http://localhost:5173" : 'http://ec2-13-55-71-77.ap-southeast-2.compute.amazonaws.com',
    // apiBaseUrl: 'http://ec2-13-55-71-77.ap-southeast-2.compute.amazonaws.com',
    apiBaseUrl: 'https://oneu.tv',
    wsBaseUrl: 'wss://oneu.tv/ws',
    TMAUrl: 'https://t.me/tmxiongBot/oneU',
    secondOffset: 0,
    manifestUrl: 'https://oneu-tom.github.io/tonconnect-manifest.json',
    canSkipLogin: true,
    // 商户id
    tenantId: '108432298226089985'
};