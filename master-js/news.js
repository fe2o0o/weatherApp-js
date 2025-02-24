(async function () {
    const news_container = document.getElementById('news_container')
    const my_http = await fetch('../weatherApp-js/news.json')

    if (my_http.status == 200) {
        // console.log("res news ", await my_http.json());
        const news_data = await my_http.json();

        displayNews(news_data)
    }




    function displayNews(data) {
        let cartona = '';

        for (let i = 0; i < data.length;i++){
            cartona += `
            
             <div class="col-md-3">
                <div class="inner">
                    <div class="img">
                        <img class="w-100" src="${data[i]?.image_path}" alt="">
                    </div>
                    <div class="info">
                        <h3 class="text-lg text-white">${data[i]?.title}</h3>
                        <p class="text-white">${data[i]?.description}</p>
                    </div>
                </div>
            </div>
            
            `
        }


        news_container.innerHTML = cartona;
    }
})()
