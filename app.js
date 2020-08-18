    var userNum;
    const header = document.createElement('div');
    header.id = 'head';
    header.className = 'header';

    const btn = document.createElement('button');
    btn.className = 'button';
    btn.id = 'button';
    const text = document.createTextNode("RESIZE ME!");
    btn.addEventListener('click', function() {
       userNum = parseInt(prompt('Choose a length for the side of your box'))
    })


    const container = document.createElement('div');
    container.id = 'main';
    container.className = 'container';

    function createGrid(userNum) {
        if(userNum == undefined) userNum = 16 
    for(let i = 0; i < userNum; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;

        for(let j = 0; j < userNum; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            box.id = 'box' + j;
            row.appendChild(box);
            box.addEventListener('mouseover', function(e) {
                e.target.style.background = 'black'
            });
            box.addEventListener('dblclick', function(e) {
                e.target.style.background = 'white'
            });
            box.addEventListener('click', function(e) {
                e.target.style.background = 'red'
            })
        };
        header.appendChild(btn);
        container.appendChild(row);
        btn.appendChild(text);
}
    };

createGrid(userNum);
    document.body.appendChild(header);
    document.body.appendChild(container);




