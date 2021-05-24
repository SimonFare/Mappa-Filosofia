let areas = [
    {
        alt: "Rinascimento e Umanesimo",
        shape: "poly",
        coords: [1522,450, 1577,398, 1737,398, 1792,450, 1737,504, 1577,504],
        linksTo: "#S400",
        desc: 
            "Per iniziare questo viaggio filosofico, trasferiamoci nel 1400, anno in cui si sviluppa il Rinascimento in Italia. "+
            "Esso viene vissuto come un'età di cambiamenti, di cui quelli fondamentali schematizzati di seguito:"+
            "<ul>"+
            "<li>L'uomo viene posto al centro delle sue attività, quindi la conoscenza diventa antropocentrica, "+
            "in contrapposizione con quella teologica del Medioevo. Nonostante ciò la religione non viene messa del tutto da parte. "+
            "Egli dunque è un microcosmo all'interno di un macrocosmo che funziona secondo criteri scientifici e non divini</li>"+
            "<li>Le esplorazioni geografiche sono affiancate da un ampliamento degli orizzonti anche mentale, "+
            "visto che l'individuo si confronta con altre culture.</li>"+
            "<li>La rinascita dell'uomo avviene sotto diversi aspetti: religioso (Lutero), "+
            "politico (Machiavelli), astronomia (Copernico), letterario (Valla) e filosofico.</li>"+
            "<li> Nasce la filologia, ossia lo studio particolare che si interessa alla rivalutazione "+
            "dei classici, di cui gli umanisti riprendono i pensieri.</li>"+
            "</ul>"+
            "<span class=connect> DA COSA DIPENDONO TUTTI QUESTI CAMBIAMENTI? </span>"+
            "Nel 1453, in seguito alla caduta di Costantinopoli, numerosi intellettuali "+
            "fuggirono verso Occidente, favorendo la diffusione del greco, che permise agli "+
            "studiosi di tradurre.",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Spiegazione 500-600",
        shape: "poly",
        coords: [40,450, 97,398, 257,398, 310,450, 257,504, 97,504],
        linksTo: "#S600",
        desc: 
            "Nel 1527 ci fu il sacco di Roma ad opera dei Lanzichenecchi inviati da Carlo V. "+
            "Durante il 1400 le monarchie si rafforzarono grazie ai metalli preziosi e ai nuovi "+
            "traffici instaurati con le nuove colonie. Con la creazione degli eserciti regi non "+
            "c'è bisogno che i signori feudali contribuiscano all'esercito e si spezzano "+
            "i legami feudali, conducendo all'assolutismo e, dunque, alla filosofia di Hobbes. "+
            "Nel 1543 viene messo in discussione il sistema aristotelico-tolemaico, di stampo geocentrico: "+
			"<ul>"+
			"<li>Cosmo finito</li>"+
			"<li>Centro del cosmo è la terra</li>"+
			"<li>Divisione tra sfera sublunare e sopralunare</li>"+
			"<li>Pianeti racchiusi in sfere in cristallo, che li fanno muovere</li>"+
			"<li>Intorno alla Terra girano il Sole e i cinque pianeti allora visibili ad occhio nudo</li>"+
			"</ul>"+
			"Ciò avviene perchè la fisica di Aristotele è vera logicamente ma non scientificamente, visto che la "+
			"metafisica studia il Motore Immobile, e dal 1543 i fenomeni devono avere una giustificazione matematica "+
			"oltre che logica. Tutto il processo di Rivoluzione partì dall'operato di Copernico.",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Razionalismo",
        shape: "poly",
        coords: [310,132, 360,80, 526,80, 580,132, 526,185, 363,185],
        linksTo: "#Raz",
        desc: "",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Empirismo",
        shape: "poly",
        coords: [1252,132, 1302,80, 1468,80, 1522,132, 1468,185, 1302,185],
        linksTo: "#Emp",
        desc: "",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Filosofia della Storia",
        shape: "poly",
        coords: [90,1040, 144,986, 302,986, 360,1040, 302,1092, 144,1092],
        linksTo: "#FStoria",
        desc: "",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Filosofia dello Stato",
        shape: "poly",
        coords: [1485,1040, 1539,986, 1697,986, 1755,1040, 1697,1092, 1539,1092],
        linksTo: "#FStato",
        desc: "",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Immanuel Kant",
        shape: "poly",
        coords: [1118,1308, 1168,1255, 1313,1255, 1363,1308, 1313,1360, 1168,1360],
        linksTo: "#Kant",
        desc: "",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Georg Hegel",
        shape: "poly",
        coords: [480,1308, 530,1255, 675,1255, 725,1308, 675,1360, 530,1360],
        linksTo: "#Hegel",
        desc: "",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Nicola Cusano",
        shape: "rect",
        coords: [1284,342,1414,402],
        linksTo: "#Cusano",
        desc: 
            "Nel 1401 diventa esponente della Chiesa Romana e partecipa a vari concili. "+
            "Essendo un grande teologo e filosofo non rimane insensibile agli stimoli del Rinascimento "+
            "e dal 1438 al 1449 scrive il DE DOCTA IGNORANTIA. In tale trattato egli espone il problema "+
            "dell'essere ignoranti in quanto la conoscenza è limitata; ci sono infatti tre quesiti ai quali "+				
            "l'uomo non può dare risposta:"+
            "<ul>"+
            "<li> L'esistenza di Dio </li>"+
            "<li> La finitudine o l'infinitudine del mondo </li>"+
            "<li> La mortalità o l'immortalità dell'anima </li>"+
            "</ul>"+
            "Quando l'essere umano ammette di essere ignorante, dimostra di essere saggio.",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Niccolò Machiavelli",
        shape: "rect",
        coords: [1340,537,1485,582],
        linksTo: "#Machiavelli",
        desc: 
            "È un uomo attento agli avvenimenti storici e politici del suo tempo, mostrando interesse "+
            "non solo per l'Italia ma anche per l'intera Europa, andando anche in Francia e Germania. "+
            "Egli è un umanista in quanto riprende Tito Livio, storico romano che nei suoi testi descrive "+
            "l'ascesa di Roma, ma al contempo è antiumanista visto che reputa la condizione dell'uomo triste, "+
            "in quanto la sua natura è subdola. <br>"+
            "Proprio per questo motivo egli scrive 'IL PRINCIPE', un trattato per il corretto esercizio della politica, "+
            "che viene intesa come scienza, e quindi per come gestire uno stato più che come generarne uno. "+
            "Egli, dopotutto, vive un'Italia unita culturalmente ma frammentata politicamente, a differenza "+
            "degli altri stati quali Francia e Spagna che divennero Stati Nazionali. <br>"+
            "Nel trattato il buon governante può anche utilizzare metodi poco ortodossi, se utilizzati per il bene "+
            "pubblico, che deve salvaguardare anche attraverso la qualità della golpe e del lione, furbo e forte, "+
            "e alla virtù per eccellenza: la fortuna, nonché la capacità di prevedere gli eventi e trovare soluzioni. "+
            "La politica del governatore deve essere dunque svincolata dalla morale e dalla religione, ma deve essere "+
            "in funzione della sicurezza e della felicità dei cittadini. <br>"+
            "<span class=important> I pilastri fondamentali della sua filosofia sono l'oggettività storica e il realismo politico. "+
            "La prima analizza il contemporaneo in maniera fredda e distaccata, perchè solo con la ragione si può "+
            "reagire in modo concreto; la seconda prende decisioni in base all'oggettività storica. </span>",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Thomas Hobbes",
        shape: "rect",
        coords: [1235,720,1385,760],
        linksTo: "#Hobbes",
        desc: 
            "Egli scrive il Leviatano, un mostro biblico che in questo testo incarna lo Stato, e "+
            "il Decive nel 1645, in cui fa una riflessione sulla genesi del potere e il primo paragrafo di intitola Libertà.<br>"+
            "La sua filosofia è differente da quella di Machiavelli perchè quest'ultimo da della politica "+
            "una scienza infallibile; Hobbes, invece, stabilisce una filosofia della politica che si pone alcuni quesiti: "+
            "<ol>"+
                "<li>Cos'è la politica?</li>"+
                "<li>Come dev'essere?</li>"+
                "<li>A cosa serve?</li>"+
                "<li>Chi ha stabilito che gli uomini devono esser governati?</li>"+
            "</ol>"+
            "Durante la Guerra dei Trent'anni egli cerca di dare una giustificazione all'Assolutismo "+
            "partendo da una riflessione sulla natura umana, con la domanda: "+
            "<span class=connect> SE NON FOSSE PRESENTE UNO STATO CON LE LEGGI?</span>"+
            "Formula l'ipotesi di uno Stato di Natura, ossia un momento in cui l'uomo viveva "+
            "insieme agli altri senza leggi fuorchè quelle della Natura. L'uomo è bestia tra "+
            "le bestie, senza regole, vive una vita pericolosa ogni secondo, perchè non ci sono le leggi dello Stato.<br>"+
            "La legge naturale è insita nell'uomo e propende per la conservazione del corpo, visto che risulta dunque "+
            "essere contro natura cercare la morte. <br>"+
            "La ricerca del cibo, però, mette gli uomini in competizione tra di loro facendo sorgere la "+
            "LEGGE DEL PIÙ FORTE e dunque la natura dell'uomo homo homini lupus.<br>"+
            "Non esiste socialità ma competizione, paura invece che serenità, guerra invece che pace, sopravvivenza "+
            "invece che giustizia. Nello stato di natura la libertà è talmente tanta che può essere smorzata se non si è "+
            "il più forte. A questo punto nasce l'organizzazione politica quando si inizia a trovare "+
            "un accordo con gli altri uomini anzichè farsi giustizia da sé. <br>"+
            "La ragione è una facoltà dell'uomo che consiglia di rinunciare alla libertà in parte e "+
            "favorire la vita serena sotto un governo, infatti la società nasce da un contratto tra gli uomini per garantire "+
            "sopravvivenza e gloria.",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "John Locke",
        shape: "rect",
        coords: [1170,455, 1265,485],
        linksTo: "#Locke",
        desc: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia mollitia molestiae doloremque illo inventore, harum ducimus quos repellendus cumque, aliquam doloribus accusantium esse qui vel accusamus fuga itaque laudantium? Commodi hic consequatur iusto sequi voluptatibus, distinctio enim voluptate magni explicabo tenetur voluptates rerum reiciendis labore eligendi voluptas quibusdam perspiciatis atque nihil sint! Eum odit numquam, nam quisquam optio sequi inventore at similique ex? Corporis accusamus culpa qui iure tempore odit, consectetur reiciendis quos accusantium non odio assumenda ipsum laboriosam similique mollitia dolore perferendis modi praesentium nobis, eveniet magnam neque? At inventore beatae esse fugiat cum eos earum maxime corporis unde quibusdam id nam ut dolore accusantium vitae natus, ipsum aliquam hic perspiciatis placeat mollitia voluptate! Quibusdam nulla voluptates excepturi libero? Delectus, dolorem atque laboriosam placeat maiores sit praesentium earum culpa repellat iste ipsam aliquam quidem corrupti. Architecto enim officia illo placeat nisi aut laboriosam rem quaerat nemo inventore. Rerum sapiente nobis totam placeat harum perferendis at officia nostrum? Officiis hic aliquid iusto ullam laudantium, totam cupiditate corporis reprehenderit eligendi laborum enim porro provident nam fugiat nesciunt tenetur nihil voluptatum, repellendus alias ducimus repellat esse? Possimus earum nulla veniam quasi distinctio tenetur quisquam necessitatibus reiciendis vitae molestiae at qui maxime ipsam repellat sapiente magnam voluptatum doloribus dolorem quam, officiis veritatis recusandae eligendi? Nulla neque et sint error dolorum facilis quos cupiditate asperiores architecto rerum nihil fugiat laborum fugit, possimus dolores? Nisi nostrum quo facere. Non libero nemo fugit ut quod deserunt. Libero deleniti impedit mollitia animi ipsum expedita illum, incidunt fuga reprehenderit beatae ratione non possimus aspernatur nisi perspiciatis modi numquam dicta pariatur totam delectus vitae illo molestias voluptas. Culpa minima debitis iure animi velit quia omnis minus amet, vero quibusdam ducimus maxime necessitatibus eum quisquam! Doloribus doloremque amet blanditiis dolore quaerat, illum quo accusamus, voluptatem, consequatur suscipit illo voluptas eaque minus culpa error sequi. Natus harum excepturi quam, aliquam nisi aperiam perferendis, exercitationem suscipit eius eos pariatur eaque quo nihil cupiditate nesciunt cumque! Eveniet, minus asperiores rerum expedita magni rem officia dolorem, ut ducimus excepturi fuga, fugiat sint. Mollitia illum accusantium sit beatae, unde nam debitis soluta nulla quaerat id facilis vero cumque est assumenda sequi eveniet et blanditiis dignissimos voluptate. Provident ipsum at neque vero itaque cum ullam debitis error ratione eveniet. Maxime dolorem debitis sequi repellendus voluptatum accusamus, non nam eligendi. Officiis ut, temporibus laborum ipsum quasi veniam, veritatis, iure possimus voluptas ullam pariatur incidunt assumenda. Aliquid, nam?    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia mollitia molestiae doloremque illo inventore, harum ducimus quos repellendus cumque, aliquam doloribus accusantium esse qui vel accusamus fuga itaque laudantium? Commodi hic consequatur iusto sequi voluptatibus, distinctio enim voluptate magni explicabo tenetur voluptates rerum reiciendis labore eligendi voluptas quibusdam perspiciatis atque nihil sint! Eum odit numquam, nam quisquam optio sequi inventore at similique ex? Corporis accusamus culpa qui iure tempore odit, consectetur reiciendis quos accusantium non odio assumenda ipsum laboriosam similique mollitia dolore perferendis modi praesentium nobis, eveniet magnam neque? At inventore beatae esse fugiat cum eos earum maxime corporis unde quibusdam id nam ut dolore accusantium vitae natus, ipsum aliquam hic perspiciatis placeat mollitia voluptate! Quibusdam nulla voluptates excepturi libero? Delectus, dolorem atque laboriosam placeat maiores sit praesentium earum culpa repellat iste ipsam aliquam quidem corrupti. Architecto enim officia illo placeat nisi aut laboriosam rem quaerat nemo inventore. Rerum sapiente nobis totam placeat harum perferendis at officia nostrum? Officiis hic aliquid iusto ullam laudantium, totam cupiditate corporis reprehenderit eligendi laborum enim porro provident nam fugiat nesciunt tenetur nihil voluptatum, repellendus alias ducimus repellat esse? Possimus earum nulla veniam quasi distinctio tenetur quisquam necessitatibus reiciendis vitae molestiae at qui maxime ipsam repellat sapiente magnam voluptatum doloribus dolorem quam, officiis veritatis recusandae eligendi? Nulla neque et sint error dolorum facilis quos cupiditate asperiores architecto rerum nihil fugiat laborum fugit, possimus dolores? Nisi nostrum quo facere. Non libero nemo fugit ut quod deserunt. Libero deleniti impedit mollitia animi ipsum expedita illum, incidunt fuga reprehenderit beatae ratione non possimus aspernatur nisi perspiciatis modi numquam dicta pariatur totam delectus vitae illo molestias voluptas. Culpa minima debitis iure animi velit quia omnis minus amet, vero quibusdam ducimus maxime necessitatibus eum quisquam! Doloribus doloremque amet blanditiis dolore quaerat, illum quo accusamus, voluptatem, consequatur suscipit illo voluptas eaque minus culpa error sequi. Natus harum excepturi quam, aliquam nisi aperiam perferendis, exercitationem suscipit eius eos pariatur eaque quo nihil cupiditate nesciunt cumque! Eveniet, minus asperiores rerum expedita magni rem officia dolorem, ut ducimus excepturi fuga, fugiat sint. Mollitia illum accusantium sit beatae, unde nam debitis soluta nulla quaerat id facilis vero cumque est assumenda sequi eveniet et blanditiis dignissimos voluptate. Provident ipsum at neque vero itaque cum ullam debitis error ratione eveniet. Maxime dolorem debitis sequi repellendus voluptatum accusamus, non nam eligendi. Officiis ut, temporibus laborum ipsum quasi veniam, veritatis, iure possimus voluptas ullam pariatur incidunt assumenda. Aliquid, nam?",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Jean-Jacuqes Rousseau",
        shape: "rect",
        coords: [1000,860, 1125,895],
        linksTo: "#Rousseau",
        desc: "",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Blaise Pascal",
        shape: "rect",
        coords: [575,590, 665,630],
        linksTo: "#Pascal",
        desc: "",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Baruch Spinoza",
        shape: "rect",
        coords: [845,360, 950,400],
        linksTo: "#Spinoza",
        desc: 
        "Nacque ad Amsterdam nel 1632, in Olanda, da una famiglia ebrea (trasferitasi li dal Portogallo a causa della diaspora). "+
        "L'Olanda al tempo era il paese più tollerante e dinamico di Europa, dinamico soprattutto grazie ai commerci e alla borsa di Amsterdam dove si vendevano e compravano azioni. "+
        "Mettendo al primo posto l'economia e il commercio i porti rimanevano sempre attivi e per questo l’Olanda si aprì anche a gli scambi culturali.<br>"+
        "Qui ebbe modo di formare la sua personalità e di iniziare la sua speculazione filosofica che lo portò ad essere espulso dalla comunità ebraica e cacciato dalla sinagoga (denigrazione pubblica). "+
        "Secondo gli ebrei bisognava infatti rendersi utili per la società, per questo inizialmente egli lavorava come tagliatore di vetri ottici per cannocchiali. "+
        "Nonostante la sua espulsione gli furono offerte molte cattedre e cariche pubbliche che egli rifiutò in quanto preferiva la libertà di espressione al denaro "+
        "e non voleva piegare le sue idee alle esigenze delle istituzioni. <br>"+
        "La sua filosofia parte dalla filosofia razionalistica di Cartesio e ha come obiettivo la ricerca del bene, ovvero l'etica. "+
        "La sua opera principale è infatti: <br><br>"+
        "<span class=connect> ETICA: ORDINE GEOMETRICO DEMONSTRATA</span> "+
        "In cui utilizza l'impostazione del metodo di Cartesio, riflette sul senso dell'esistenza in quanto l'uomo è collegato ad essa tramite le scelte su un piano morale e sull'origine del male perchè tutto "+
        "è stato generato da una causa divina. Per poter far ciò sono necessari tre punti: "+
        "<ol>"+
        "<li>Delineare e capire la struttura del cosmo</li>"+
        "<li>Individuare il rapporto tra il cosmo e Dio</li>"+
        "<li>Riflettere sull'esistenza</li>"+
        "</ol>"+
        "Per lui l'esistenza è intervenire e fare scelte, nasce però un problema di tipo morale perchè dalla scelta viene il giudizio. "+
        "Dal tutto riusciamo, dunque, a comprendere l'esistenza e ad affrontare il problema del bene e della felicità (Epicuro), secondo Spinoza "+
        "la felicità deriva dal confondersi o dal riconoscersi nell'ordine razionale e necessario del reale, di cui si deve accettare l'organizzazione, "+
        "dal momento che il mondo non può essere diverso da com'è.<br>"+
        "La realtà, inoltre, è derivata da un principio primo ed è manifestazione di esso, il cosmo dunque è immagine di Dio ed essendo la causa perfetta allora anche la realtà lo è. <br><br>"+
        "<span class=connect> LA REALTÀ SI AUTOARTICOLA </span>"+
        "<table>"+
        "<tr>"+
        "<td class=th>CARTESIO</th>"+
        "<td class=th>SPINOZA</th>"+
        "</tr>"+
        "<tr>"+
        "<td>Il mondo è diverso da Dio</td>"+
        "<td>Il mondo, e quindi la Natura, è Dio</td>"+
        "</tr>"+
        "<tr>"+
        "<td>La sostanza è ciò che esiste senza avere bisogno di nulla fuorchè di sé stessa, "+
        "dunque solo Dio è sostanza perchè tutte le cose hanno bisogno di lui</td>"+
        "<td> Dio è sostanza infinita (RES DIVINA)</td>"+
        "</tr>"+
        "<tr>"+
        "<td>Dio è creatore e origine del movimento, secondo una visione che vede l'Universo come meccanicistico → (DIO CAUSA SUI)</td>"+
        "<td>DIO CAUSA SUI, sostanza infinita le cui finite manifestazioni investono tutti gli elementi della natura</td>"+
        "</tr>"+
        "<tr>"+
        "<td>La res cogitans e la res extensa sono autonome e non c'è bisogno dell'esperienza per affermarne la veridicità</td>"+
        "<td>Ha infiniti attributi, gli uomini però ne colgono solo due: "+
        "<ol>"+
        "<li>Infinito pensiero → RES COGITANS</li>"+
        "<li>Infinita estensione → RES EXTENSA</li>"+
        "</ol>"+
        "</td>"+
        "</tr>"+
        "</table>"+
        "<br>"+
        "<span class=connect> La sostanza divina è natura naturata e natura naturante. La prima subisce in modo passivo l'azione della natura naturante, "+
        "che è Dio e visto che Dio è la natura, allora è sia natura naturata, perchè subisce se stesso, sia natura naturante visto che è causa di sè stesso.</span>"+
        "<span class=important>La res divina è libera e necessitata: "+
        "<ul>"+
        "<li>Libera perchè non dipende da nulla se non da sé stessa</li>"+
        "<li>Necessitata perchè viene vincolata, non può non produrre</li>"+
        "</ul>"+
        "L'uomo apparentemente è libero, perchè come parte della natura divina deve sempre scegliere, e nella sua libera essenza non può non produrre. "+
        "Ciò significa che se Dio non ha fini, allora neanche l'uomo li ha."+
        "</span>",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Renato Cartesio",
        shape: "rect",
        coords: [970,230, 1095,265],
        linksTo: "#Cartesio",
        desc: 
        "Riconosciuto come il padre del Razionalismo, secondo cui tutto deve essere controllato dal tribunale della ragione e ogni "+
        "cosa necessita di una giustificazione logica/razionale. Sviluppò anche il piano cartesiano. <br>"+
        "Si sposta molto, rimanendo isolato ma intraprendendo corrispondenze epistolari con altri intellettuali. "+
        "Intraprese studi matematici a Le Flec, gesuiti, però non risultarono produttivi perchè si occupavano maggiormente di studi "+
        "umanistici a scapito di quelli scientifici.<br>"+
        "In quegli anni la conoscenza della natura stava dando risultati certi, dal momento che le scoperte "+
        "scientifiche avvenivano su basi matematiche. La metafisica, tuttavia, manca di basi logiche e quindi la ragione sconfina "+
        "nella fede, arrivando a sviluppare anche un metodo per la ricerca gnoseologica.<br>"+
        "Egli scrisse nel 1637 il DISCORSO DEL METODO, in cui espone appunto, il proprio metodo per creare "+
        "procedimenti così da comprendere diverse discipline, tra cui la Metafisica:"+
        "<ol>"+
        "<li>EVIDENZA: qualunque problema si debba affrontare, bisogna prendere per vero "+
        "solo ciò che è assolutamente chiaro e distinto</li>"+
        "<li>ANALISI: scomposizione del problema in sottoproblemi più semplici risolvibili con l'evidenza</li>"+
        "<li>SINTESI: ricomposizione delle parti scomposte nello step 2</li>"+
        "<li>ENUMERAZIONE/REVISIONE: assicurarsi della correttezza dell'intero procedimento e delle "+
        "conclusioni tratte</li>"+
        "</ol>"+
        "Un errore deriva da una mancata osservazione del metodo. "+
        "<br>"+
        "Fa un'ipotesi limite per mettere alla prova il metodo, interrogandosi sulla distinzione tra vero e falso.<br>"+
        "Secondo lui, infatti, tutto ciò di cui facciamo esperienza è fittizio, come se ci fosse un genio maligno che ci illude che "+
        "2+2=4 (IPOTESI IPERBOLICA, dubbio delle certezze matematiche).<br>"+
        "Ogni certezza viene messa in dubbio per arrivare ad una certezza ultima: <br><br>"+
        "<span class=connect> L'UNICA COSA È L'ESISTENZA DEL PENSIERO, DI PARI PASSO CON L'ESISTENZA "+
        "DEL PENSANTE; SE ESISTE IL COGITO, ESISTE QUALCOSA CHE PENSA LA RES COGITANS, DENTRO "+
        "UN CORPO, LA RES EXTENSA</span>"+
        "<span class=important>ECO COGITO ERGO SUM</span>"+
        "Il pensiero ragiona delle idee:"+
        "<ol>"+
        "<li>INNATE: certamente vere, come l'idea di Dio, alla base del metodo</li>"+
        "<li>AVVENTIZIE: derivano dall'esterno, ottenute tramite i sensi</li>"+
        "<li>FITTIZIE: false,chimeriche</li>"+
        "</ol>"+
        "La materia non può non essere estesa, essendo quest'ultima una caratteristica intrinseca del corpo (primaria); "+
        "mentre le altre sono relative e percepite dai sensi.<br>"+
        "<span class=important>Dio è visto come creatore, in seguito ad una prova ontologica (fa riferimento all'esistenza): Dio è perfetto e infinito, se queste "+
        "idee fossero nate con l'uomo egli avrebbe figurato sè stesso in questo modo; non essendo così significa che l'idea è innata, e vera. "+
        "Dio è perfetto e non ha motivo di ingannare, cade quindi il dubbio metodico e quindi il metodo è valido.</span>"+
        "<span class=connect>Dio essendo perfetto non intrerviene nel mondo e quindi la preghiera risulta inutile visto che Dio è una macchina. → "+
        "DEUS MACHINA</span>"+
        "Ha una visione materialistica/meccanistica, simile a Democrito per materia e movimento; infatti per lui "+
        "Dio crea la materia e genera il movimento, in modo perfetto, ed è causa di sé stesso (causa sui).",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Francesco Bacone",
        shape: "rect",
        coords: [645,330, 760,365],
        linksTo: "#Bacone",
        desc: 
        "Nasce in Francia nel 1561; frequenta la corte di Elisabetta I, infatti viene considerato il pare della tradizione "+
        "e del pensiero scientifico inglese, essendo aperto mentalmente e progressista. <br>"+
        "Scrive il Novum Organum nel 1620, in cui spiega il proprio progetto di voler riorganizzare il sapere tradizionale; ossia il pensiero "+
        "aristotelico (FALSA INDUZIONE), che viene ancora usato per spiegare il mondo, e la magia/alchimia, per indagare la natura, visto che "+
        "non ha un metodo ma solo la fortuna. <br>"+
        "La scienza non è più ermetica ma deve essere vista come confronto e collaborazione, per questo ha bisogno di revisione; anche "+
        "perchè il vero sapere è quello che porta i suoi frutti in pratica e può essere impiegato per migliorare la qualità della vita. <br>"+
        "Egli distingue due tipi di filosofia:"+
        "<ul>"+
        "<li>FILOSOFIA DELLE OPERE</li>"+
        "<ul>"+
        "<li>Conoscenze operative, spendibili e utili al miglioramento della vita</li>"+
        "<li>Scienza applicabile nell'industria</li>"+
        "<li>Il miglioramento è un dovere morale dell'uomo</li>"+
        "</ul>"+
        "<li>FILOSOFIA DELLE PAROLE</li>"+
        "<ul>"+
        "<li>Problemi dell'uomo nel mondo e le conseguenze della vita</li>"+
        "<li>Morale, derivata dall'azione del momento</li>"+
        "<li>Il sapere per il sapere</li>"+
        "</ul>"+
        "</ul>"+
        "Il sapere dunque è potere, non nel senso di assoggettamento, ma il potere di comprendere l'essenza delle cose. "+
        "<span id=connect> La conoscenza è intersoggettiva, quindi trasmissibile e comprensibile a tutti; non essendo più "+
        "privata ha bisogno di una nuova organizzazione e di un metoo (VERA INDUZIONE → DEDUZIONE)</p>"+
        "Il metodo aristotelico si basava sui sensi anticipando la natura, ottenendo dunque una conoscenza particolare e ridotta per ottenere conclusioni generali → "+
        "(METODO INDUTTIVO). Per quanto riguarda invece il metoo di Bacone, esso si basa su un ragionamento dal generale al particolare → "+
        "(METODO DEDUTTIVO).<br>"+
        "Si devono quindi demolire i retaggi passati e costruire un nuovo sapere, tali passaggi si chiamano rispettivamente: "+
        "<ul>"+
        "<li>PARS DESTRUENS:</li>"+
        "Consiste nell'eliminazione degli Idola, ossia i pregiudizi dell'indiviuo che afferma prima di conoscere. Questi ci deviano dalla conoscenza "+
        "scientifica di forma ed essenza delle cose, che sono comprensibili solo con il metodo e non con i pregiudizi. Gli Idola sono 4, con "+
        "varie origini e dipendono dal contesto: "+
        "<ul>"+
        "<li>IDOLA TRIBUS (tribù)</li>"+
        "Sono fondati nella stessa natura umana e nella famiglia, per cui associamo determinate qualità a oggetti che "+
        "sembrano averle ma non le hanno. L'intelletto viene influenzato negativamente dalla volontà e dagli affetti che inducono l'uomo a ricercare "+
        "solo attraverso i sensi, dimenticandosi della loro ingannevolezza. "+
        "<li>IDOLA SPECUS (spelonca, caverna)</li>"+
        "Sono fondati nel singolo individuo, che si chiude in una grotta dove la verità si affievolisce a causa del condizionamento che "+
        "deriva da letture e/o dall'educazione. "+
        "<li>IDOLA FORI (foro, piazza)</li>"+
        "Nell'antica Roma era il luogo della retorica, che attraverso le parole ne travisa delle altre. Questi idola sono fondati nel linguaggio, che ha "+
        "parole ambigue, che causano incomprensioni derivate dalle interazioni umane. "+
        "<li>IDOLA THEATRI (teatro)</li>"+
        "Sono i pregiudizi insediati dalle diverse dottrine filosofiche, convinzioni che non vengono abbandonate e dalle pessime regole "+
        "dimostrative (sillogismi). "+
        "</ul>"+
        "<li>PARS COSTRUENS</li>"+
        "Utilizza un metodo simile a quello scientifico-sperimentale, basato sulle "+
        "<ul>"+
        "<li>TABELLE</li>"+
        "<ul>"+
        "<li>PRESENZE: vengono registrati i casi in cui il fenomeno si è verificato</li>"+
        "<li>ASSENZE: vengono registrati i casi affini ai presenti in cui non è avvenuto il fenomeno</li>"+
        "<li>GRADI: vengono registrate la frequenza e l'intensità di un dato fenomeno</li>"+
        "</ul>"+
        "<li> L'eliminazione delle ipotesi errate è detta → PRIMA VENDEMMIA </li>"+
        "<li> Le ISTANZE CRUCIS (ESPERIMENTI CRUCIALI) aiutano a stabilire la verità in un bivio</li>"+
        "</ul>"+
        "</ul>",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Galileo Galilei",
        shape: "rect",
        coords: [500,360, 590,390],
        linksTo: "#Galilei",
        desc: 
        "Fu studente all'Università di Padova e amico di Papa Urbano VIII.<br>"+
        "Nel 1610 scrisse il SIDEREUS NUNCIUS, basato sulla ricerca scientifica con base matematica, visto che per lui "+
        "la matematica e la fisica erano fondamentali per andare oltre i sensi; sviluppò anche un "+
        "metodo scientifico-sperimentale:"+
        "<ol>"+
        "<li>Osservazione</li>"+
        "<li>Ipotesi</li>"+
        "<li>Sperimentazione ripetuta</li>"+
        "<li>Formulazione della legge</li>"+
        "</ol>"+
        "Egli migliorò anche il cannocchiale, con il quale condusse alcune osservazioni:"+
        "<ul>"+
        "<li>Ci sono numerose stelle lontane, quini le Stelle Fisse non sono il limite dell'Universo</li>"+
        "<li>La Luna ha una morfologia simile alla Terra</li>"+
        "<li>Le macchie solari, i corpi celesti sono soggetti a corrosione</li>"+
        "<li>Le fasi di Venere, che derivano dalla rotazione intorno al Sole</li>"+
        "<li>I satelliti di Giove, detti medicei, che son paragonati ad un piccolo sistema solare, "+
        "si ha quindi l'ipotesi di un universo infinito</li>"+
        "</ul>"+
        "Per Galileo la Scienza e la Fede possono coesistere, infatti la scienza scopre nuove cose secondo "+
        "un percorso infinito; mentre la fede è una divina vertià che non influenza la scienza.",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Tycho Brahe",
        shape: "rect",
        coords: [485,490, 570,525],
        linksTo: "#Brahe",
        desc: 
        "Era un astronomo danese che propose un sistema cosmologico misto:"+
        "<ul>"+
        "<li>Pianeti che ruotano intorno al Sole ma tutto il sistema ruota attorno alla Terra, che rimane il centro</li>"+
        "<li>L'Universo è finito</li>"+
        "<li>Elimina le sfere di cristallo e la suddivisione in sub e sopralunare</li>"+
        "</ul>"+
        "Compie uno studio sulle comete, corpi ignei che dovrebbero muoversi nella sublunare insieme all'elemento fuoco; "+
        "tuttavia esse si muovono nella sfera sopralunare, evidenziando un'anomalia. Le comete, inoltre, non infrangono "+
        "le sfere di cristallo, che quindi non esistono.<br>"+
        "La scienza fa dunque grandi passi avanti ma deve sempre far attenzione all'Inqusizione.",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "Niccolò Copernico",
        shape: "rect",
        coords: [360,405, 510,445],
        linksTo: "#Copernico",
        desc: 
        "Pubblica il DE REVOLUTIONIBUS ORBIUM CELESTIUM (Sulla Rivoluzione delle Sfere Celesti), "+
        "il modello aristotelico verrà demolito. La prefazione fu scritta da Osiander che, per evitare "+
        "l'Inquisizione, decise di specificare che ciò che si trovava nel testo fossero delle ipotesi e che "+
        "dopotutto la verità era associata alla Bibbia. <br>"+
        "La sua teoria presenta ancora numerosi riferimenti aristotelici:"+
        "<ul>"+
        "<li>Le orbite mantengono una forma circolare</li>"+
        "<li>I pianeti hanno velocità costante</li>"+
        "<li>Il sole è al centro quindi l'Universo è finito</li>"+
        "<li>Le sfere di cristallo ci sono ancora</li>"+
        "</ul>",
        color: "rgb(135, 220, 220)",
    },
    {
        alt: "GianBattista Vico",
        shape: "rect",
        coords: [455,845, 535,885],
        linksTo: "#Vico",
        desc: "",
        color: "rgb(135, 220, 220)",
    },
];


