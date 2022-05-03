function FindProxyForURL(url, host)
{
    return 'SOCKS 192.168.1.120:1080';
    //if (dnsDomainIs(host, ".hostco.ru"))
    //    return "SOCKS 192.168.1.120:1080";
    //else return "DIRECT";
}