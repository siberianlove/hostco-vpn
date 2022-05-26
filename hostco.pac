function FindProxyForURL(url, host)
{
    if (isInNet(host, "10.0.0.0", "255.0.0.0"))
        return "SOCKS5 tower.local:1080";
    else return "DIRECT";
}
