function set_cookie(name, value){
    document.cookie = `${name}=${encodeURI(value)};`;
}
function get_cookie(name){
    if(document.cookie){
        const local_cookie = decodeURI(document.cookie).split(';');
        let i, key, total;
        for(i=0;i<local_cookie.length;i++){
            key = (local_cookie[i].split('=')[0]).trim();
            if(name==key) total = local_cookie[i].split('=')[1];
        }
        return total;
    }
}

export {set_cookie, get_cookie}