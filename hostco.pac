function FindProxyForURL(url, host)
{
    if (dnsDomainIs(host, "hostco.ru"))
        return "SOCKS5 192.168.1.120:1080";
    else return "DIRECT";
}
