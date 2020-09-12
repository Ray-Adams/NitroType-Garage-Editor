(async () => {
    let garageSections = prompt('Enter the number of garage sections you would like to have in total (NOTE: There are 30 individual garage slots per section):');
    let uhashParam = `uhash=${encodeURI(document.cookie.match('(^|;) *ntuserrem=([^;]*)')[2])}`, bodyContent = '';
  
    for (i = 0; i < garageSections * 30; i++) {
      bodyContent += 'garage%5B' + i + '%5D=&';
    }
    bodyContent += uhashParam;
  
    await fetch("https://www.nitrotype.com/api/cars-arrange", {
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "body": bodyContent,
      "method": "POST",
      "mode": "cors"
    })
    
    alert("Logging you out... Please log back in to see changes.");

    await fetch("https://www.nitrotype.com/api/logout", {
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "body": uhashParam,
      "method": "POST",
      "mode": "cors"
    })

    location.reload();
  })()
