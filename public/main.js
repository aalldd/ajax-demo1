console.log('我是main.js');
// 挑战2 
getjs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('error');
    }
    request.send()
}
// 挑战1
getcss.onclick = () => {
    // 第一步 实例化httprequest对象
    const request = new XMLHttpRequest()
    // 调用open方法
    request.open('GET', '/style.css')  // readystate =1
    // 监听成功和失败
    // request.onload = () => {
    //     console.log(request.response);
    //     // 创建style标签
    //     const style=document.createElement('style')
    //     // 填写style内容
    //     style.innerHTML=request.response
    //     // 插到头里面
    //     document.head.appendChild(style)
    // }
    request.onreadystatechange = () => {
        console.log(request.readyState);  // readystate=2,3,4 过程贼快
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                // 填写style内容
                style.innerHTML = request.response
                // 插到头里面
                document.head.appendChild(style)
            }else{
                alert('加载css失败')
            }

        }
    }

    // send
    request.send()
}
// 挑战3
getHtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('error');
    }
    request.send()
}
// 挑战4  加载xml
getXml.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(request.responseXML);
            const dom=request.responseXML
            const text=dom.getElementsByTagName('warning')[0].textContent.trim()
            xmlContent.textContent=text
        }
    }
    request.send()
}
// 挑战5 加载json
getJson.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(request.response);
            const bool=JSON.parse(request.response)
            myname.textContent=bool.name
        }
    }
    request.send()
}
let n=1
getNextPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            const array=JSON.parse(request.response)
            array.forEach(item=>{
                const li =document.createElement('li')
                li.textContent=item.id
                xxx.appendChild(li)
            })
            n++
        }  
    }
    request.send()
}

