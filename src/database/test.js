const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-18.7178758",
        lng: "-39.8680755",
        name: "Lar das Meninas",
        about:"Presta assistência a crianças de 05 a 16 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"99999977789",
        images:[
            "https://images.unsplash.com/photo-1573486145949-182147241fa6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1574647267419-cd3adf200aed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor, carinho e paciência para doar.",
        opening_hours: "Horário de visitas Das 7h até 19h",
        open_on_weekends: "1",
    });
    

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    //consultar somente um orphanado, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    //console.log(orphanage)

    //deletar dado da tabela
    //await db.run(`DELETE FROM orphanages WHERE id = "2"`)
})