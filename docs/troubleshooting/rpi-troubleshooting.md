# Raspberry Pi troubleshooting

description
This troubleshooting page provides links to discusstions in the related topics

TOC
1. I2C DACs
2. Wifi 
3. Security
4. TBD

1. I2C DACs
1.1 Enabling your DAC
Basicly editing config.txt file will do:
http://www.runeaudio.com/forum/can-t-enable-hifiberry-dac-plus-or-i2s-t1250.html

2. Wifi
2.1 Creating an access point (wifi hotspot)
Basic approach here: (using create_ap script)
http://www.runeaudio.com/forum/hostapd-configuration-wifi-hotspot-setup-t567.html
A more complicated case:
http://www.runeaudio.com/forum/struggling-with-wifi-access-point-t3004.html

3. Security
3.1 Setting a firewall for a Internet facing Rpi
This is the case when your network is not behide a router. The problem is, anyone can access your RuneUI (and more) with just typing your IP in his browser. To check this, just try to log in to RuneUI with your Rpi IP address set in your mobile phone's internet browser. Make sure you are not connected to the local network through Wifi.
Solution:
http://www.runeaudio.com/forum/problem-ui-is-available-from-outside-t3047.html


