function FindProxyForURL(url, host)
{
    if (dnsDomainIs(host, "hostco.ru"))
        return "SOCKS5 tower.local:1080";
    else return "DIRECT";
}
