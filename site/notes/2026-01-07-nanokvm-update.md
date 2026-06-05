---
layout: post
category: posts
tags:
  - notes
  - nanokvm
  - linux
title: Updating the Sipeed NanoKVM without internet access.
---

A while ago I purchased one of the Sipeed NanoKVM devices, after previously using a Raspberry Pi 4 with a HDMI-CSI bridge running Pi-KVM, 
but while the formfactor & price was much nicer (I paid about £33 at the end of 2024), given that at the time atleast, 
the software was closed source, it was slightly too cheap to be true & from a company I had never heard of before[^1], based in China 
(a country I'll assume you know has a less than spectacular data privacy track record), and also, the fact I'll be giving this device full,
unattended, 24/7 access to my home server, which has access to a lot of my sensitive information, and using said device to type in my root
password, I decided to put it on its own VLAN with no access to the internet, because well, it doesn't need it anyway. This comes with a
little bit of a problem, in that, you can't software update the thing. Now, in version 2.3.1 (the latest at time of writing), they did add
an offline update functionality, but, that only works if you're already running 2.3.1, which would defeat the need to upgrade the thing in
the first place.

[^1]: FWIW: I don't think Sipeed have any malicious intent, just have limited resources & are a bit careless. 
      Which isn't ideal, hanlon's razor & all that, but I think they're trying to get better, even if their documentation & transparency 
      (ie. around the onboard microphone) has been really bad historically, and still isn't great.

## Steps

1. Get https://cdn.sipeed.com/nanokvm/latest.json. Copy the `name` field, put the name field on the end of `https://cdn.sipeed.com/nanokvm/`, and download that file.
     <!-- hope they don't try and XSS me -->
     1. Alternatively, just click this

   <div id="sipeed_update_fetch"><button onclick="fetch('https://cdn.sipeed.com/nanokvm/latest.json').then(r => r.json()).then(({name, sha512}) => document.getElementById('sipeed_update_fetch').innerHTML = `<a href='https://cdn.sipeed.com/nanokvm/${name}'>${name}</a> (SHA512: <kbd>${sha512}</kbd>)`).catch(e => alert('Sorry, error! ' + e))">Do it for me</button> </div>

3. Optional: Validate the SHA512 sum.
    1. **\*nixes:** `openssl sha512 -binary -- nanokvm_2.3.1.tar.gz | base64`
    2. **PowerShell:** `[System.Convert]::ToBase64String(@(((Get-FileHash -Algorithm SHA512 | Select -ExpandProperty hash)  -split '([A-F0-9]{2})') | foreach-object { if ($_) {[System.Convert]::ToByte($_,16)}}))` (enter path when it asks, just hit enter second time)
4. Copy the file to your NanoKVM with `scp Downloads/nanokvm_2.3.1.tar.gz root@NANOKVM_IP:/tmp/update.tar.gz` (default root password is `root`)
5. Log in via SSH as root
6. Run the following:
    1. `rm -rf /root/old/` (don't worry if this fails)
    2. `mkdir -p /root/.kvmcache; cd /root/.kvmcache` (make temporary directory)
    3. `gunzip -c /tmp/update.tar.gz | tar xv` (unpack archive)
    4. `mv /kvmapp/ /root/old` (backup old version)
    5. `mv nanokvm_* /kvmapp` (install new version)
    6. `chmod -R 755 /kvmapp` (set permissions)
    8. `reboot`
