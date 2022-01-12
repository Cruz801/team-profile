function generateHTML(data) {
    // this funcion will return a string with all html
// declare a var for employee cards string 
// loop thru team data
    // on each loop add new card to array of employees



    let content= `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>`;
    for (let i in data)
    {
        //const on = data[i]['officeNumber']?data[i]['officeNumber']:"n/a";
        let title = `<div class='title'>${data[i].title}<br/>${data[i].role}</div>`;
        let detail = `<div class='detail'>ID: ${data[i].id}<hr/>Email: ${data[i].email}<hr/>`;
        let roleLine ="";
        //'Manager', 'Engineer', 'Intern']
        switch (data[i].role)
        {
            case 'Manager':
                roleLine= ` Office Number: ${data[i].officeNumber}</div>`;
                break;
            case 'Engineer':
                roleLine= ` Github: ${data[i].github}</div>`;
                break;
            case 'Intern':
                    roleLine= ` School: ${data[i].school}</div>`;
                    break;
        }
      

        content += title + detail + roleLine;
           
    }
    content +=`</body></html>`;

    return content;
}


module.exports = generateHTML