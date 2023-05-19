async function get_login1(){
    dat = document.getElementsByClassName("textinput");
    username_get = dat[0].value;
    password_get = dat[1].value;

    return fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'kminchelle',
          password: '0lelplR',
          // expiresInMins: 60, // optional
        })
      })
      .then(res => res.json())
      
}

async function fetchData(){
    const out = await get_login1();
    localStorage.setItem("acess-token",out['token']);
    let token = localStorage.getItem("acess-token");

    if(token){
        window.location.assign("page2.html");
        
    }
}

async function goToPage2(){
    let token = localStorage.getItem("acess-token");
    if(token){
        window.location.assign("page2.html");
    }
    else{
        window.location.assign("index.html");
       
    }
}