let main = document.getElementById("main");

let map = document.getElementById("phMap");
let ratio = document.getElementById("phImage").getBoundingClientRect().height / 1400;
let divs;



function show(index) {

    if (index == -1) {
        for (let d of divs) {
            d.style.display = "none"
        }
        return;
    }

    for (let i = 0; i < divs.length; i++) {
        if (i == index) {
            divs[i].style.display = "flex";
        } else {
            divs[i].style.display = "none";
        }
    }

}



for (let a of areas) {

    // Modal
    let modal = document.createElement("div");
    modal.id = "myModal";
    modal.classList += "modal";


    // Modal content
    let content = document.createElement("div");
    content.classList += "content";
    content.style.backgroundColor = a.color;


    // Content description
    let descr = document.createElement("div");
    descr.classList += "description";


    // Content title
    let tit = document.createElement("div");
    tit.classList += "mod-title"
    tit.innerHTML = "<span>" + a.alt + "<br></span>";


    // Append
    descr.innerHTML += a.desc;
    content.appendChild(tit);
    content.appendChild(descr);
    modal.appendChild(content);
    main.appendChild(modal);

    if (modal.scrollHeight > modal.clientHeight) {
        tit.style.position = "fixed";
        tit.style.top = "0";
        tit.style.width = "55%";
        descr.style.paddingTop = "45px";
    }

    // Get all modals
    divs = document.getElementsByClassName("modal");




    // Create area element
    let area = document.createElement("area");

    // Setup alt, shape, and cursor
    area.alt = a.alt;
    area.shape = a.shape;
    //area.href = "/";
    area.style.cursor = "pointer";

    // Add the event which allows modal to show
    area.classList += "mapArea";
    area.addEventListener("click", () => {
        show(getElIndex(area));
    });

    // Scale the coordinates according to the image's aspect ratio
    let scaledCs = "";
    for (let coord of a.coords) {
        let newC = Math.round(coord * ratio);
        scaledCs += newC.toString() + ",";
    }
    area.coords = scaledCs;

    // Append
    map.appendChild(area);
}

setTimeout(() => {
    show(-1);
}, 0);










window.addEventListener("click", (ev) => {
    for (let d of divs) {
        if (ev.target == d) {
            d.style.display = "none";
        }
    }
});

function getElIndex(el) {
    for (var i = 0; el = el.previousElementSibling; i++);
    return i;
}