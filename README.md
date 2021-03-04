# NitroType Garage Editor
A NitroType bookmarklet that adds or removes garage sections.

## DISCLAIMER
Using this script will **rearrange** your garage after each use.

## Installation
Copy and paste the code below into the URL section of a new bookmark. (Triple-click to select all.)
```javascript
javascript:(async(a,b=prompt`Enter the number of garage sections you would like to have in total (NOTE: There are 30 individual garage slots per section):`,c='',d)=>{for(d=0;d<b*30;d++)c+=`garage%5B${d}%5D=&`;await fetch('https://www.nitrotype.com/api/cars-arrange',{'headers':{'Content-Type':'application/x-www-form-urlencoded'},'body':c+a,'method':'POST','mode':'cors'});alert`Logging you out... Please log back in to see changes.`;await fetch('https://www.nitrotype.com/api/logout',{'headers':{'Content-Type':'application/x-www-form-urlencoded'},'body':a,'method':'POST','mode':'cors'});location.reload()})(`uhash=${encodeURI(document.cookie.match`(^|;) *ntuserrem=([^;]*)`[2])}`)
```
**NOTE**: You can view the source file here: [garage_editor.js](../master/garage_editor.js)

## Usage
1. Login to Nitro Type at https://www.nitrotype.com/login
2. Click on the bookmarklet, and a prompt will appear, asking for the amount of garage sections you would like to have in total (NOTE: There are 30 individual garage slots per section).
3. After answering the prompt, logout of your NitroType account and log back in to see changes.

## Limitations
The maximum amount of garage sections you can have on one account is **30**.

## Compatibility
Browser | Supported
--------|------------
Chrome  |     ✓
Firefox |     ✓
Safari  |     ✓
