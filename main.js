const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'

fetch(url)
    .then((response) => response.json())
    .then((json) => {
        let element = document.getElementById('elem')

        console.log(json)


        var order = json.sort(function(a, b) {

            if (Object.keys(a.body).length < Object.keys(b.body).length) {
                return -1;
            }

        });


        console.log(order);
        console.log(json[0].body.length)
        console.log(json[1].body.length)
        console.log(json[2].body.length)
        console.log(json[3].body.length)
        console.log(json[4].body.length)

        element.innerHTML = `
            <span class="email"> ${order[0].email} </span>
            <span> ID: ${order[0].id} · </span>
            <span> ${order[0].name} · </span>
            <span> PostId: ${order[0].postId} </span>
            <p> ${order[0].body} </p>
            `
        let element2 = document.getElementById('elem2')


        element2.innerHTML = `
                <span class="email"> ${order[1].email} </span>
                <span> ID: ${order[1].id} · </span>
                <span> ${order[1].name} </span>
                <p> ${order[1].body} </p>
                `

        let element3 = document.getElementById('elem3')


        element3.innerHTML = `
                        <span class="email"> ${order[2].email} </span>
                        <span> ID: ${order[2].id} · </span>
                        <span> ${order[2].name} </span>
    
                        <p> ${order[2].body} </p>
                        `
        let element4 = document.getElementById('elem4')


        element4.innerHTML = `
                <span class="email"> ${order[3].email} </span>
                <span> ID: ${order[3].id} · </span>
                <span> ${order[3].name} </span>
                <p> ${order[3].body} </p>
                `
        let element5 = document.getElementById('elem5')


        element5.innerHTML = `
                <span class="email"> ${order[4].email} </span>
                <span> ID: ${order[4].id} · </span>
                <span> ${order[4].name} </span>
                <p> ${order[4].body} </p>
                `






    })
    .catch(err => console.log(err));